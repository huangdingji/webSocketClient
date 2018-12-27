/*
@desc: UI基类
*/

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBase extends cc.Component {
    nodeDict = {};

    onLoad() {
        let linkWidget = function (self, nodeDict) {
            let children = self.children;
            for (let i = 0; i < children.length; i++) {
                let widgetName = children[i].name;
                if (widgetName && widgetName.indexOf("key_") >= 0) {
                    let nodeName = widgetName.substring(4);
                    if (nodeDict[nodeName]) {
                        cc.error("控件名字重复!" + children[i].name);
                    }
                    nodeDict[nodeName] = children[i];
                }
                if (children[i].childrenCount > 0) {
                    linkWidget(children[i], nodeDict);
                }
            }
        }.bind(this);
        linkWidget(this.node, this.nodeDict);
    }

    show() {
        this.node.active = true;
    }

    hide() {
        this.node.active = false;
    }
}
