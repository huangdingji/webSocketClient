/*
@desc: 主界面ui
*/

import UIBase from "../base/UIBase";
import UIManager from "../common/UIManager";


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

    createRoom() {
        UIManager.Instance().openUI("uiCreateRoom");
    }

    joinRoom() {
        UIManager.Instance().openUI("uiRoomList");
    }

    randomRoom() {
        // Game.GameManager.blockInput();
        window.GLB.matchType = window.GLB.RANDOM_MATCH; // 修改匹配方式为随机匹配
        console.log('开始随机匹配');
        if (window.GLB.gameType === window.GLB.COOPERATION) {
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
        } else if (window.GLB.gameType === window.GLB.COMPETITION) {
            if (window.GLB.MAX_PLAYER_COUNT === 2) {
                // if (cc.Canvas.instance.designResolution.height > cc.Canvas.instance.designResolution.width) {
                //     uiFunc.openUI("uiMatching1v1Ver", function(obj) {
                //         var matching = obj.getComponent("uiMatching1v1Ver");
                //         matching.joinRandomRoom();
                //     });
                // } else {
                    UIManager.Instance().openUI("uiMatching1v1", function(obj) {
                        let matching = obj.getComponent("uiMatching1v1");
                        matching.joinRandomRoom();
                    });
                // }
            // } else if (GLB.MAX_PLAYER_COUNT === 4) {
            //     if (cc.Canvas.instance.designResolution.height > cc.Canvas.instance.designResolution.width) {
            //         uiFunc.openUI("uiMatching2v2Ver", function(obj) {
            //             var matching = obj.getComponent("uiMatching2v2Ver");
            //             matching.joinRandomRoom();
            //         });
            //     } else {
            //         uiFunc.openUI("uiMatching2v2Ver", function(obj) {
            //             var matching = obj.getComponent("uiMatching2v2Ver");
            //             matching.joinRandomRoom();
            //         });
            //     }
            }
        }
    },
}
