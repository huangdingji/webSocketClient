import DataManager from "./DataManager";
import FrameManager from "./FrameManager";
import GEventDispatch from "./GEventDispatch";
import NetManager from "./NetManager";
import RoleManager from "./RoleManager";
import UIManager from "./UIManager";
// import mvs from "../network/Matchvs";
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
        mvs.response.loginResponse = this.loginResponse.bind(this); // 用户登录之后回调

        var result = mvs.engine.init(mvs.response, window.GLB.channel, window.GLB.platform, window.GLB.gameId);
        if (result !== 0) {
            console.log('初始化失败,错误码:' + result);
        }
    }

    errorResponse(error, msg) {
        if (error === 1001 || error === 0) {
            UIManager.Instance().openUI("uiTip", function(obj) {
                var uiTip = obj.getComponent("uiTip");
                if (uiTip) {
                    uiTip.setData("网络断开连接");
                }
            });
            setTimeout(function() {
                mvs.engine.logout("");
                cc.game.removePersistRootNode(this.node);
                cc.director.loadScene('lobby');
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

    lobbyShow() {
        UIManager.Instance().closeUI("uiLogin");
        // UIManager.Instance().openUI("uiLobbyPanel");
    }
}
