/*
@desc: 1V1匹配
*/
import UIBase from "../base/UIBase";
let mvs = require("../network/Matchvs");

const { ccclass, property } = cc._decorator;

@ccclass
export default class uiMatching1v1 extends UIBase {
    onLoad() { 
        super.onLoad();
        window.clientEvent.on(clientEvent.eventType.joinRoomResponse, this.joinRoomResponse, this);
        window.clientEvent.on(clientEvent.eventType.joinOverResponse, this.joinOverResponse, this);
    }

    start() {

    }

    joinRandomRoom() {
        let result = null;
        if (window.GLB.matchType === window.GLB.RANDOM_MATCH) {
            result = mvs.engine.joinRandomRoom(window.GLB.MAX_PLAYER_COUNT, '');
            if (result !== 0) {
                console.log('进入房间失败,错误码:' + result);
            }
        // } else if (GLB.matchType === GLB.PROPERTY_MATCH) {
        //     let matchinfo = new mvs.MatchInfo();
        //     matchinfo.maxPlayer = GLB.MAX_PLAYER_COUNT;
        //     matchinfo.mode = 0;
        //     matchinfo.canWatch = 0;
        //     matchinfo.tags = GLB.tagsInfo;
        //     result = mvs.engine.joinRoomWithProperties(matchinfo, "joinRoomWithProperties");
        //     if (result !== 0) {
        //         console.log('进入房间失败,错误码:' + result);
        //     }
        }
    }

    joinRoomResponse(data) {
        if (data.status !== 200) {
            console.log('进入房间失败,异步回调错误码: ' + data.status);
        } else {
            console.log('进入房间成功');
            console.log('房间号: ' + data.roomInfo.roomID);
        }
        window.GLB.roomId = data.roomInfo.roomID;
        let userIds = [window.GLB.userInfo.id]
        console.log('房间用户: ' + userIds);

        // let playerIcon = null;
        for (let j = 0; j < data.roomUserInfoList.length; j++) {
            // playerIcon = this.playerIcons[j].getComponent('playerIcon');
            // if (playerIcon && !playerIcon.userInfo) {
                // playerIcon.setData(data.roomUserInfoList[j]);
                if (GLB.userInfo.id !== data.roomUserInfoList[j].userId) {
                    userIds.push(data.roomUserInfoList[j].userId);
                }
            // }
        }

        // for (let i = 0; i < this.playerIcons.length; i++) {
        //     playerIcon = this.playerIcons[i].getComponent('playerIcon');
        //     if (playerIcon && !playerIcon.userInfo) {
        //         playerIcon.setData(GLB.userInfo);
        //         break;
        //     }
        // }
        window.GLB.playerUserIds = userIds;
        if (userIds.length >= window.GLB.MAX_PLAYER_COUNT) {
            let result = mvs.engine.joinOver("");
            console.log("发出关闭房间的通知");
            if (result !== 0) {
                console.log("关闭房间失败，错误码：", result);
            }

            window.GLB.playerUserIds = userIds;
        }
    }

    joinOverResponse(data) {
        if (data.joinOverRsp.status === 200) {
            console.log("关闭房间成功");
            this.notifyGameStart();
        } else {
            console.log("关闭房间失败，回调通知错误码：", data.joinOverRsp.status);
        }
    }

    notifyGameStart() {
        window.GLB.isRoomOwner = true;
        let msg = {
            action: window.GLB.GAME_START_EVENT,
            userIds: window.GLB.playerUserIds
        };
        window.Game.GameManager.sendEventEx(msg);
    }
}
