import DataManager from "./DataManager";
import FrameManager from "./FrameManager";
import GEventDispatch from "./GEventDispatch";
import NetManager from "./NetManager";
import RoleManager from "./RoleManager";
import UIManager from "./UIManager";
let mvs = require("../network/Matchvs");

/*
desc: 游戏管理器
*/
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    start() {
        window.Game.GameManager = this;
        cc.game.addPersistRootNode(this.node);

        // 初始化管理器
        DataManager.Instance();
        FrameManager.Instance();
        GEventDispatch.Instance();
        NetManager.Instance();
        RoleManager.Instance();
        UIManager.Instance();

        // 分发系统
        window.clientEvent.init();

        // 网络系统
        window.network.chooseNetworkMode();
        // network.chooseNetworkMode();

        // ui系统
        UIManager.Instance().openUI("uiLogin");
    }

    matchVsInit() {
        mvs.response.errorResponse = this.errorResponse.bind(this); // 错误回调
        mvs.response.initResponse = this.initResponse.bind(this);  // 初始化回调
        mvs.response.registerUserResponse = this.registerUserResponse.bind(this); // 注册用户回调
        mvs.response.loginResponse = this.loginResponse.bind(this); // 用户登录回调
        mvs.response.logoutResponse = this.logoutResponse.bind(this); // 用户退出登录的回调
        mvs.response.createRoomResponse = this.createRoomResponse.bind(this); // 创建房间回调
        mvs.response.joinRoomResponse = this.joinRoomResponse.bind(this);  // 加入房间回调
        mvs.response.sendEventNotify = this.sendEventNotify.bind(this);  // 玩家自定义行为通知
        mvs.response.joinOverResponse = this.joinOverResponse.bind(this);  // 当前的房间已经满了
        mvs.response.frameUpdate = this.frameUpdate.bind(this);
        let result = mvs.engine.init(mvs.response, window.GLB.channel, window.GLB.platform, window.GLB.gameId);
        if (result !== 0) {
            console.log('初始化失败,错误码:' + result);
        }
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
                mvs.engine.logout("");
            }.bind(this), 2500);
        }
        console.log("错误信息：" + error);
        console.log("错误信息：" + msg);
    }

    initResponse() {
        console.log('初始化成功，开始注册用户');
        var result = mvs.engine.registerUser();
        if (result !== 0) {
            console.log('注册用户失败，错误码:' + result);
        } else {
            console.log('注册用户成功');
        }
    }

    registerUserResponse(userInfo) {
        var deviceId = 'abcdef';
        var gatewayId = 0;
        window.GLB.userInfo = userInfo;

        console.log('开始登录,用户Id:' + userInfo.id)

        var result = mvs.engine.login(
            userInfo.id,
            userInfo.token,
            window.GLB.gameId,
            window.GLB.gameVersion,
            window.GLB.appKey,
            window.GLB.secret,
            deviceId,
            gatewayId
        );
        if (result !== 0) {
            console.log('登录失败,错误码:' + result);
        }
    }

    loginResponse(info) {
        if (info.status !== 200) {
            console.log('登录失败,异步回调错误码:' + info.status);
        } else {
            console.log('登录成功');
            this.lobbyShow();
        }
    }

    logoutResponse(status) {
        window.network.disconnect();
        console.log("reload lobby");
        cc.game.removePersistRootNode(this.node);
        cc.director.loadScene('lobby');
    }

    lobbyShow() {
        UIManager.Instance().closeUI("uiLogin");
        UIManager.Instance().openUI("uiLobbyPanel");
    }

    createRoomResponse(rsp) {
        if (rsp.status !== 200) {
            console.log("失败 createRoomResponse:" + rsp);
            return;
        }
        let data = {
            rsp: rsp
        };
        window.clientEvent.dispatch(window.clientEvent.eventType.createRoomResponse, data);
    }

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
        window.clientEvent.dispatch(clientEvent.eventType.joinRoomResponse, data);
    }

    joinOverResponse(joinOverRsp) {
        if (joinOverRsp.status !== 200) {
            console.log("失败 joinOverRsp:" + joinOverRsp);
            return;
        }
        var data = {
            joinOverRsp: joinOverRsp
        }
        window.clientEvent.dispatch(clientEvent.eventType.joinOverResponse, data);
    }

    // 玩家行为通知
    sendEventNotify(info) {
        console.log("sendEventNotify" + info);
        var cpProto = JSON.parse(info.cpProto);
        if (info.cpProto.indexOf(GLB.GAME_START_EVENT) >= 0) {
            GLB.playerUserIds = [GLB.userInfo.id];
            var remoteUserIds = JSON.parse(info.cpProto).userIds;
            remoteUserIds.forEach(function (id) {
                if (GLB.userInfo.id !== id) {
                    GLB.playerUserIds.push(id);
                }
            });
            this.startGame();
        }

        if (info.cpProto.indexOf(GLB.GAME_OVER_EVENT) >= 0) {
            this.gameOver();
        }

        if (info.cpProto.indexOf(GLB.READY) >= 0) {
            this.readyCnt++;
            if (GLB.isRoomOwner && this.readyCnt >= GLB.playerUserIds.length) {
                this.sendRoundStartMsg();
            }
        }

        if (info.cpProto.indexOf(GLB.ROUND_START) >= 0) {
            window.Game.GameManager.gameState = window.GameState.Play;
            // setTimeout(function () {
            //     Game.GameManager.gameState = GameState.Play;
            //     this.timeUpdate();
            // }.bind(this), 2000);
            // clientEvent.dispatch(clientEvent.eventType.roundStart);
        }
    }

    frameUpdate(rsp) {
        console.log("frameUpdate", rsp);
        // for (var i = 0; i < rsp.frameItems.length; i++) {
        //     if (Game.GameManager.gameState === GameState.Over) {
        //         return;
        //     }
        //     var info = rsp.frameItems[i];
        //     var cpProto = JSON.parse(info.cpProto);
        //     if (info.cpProto.indexOf(GLB.DIRECTION) >= 0) {
        //         if (GLB.userInfo.id === info.srcUserID) {
        //             Game.PlayerManager.self.setDirect(cpProto.direction);
        //         } else {
        //             Game.PlayerManager.rival.setDirect(cpProto.direction);
        //         }
        //     }

        //     if (info.cpProto.indexOf(GLB.FIRE_ANIM) >= 0) {
        //         if (GLB.userInfo.id === info.srcUserID) {
        //             Game.PlayerManager.self.firePreAnim();
        //         } else {
        //             Game.PlayerManager.rival.firePreAnim();
        //         }
        //     }

        //     if (info.cpProto.indexOf(GLB.FIRE_EVENT) >= 0) {
        //         if (GLB.userInfo.id === info.srcUserID) {
        //             Game.PlayerManager.self.fireNotify(cpProto.speed);
        //         } else {
        //             Game.PlayerManager.rival.fireNotify(cpProto.speed);
        //         }
        //     }

        //     if (info.cpProto.indexOf(GLB.GAME_TIME) >= 0) {
        //         this.gameTime--;
        //         if (this.gameTime < 0) {
        //             this.gameTime = 0;
        //         }
        //     }

        //     if (info.cpProto.indexOf(GLB.GOAL_EVENT) >= 0) {
        //         // cpProto.playerId 为受伤方id--
        //         if (GLB.userInfo.id === cpProto.playerId) {
        //             Game.PlayerManager.self.hitNotify();
        //             this.rivalScore++;
        //         } else {
        //             Game.PlayerManager.rival.hitNotify();
        //             this.selfScore++;
        //         }
        //         clientEvent.dispatch(clientEvent.eventType.score);
        //     }
        // }
        // if (Game.PlayerManager && Game.PlayerManager.self && Game.PlayerManager.rival) {
        //     if (Math.abs(Game.PlayerManager.self.targetPosX - Game.PlayerManager.rival.targetPosX) < GLB.playerMinDistance) {
        //         if (Game.PlayerManager.self.targetPosX < Game.PlayerManager.rival.targetPosX) {
        //             Game.PlayerManager.self.targetPosX -= GLB.bounceDistance;
        //             Game.PlayerManager.rival.targetPosX += GLB.bounceDistance;
        //         } else {
        //             Game.PlayerManager.self.targetPosX += GLB.bounceDistance;
        //             Game.PlayerManager.rival.targetPosX -= GLB.bounceDistance;
        //         }
        //     }
        //     Game.PlayerManager.self.move();
        //     Game.PlayerManager.rival.move();

        // }
    }

    startGame() {
        // this.readyCnt = 0;
        // this.gameState = window.GameState.None;
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

        if (window.GLB.syncFrame === true && window.GLB.isRoomOwner === true) {
            let result = mvs.engine.setFrameSync(window.GLB.FRAME_RATE);
            if (result !== 0) {
                console.log('设置帧同步率失败,错误码:' + result);
            }
        }
    }

    sendReadyMsg() {
        let msg = {action: window.GLB.READY};
        this.sendEventEx(msg);
    }

    sendRoundStartMsg() {
        let msg = {action: window.GLB.ROUND_START};
        this.sendEventEx(msg);
    }

    setFrameSyncResponse(rsp) {
        if (rsp.mStatus !== 200) {
            console.log('设置同步帧率失败，status=' + rsp.status);
        } else {
            console.log('设置同步帧率成功, 帧率为:' + window.GLB.FRAME_RATE);
        }
    }

    sendEventEx(msg) {
        let result = mvs.engine.sendEventEx(0, JSON.stringify(msg), 0, window.GLB.playerUserIds);
        if (result.result !== 0) {
            console.log("sendEventEx", msg.action, result.result);
        }
    }
}
