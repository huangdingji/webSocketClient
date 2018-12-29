/*
@desc: 创建房间
*/
import UIBase from "../base/UIBase";
import UIManager from "../common/UIManager";
import G from "../common/Globals";
import GEventDispatch from "../common/GEventDispatch";

const {ccclass, property} = cc._decorator;

@ccclass
export default class uiCreateRoom extends UIBase {
    onLoad() {
        super.onLoad();
        this.nodeDict["create"].on("click", this.createRoom, this);
    }

    start () {
        
    }

    onEnable() {
        GEventDispatch.Instance().on(G.eventType.createRoomResponse, this.createRoomResponse, this);
    }

    onDisable() {
        GEventDispatch.Instance().off(G.eventType.createRoomResponse, this);
    }

    createRoom() {
        // let create = new mvs.CreateRoomInfo();
        // create.roomName = this.nodeDict["roomName"].getComponent(cc.EditBox).string;
        // create.roomName = "1";
        // // GLB.MAX_PLAYER_COUNT = this.playerCnt;
        // G.GLB.MAX_PLAYER_COUNT = 2;
        // create.maxPlayer = G.GLB.MAX_PLAYER_COUNT;
        // create.mode = 0;
        // create.canWatch = 0;
        // create.visibility = 1;
        // create.roomProperty = G.GLB.MAX_PLAYER_COUNT;
        // let result = mvs.engine.createRoom(create, { maxPlayer: G.GLB.MAX_PLAYER_COUNT });
        // if (result !== 0) {
        //     console.log('创建房间失败,错误码:' + result);
        // }
    }

    createRoomResponse(data) {
        let status = data.rsp.status;
        if (status !== 200) {
            console.log('创建房间失败,异步回调错误码: ' + status);
        } else {
            console.log('创建房间成功:' + JSON.stringify(data.rsp));
            console.log('房间号: ' + data.rsp.roomID);
            G.GLB.roomId = data.rsp.roomID;

            UIManager.Instance().openUI("uiRoom", function(obj) {
                let room = obj.getComponent('uiRoom');
                room.createRoomInit(data.rsp);
                UIManager.Instance().closeUI(this.node.name);
                this.node.destroy();
            }.bind(this));
        }
    }
}
