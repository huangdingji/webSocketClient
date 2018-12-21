/**
 * Created by liyg on 2018/12/12.
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIBase extends cc.Component {

    onLoad () {
        this.node["visibleAll"](this.dealChild.bind(this));
    }

    //处理子节点
    dealChild (node) {
        let sName = node.getName();
        if(sName) {
            //将节点挂载到this
            this[sName] = node;

            //添加事件
            if(this["touchstart_"+sName]) {
                node.on(cc.Node.EventType.TOUCH_START, this["touchstart_"+sName], this);
            } else  if(this["click_"+sName]) {
                node.on(cc.Node.EventType.TOUCH_END, this["click_"+sName], this);
            }
        }
    }

    //关闭界面
    closeUI () {
        this.node.destroy();
    }

    start () {

    }

    // update (dt) {}
}
