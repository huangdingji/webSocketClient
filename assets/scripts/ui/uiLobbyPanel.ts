/*
@desc: 主界面ui
*/

import UIBase from "../base/UIBase";
import UIManager from "../common/UIManager";
import G from "../common/Globals";


const { ccclass, property } = cc._decorator;

@ccclass
export default class uiLobbyPanel extends UIBase {

    onLoad() {
        super.onLoad();
        this.nodeDict["createRoom"].on("click", this.createRoom, this);
        this.nodeDict["joinRoom"].on("click", this.joinRoom, this);
        this.nodeDict["randomRoom"].on("click", this.randomRoom, this);
    }

    start() {
    }

    onEnable() {
    }

    onDisable() {
    }

    onDestroy() {
    }

    createRoom() {
        UIManager.Instance().openUI("uiCreateRoom");
    }

    joinRoom() {
        UIManager.Instance().openUI("uiRoomList");
    }

    randomRoom() {
        // Game.GameManager.blockInput();
        G.GLB.matchType = G.GLB.RANDOM_MATCH; // 修改匹配方式为随机匹配
        console.log('开始随机匹配');
        if (G.GLB.gameType === G.GLB.COOPERATION) {
            // if (window.GLB.MAX_PLAYER_COUNT > 1) {
            //     if (cc.Canvas.instance.designResolution.height > cc.Canvas.instance.designResolution.width) {
            //         uiFunc.openUI("uiMatchingVer", function(obj) {
            //             var matching = obj.getComponent("uiMatching");
            //             matching.joinRandomRoom();
            //         });
            //     } else {
            //         uiFunc.openUI("uiMatching", function(obj) {
            //             var matching = obj.getComponent("uiMatching");
            //             matching.joinRandomRoom();
            //         });
            //     }
            // } else {
            //     cc.director.loadScene('game');
            // }
        } else if (G.GLB.gameType === G.GLB.COMPETITION) {
            if (G.GLB.MAX_PLAYER_COUNT === 2) {
                UIManager.Instance().openUI("uiMatching1v1", function(obj) {
                    let matching = obj.getComponent("uiMatching1v1");
                    matching.joinRandomRoom();
                });
            }
        }
    }
}
