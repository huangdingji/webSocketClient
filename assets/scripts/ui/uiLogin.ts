/*
@desc: 登录UI
*/

import UIBase from "../base/UIBase";
import G from "../common/Globals";

const {ccclass, property} = cc._decorator;

@ccclass
export default class uiLogin extends UIBase {
    onLoad() {
        super.onLoad();
        this.nodeDict["start"].on("click", G.Game.GameManager.matchVsInit, G.Game.GameManager);
    }

    start () {
    }

    onEnable() {
        // TODO:加入事件监听
    }

    onDisable() {
    }

    onDestroy() {
        // TODO:移除事件监听
    }
}
