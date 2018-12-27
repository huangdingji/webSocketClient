/*
@desc: 创建房间
*/
import UIBase from "../base/UIBase";
import UIManager from "../common/UIManager";

let mvs = require("../network/Matchvs");

const {ccclass, property} = cc._decorator;

@ccclass
export default class uiCreateRoom extends UIBase {
    onLoad() {
        super.onLoad();
        this.nodeDict["create"].on("click", this.createRoom, this);
        window.clientEvent.on(window.clientEvent.eventType.createRoomResponse, this.createRoomResponse, this);
    }

    start () {
        
    }

    createRoom() {
        let create = new mvs.CreateRoomInfo();
        // create.roomName = this.nodeDict["roomName"].getComponent(cc.EditBox).string;
        create.roomName = "1";
        // GLB.MAX_PLAYER_COUNT = this.playerCnt;
        window.GLB.MAX_PLAYER_COUNT = 2;
        create.maxPlayer = window.GLB.MAX_PLAYER_COUNT;
        create.mode = 0;
        create.canWatch = 0;
        create.visibility = 1;
        create.roomProperty = window.GLB.MAX_PLAYER_COUNT;
        let result = mvs.engine.createRoom(create, { maxPlayer: GLB.MAX_PLAYER_COUNT });
        if (result !== 0) {
            console.log('创建房间失败,错误码:' + result);
        }
    }

    createRoomResponse(data) {
        let status = data.rsp.status;
        if (status !== 200) {
            console.log('创建房间失败,异步回调错误码: ' + status);
        } else {
            console.log('创建房间成功:' + JSON.stringify(data.rsp));
            console.log('房间号: ' + data.rsp.roomID);
            window.GLB.roomId = data.rsp.roomID;

            UIManager.Instance().openUI("uiRoom", function(obj) {
                let room = obj.getComponent('uiRoom');
                room.createRoomInit(data.rsp);
                UIManager.Instance().closeUI(this.node.name);
                this.node.destroy();
            }.bind(this));
        }
    }
}
