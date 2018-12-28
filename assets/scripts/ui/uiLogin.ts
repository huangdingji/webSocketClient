/*
@desc: 登录UI
*/

import UIBase from "../base/UIBase";
import G from "../common/Globals";
import AssetManager from "../common/AssetManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class uiLogin extends UIBase {
    onLoad() {
        super.onLoad();
        this.nodeDict["start"].on("click", G.Game.GameManager.matchVsInit, G.Game.GameManager);
    }

    start () {
        let bg = cc.find("bg/bot-bg", this.node);
        AssetManager.Instance().setSpriteFrame(bg, "textures/game/background");
        setTimeout(function(){
            AssetManager.Instance().setSpriteFrame(bg, "textures/lobby/ready");
        }, 2000);

        setTimeout(function(){
            AssetManager.Instance().setSpriteFrame(bg, "textures/game/background");
        }, 4000);
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
