import DataManager from "./DataManager";
import FrameManager from "./FrameManager";
import GEventDispatch from "./GEventDispatch";
import NetManager from "./NetManager";
import RoleManager from "./RoleManager";
import UIManager from "./UIManager";
import G from "./Globals";
import AssetManager from "./AssetManager";
import MatchvsManager from "./MatchvsManager";

/*
desc: 游戏管理器
*/
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    readyCnt = 0;  // 准备玩家数量
    gameState = G.GameState.None; // 当前游戏状态
    start() {
        G.Game.GameManager = this;
        cc.game.addPersistRootNode(this.node);

        // 初始化管理器
        DataManager.Instance();
        FrameManager.Instance();
        GEventDispatch.Instance();
        NetManager.Instance();
        RoleManager.Instance();
        UIManager.Instance();
        AssetManager.Instance();
        MatchvsManager.Instance();
        // 分发系统
        // window.clientEvent.init();

        // 网络系统
        // window.network.chooseNetworkMode();

        // ui系统
        UIManager.Instance().openUI("uiLogin");
    }

    errorResponse(error, msg) {
        if (error === 1001 || error === 0) {
            UIManager.Instance().openUI("uiTip", function (obj) {
                var uiTip = obj.getComponent("uiTip");
                if (uiTip) {
                    uiTip.setData("网络断开连接");
                }
            });
            setTimeout(function () {
                MatchvsManager.Instance().logout();
            }.bind(this), 2500);
        }
        console.log("错误信息：", error, msg);
    }

    /*
    @desc: 初始化回调 1
    */
    initResponse() {
        MatchvsManager.Instance().registerUser();
    }

    /*
    @desc: 注册用户回调 2
    */
    registerUserResponse(userInfo) {
        MatchvsManager.Instance().registerUserResponse(userInfo);
    }

    /*
    @desc: 登录回调 3
    */
    loginResponse(info) {
        if (info.status !== 200) {
            console.log('登录失败,异步回调错误码:' + info.status);
        } else {
            console.log('登录成功');
            this.lobbyShow();
        }
    }

    /*
    @desc: 进入随机房间回调 4
    */
    joinRoomResponse(status, roomUserInfoList, roomInfo) {
        if (status !== 200) {
            console.log("失败 joinRoomResponse:" + status);
            return;
        }
        let data = {
            status: status,
            roomUserInfoList: roomUserInfoList,
            roomInfo: roomInfo
        }
        GEventDispatch.Instance().emit(G.eventType.joinRoomResponse, data);
    }

    /*
    @desc: 当前的房间已经满了 5
    */
    joinOverResponse(joinOverRsp) {
        if (joinOverRsp.status !== 200) {
            console.log("失败 joinOverRsp:" + joinOverRsp);
            return;
        }
        var data = {
            joinOverRsp: joinOverRsp
        }
        GEventDispatch.Instance().emit(G.eventType.joinOverResponse, data);
    }

    /*
    @desc: 登出回调
    */
    logoutResponse(status) {
        console.log("reload lobby");
        cc.game.removePersistRootNode(this.node);
        cc.director.loadScene('lobby');
    }

    /*
    @desc: 显示主界面
    */
    lobbyShow() {
        UIManager.Instance().closeUI("uiLogin", null, true);
        UIManager.Instance().openUI("uiLobbyPanel");
    }

    /*
    @desc: 创建房间回调
    */
    createRoomResponse(rsp) {
        if (rsp.status !== 200) {
            console.log("失败 createRoomResponse:" + rsp);
            return;
        }
        let data = {
            rsp: rsp
        };
        GEventDispatch.Instance().emit(G.eventType.createRoomResponse, data);
    }


    
    /*
    @desc: 离开房间回调
    */
    leaveRoomResponse(leaveRoomRsp) {
        if (leaveRoomRsp.status !== 200) {
            console.log("失败 leaveRoomRsp:" + leaveRoomRsp);
            return;
        }
        let data = {
            leaveRoomRsp: leaveRoomRsp
        }
        GEventDispatch.Instance().emit(G.eventType.leaveRoomResponse, data);
    }

    

    // 玩家行为通知
    sendEventNotify(info) {
        console.log("sendEventNotify" + info);
        var cpProto = JSON.parse(info.cpProto);
        if (info.cpProto.indexOf(G.GLB.GAME_START_EVENT) >= 0) {
            G.GLB.playerUserIds = [G.GLB.userInfo.id];
            var remoteUserIds = JSON.parse(info.cpProto).userIds;
            remoteUserIds.forEach(function (id) {
                if (G.GLB.userInfo.id !== id) {
                    G.GLB.playerUserIds.push(id);
                }
            });
            this.startGame();
        }

        if (info.cpProto.indexOf(G.GLB.GAME_OVER_EVENT) >= 0) {
            // this.gameOver();
        }

        if (info.cpProto.indexOf(G.GLB.READY) >= 0) {
            this.readyCnt++;
            if (G.GLB.isRoomOwner && this.readyCnt >= G.GLB.playerUserIds.length) {
                this.sendRoundStartMsg();
            }
        }

        if (info.cpProto.indexOf(G.GLB.ROUND_START) >= 0) {
            G.Game.GameManager.gameState = G.GameState.Play;
            // setTimeout(function () {
            //     Game.GameManager.gameState = GameState.Play;
            //     this.timeUpdate();
            // }.bind(this), 2000);
            // clientEvent.dispatch(clientEvent.eventType.roundStart);
        }
    }

    frameUpdate(rsp) {
        FrameManager.Instance().onReceiveFrame(rsp);
    }

    /*
    @desc: 开始游戏，切换游戏场景
    */
    startGame() {
        this.readyCnt = 0;
        this.gameState = G.GameState.None;
        // this.rivalScore = 0;
        // this.selfScore = 0;
        // this.isRivalLeave = false;
        // this.gameTime = GLB.gameTime;
        // clearInterval(Game.GameManager.timeId);
        cc.director.loadScene('game', function() {
            UIManager.Instance().openUI("uiGamePanel", function() {
                this.sendReadyMsg();
            }.bind(this));
        }.bind(this));
        console.log(G.GLB.syncFrame, G.GLB.isRoomOwner);
        if (G.GLB.syncFrame === true && G.GLB.isRoomOwner === true) {
            MatchvsManager.Instance().setFrameSync();
        }
    }

    /*
    @desc: 发送准备
    */
    sendReadyMsg() {
        let msg = {action: G.GLB.READY};
        this.sendEventEx(msg);
    }

    /*
    @desc: 发送本局开始
    */
    sendRoundStartMsg() {
        let msg = {action: G.GLB.ROUND_START};
        this.sendEventEx(msg);
    }

    setFrameSyncResponse(rsp) {
        if (rsp.mStatus !== 200) {
            console.log('设置同步帧率失败，status=' + rsp.status);
        } else {
            console.log('设置同步帧率成功, 帧率为:' + G.GLB.FRAME_RATE);
        }
    }

    sendEventEx(msg) {
        MatchvsManager.Instance().sendEventEx(msg);
    }
}
