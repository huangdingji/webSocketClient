/*
@desc: UI管理器
*/
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager {
    private static instance: UIManager;

    uiList = new Array;
    cacheUIList = new Array;

    public static Instance() {
        if (null == UIManager.instance) {
            UIManager.instance = new UIManager();
        }
        return UIManager.instance;
    }

    constructor() {

    }

    /*
    @desc: 打开一个ui控件,如果ui控件之前已经
    @uiName: 控件名称
    @callBack: 回调
    */
    openUI(uiName, callBack = null) {
        // 缓存
        for (let i = 0; i < this.cacheUIList.length; i++) {
            let temp = this.cacheUIList[i];
            if (temp && temp.name === uiName) {
                temp.active = true;
                temp.parent = cc.Canvas.instance.node;
                this.uiList.push(temp)
                this.cacheUIList.splice(i, 1);
                let panel = temp.getComponent("UIBase");
                if (panel) {
                    panel.show();
                }
                if (callBack) {
                    callBack(temp);
                }
                // clientEvent.dispatch(clientEvent.eventType.openUI);
                return;
            }
        }
        // 非缓存--
        cc.loader.loadRes('Perfab/' + uiName, function (err, prefab) {
            if (err) {
                cc.error(err.message || err);
                return;
            }
            let temp = cc.instantiate(prefab);
            temp.parent = cc.Canvas.instance.node;
            UIManager.instance.uiList.push(temp)
            let panel = temp.getComponent("UIBase");
            if (panel) {
                panel.show();
            }
            if (callBack) {
                callBack(temp);
            }
            // clientEvent.dispatch(clientEvent.eventType.openUI);
        });
    }

    /*
    @desc: 关闭ui控件
    @uiName: 控件名称
    @callBack: 回调 
    */
    closeUI(uiName, callBack = null) {
        for (let i = this.uiList.length - 1; i >= 0; i--) {
            let temp = this.uiList[i];
            if (temp && temp.name === uiName) {
                temp.active = false;
                temp.removeFromParent(false);
                this.cacheUIList.push(temp);
                this.uiList.splice(i, 1);
                let panel = temp.getComponent("UIBase");
                if (panel) {
                    panel.hide();
                }
                // clientEvent.dispatch(clientEvent.eventType.closeUI);
                if (callBack) {
                    callBack();
                }
                return;
            }
        }
    }

    /*
    @desc: 查找ui控件
    @uiName: 控件名称
    */
    findUI(uiName) {
        for (let i = this.uiList.length - 1; i >= 0; i--) {
            let temp = this.uiList[i];
            if (temp && temp.name === uiName) {
                return temp;
            }
        }
    }
}
