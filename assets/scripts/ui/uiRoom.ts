/*
@desc: 房间
*/
import UIBase from "../base/UIBase";
let mvs = require("../network/Matchvs");

const {ccclass, property} = cc._decorator;

@ccclass
export default class uiRoom extends UIBase {

    roomId = 0;
    ownerId = 0;
    players = [];

    onLoad () {
        super.onLoad();
        this.nodeDict["startGame"].on("click", this.startGame, this);
    }

    start () {

    }

    createRoomInit(rsp) {
        this.roomId = rsp.roomID;
        this.ownerId = rsp.owner;
        this.players[0] = this.ownerId;
        // this.players[0].setData(this.ownerId, this.ownerId);
        window.GLB.isRoomOwner = true;
        // this.refreshStartBtn();
    }

    joinRoomInit(roomUserInfoList, roomInfo) {
        roomUserInfoList.sort(function(a, b) {
            if (roomInfo.ownerId === b.userId) {
                return 1;
            }
            return 0;
        });
        this.ownerId = roomInfo.ownerId;
        for (var j = 0; j < roomUserInfoList.length; j++) {
            // this.players[j].setData(roomUserInfoList[j].userId, this.ownerId);
            this.players[j] = roomUserInfoList[j].userId;
        }
        // this.refreshStartBtn();
    }

    startGame() {
        // if (!GLB.isRoomOwner) {
        //     uiFunc.openUI("uiTip", function(obj) {
        //         var uiTip = obj.getComponent("uiTip");
        //         if (uiTip) {
        //             uiTip.setData("等待房主开始游戏");
        //         }
        //     }.bind(this));
        //     return;
        // }
        var userIds = [];
        var playerCnt = 0;
        for (var j = 0; j < this.players.length; j++) {
            // if (this.players[j].userId !== 0) {
                // playerCnt++;
                // userIds.push(this.players[j].userId);
            // }
            if(this.players[j] !== 0) {
                playerCnt++;
                userIds.push(this.players[j]);
            }
        }


        if (playerCnt === window.GLB.MAX_PLAYER_COUNT) {
            var result = mvs.engine.joinOver("");
            console.log("发出关闭房间的通知");
            if (result !== 0) {
                console.log("关闭房间失败，错误码：", result);
            }

            window.GLB.playerUserIds = userIds;

            var msg = {
                action: window.GLB.GAME_START_EVENT,
                userIds: userIds
            };
            window.Game.GameManager.sendEventEx(msg);
        // } else {
        //     uiFunc.openUI("uiTip", function(obj) {
        //         var uiTip = obj.getComponent("uiTip");
        //         if (uiTip) {
        //             uiTip.setData("房间人数不足");
        //         }
        //     }.bind(this));
        }
    }

}
