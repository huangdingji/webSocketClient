/*
@desc: 1V1匹配
*/
import UIBase from "../base/UIBase";
import GEventDispatch from "../common/GEventDispatch";
import G from "../common/Globals";
import UIManager from "../common/UIManager";
let mvs = require("../network/Matchvs");

const { ccclass, property } = cc._decorator;

@ccclass
export default class uiMatching1v1 extends UIBase {
    onLoad() { 
        super.onLoad();
        this.nodeDict["quit"].on("click", this.leaveRoom, this);
    }

    start() {

    }

    onEnable() {
        GEventDispatch.Instance().on(G.eventType.joinRoomResponse, this.joinRoomResponse, this);
        GEventDispatch.Instance().on(G.eventType.joinOverResponse, this.joinOverResponse, this);
        GEventDispatch.Instance().on(G.eventType.leaveRoomResponse, this.leaveRoomResponse, this);
    }

    onDisable() {
        GEventDispatch.Instance().off(G.eventType.joinRoomResponse, this);
        GEventDispatch.Instance().off(G.eventType.joinOverResponse, this);
        GEventDispatch.Instance().off(G.eventType.leaveRoomResponse, this);
    }

    onDestroy() {

    }

    /*
    @desc: 进入随机房间请求
    */
    joinRandomRoom() {
        let result = null;
        if (G.GLB.matchType === G.GLB.RANDOM_MATCH) {
            result = mvs.engine.joinRandomRoom(G.GLB.MAX_PLAYER_COUNT, '');
            if (result !== 0) {
                console.log('进入房间失败,错误码:' + result);
            }
        }
    }

    /*
    @desc: 进入随机房间回调
    */
    joinRoomResponse(data) {
        if (data.status !== 200) {
            console.log('进入房间失败,异步回调错误码: ' + data.status);
        } else {
            console.log('进入房间成功');
            console.log('房间号: ' + data.roomInfo.roomID);
        }
        G.GLB.roomId = data.roomInfo.roomID;
        let userIds = [G.GLB.userInfo.id]
        console.log('房间用户: ' + userIds);

        for (let j = 0; j < data.roomUserInfoList.length; j++) {
            if (G.GLB.userInfo.id !== data.roomUserInfoList[j].userId) {
                userIds.push(data.roomUserInfoList[j].userId);
            }
        }
        G.GLB.playerUserIds = userIds;
        if (userIds.length >= G.GLB.MAX_PLAYER_COUNT) {
            let result = mvs.engine.joinOver(""); // 发送所有玩家都加入房间
            console.log("发出关闭房间的通知");
            if (result !== 0) {
                console.log("关闭房间失败，错误码：", result);
            }
            G.GLB.playerUserIds = userIds;
        }
    }

    /*
    @desc: 所有玩家进入房间，关闭房间回调
    */
    joinOverResponse(data) {
        if (data.joinOverRsp.status === 200) {
            console.log("关闭房间成功");
            this.notifyGameStart();
        } else {
            console.log("关闭房间失败，回调通知错误码：", data.joinOverRsp.status);
        }
    }

    /*
    @desc: 通知开始游戏
    */
    notifyGameStart() {
        G.GLB.isRoomOwner = true;
        let msg = {
            action: G.GLB.GAME_START_EVENT,
            userIds: G.GLB.playerUserIds
        };
        G.Game.GameManager.sendEventEx(msg);
    }

    /*
    @desc: 离开房间
    */
    leaveRoom() {
        mvs.engine.leaveRoom();
        // UIManager.Instance().closeUI(this.node.name);
        // this.node.destroy();
    }

    /*
    @desc: 离开房间回调
    */
    leaveRoomResponse(data) {
        if (data.leaveRoomRsp.status === 200) {
            console.log("离开房间成功");
            // for (var i = 0; i < this.playerIcons.length; i++) {
            //     var playerIcon = this.playerIcons[i].getComponent('playerIcon');
            //     if (playerIcon) {
            //         playerIcon.init();
            //         break;
            //     }
            // }
            // uiFunc.closeUI(this.node.name);
            // this.node.destroy();
            UIManager.Instance().closeUI(this.node.name);
        } else {
            console.log("离开房间失败");
        }
    }
}
