/*
@desc: 登录UI
*/

import UIBase from "../base/UIBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class uiLogin extends UIBase {
    start () {
        this.nodeDict["start"].on("click", window.Game.GameManager.matchVsInit, window.Game.GameManager);
    }
}
