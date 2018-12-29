import G from "./Globals";

/*
@desc: matchvs管理器
*/
const {ccclass, property} = cc._decorator;

@ccclass
export default class MatchvsManager {
    private static instance: MatchvsManager;

    engine = null;
    response = null;

    public static Instance() {
        if (null == MatchvsManager.instance) {
            MatchvsManager.instance = new MatchvsManager();
        }
        return MatchvsManager.instance;
    }

    constructor() {
        this.engine = new MatchvsEngine();
        this.response = new MatchvsResponse();
    }

    matchVsInit() {
        this.response.errorResponse = G.Game.GameManager.errorResponse.bind(G.Game.GameManager); // 错误回调
        this.response.initResponse = G.Game.GameManager.initResponse.bind(G.Game.GameManager);  // 初始化回调
        this.response.registerUserResponse = G.Game.GameManager.registerUserResponse.bind(G.Game.GameManager); // 注册用户回调
        this.response.loginResponse = G.Game.GameManager.loginResponse.bind(G.Game.GameManager); // 用户登录回调
        this.response.logoutResponse = G.Game.GameManager.logoutResponse.bind(G.Game.GameManager); // 用户退出登录的回调
        this.response.createRoomResponse = G.Game.GameManager.createRoomResponse.bind(G.Game.GameManager); // 创建房间回调
        this.response.joinRoomResponse = G.Game.GameManager.joinRoomResponse.bind(G.Game.GameManager);  // 加入房间回调
        this.response.leaveRoomResponse = G.Game.GameManager.leaveRoomResponse.bind(G.Game.GameManager); // 离开房间回调
        this.response.sendEventNotify = G.Game.GameManager.sendEventNotify.bind(G.Game.GameManager);  // 玩家自定义行为通知
        this.response.joinOverResponse = G.Game.GameManager.joinOverResponse.bind(G.Game.GameManager);  // 当前的房间已经满了
        this.response.frameUpdate = G.Game.GameManager.frameUpdate.bind(G.Game.GameManager);          // 帧同步
        let result = this.engine.init(this.response, G.GLB.channel, G.GLB.platform, G.GLB.gameId);
        if (result !== 0) {
            console.log('初始化失败,错误码:' + result);
        }
    }

    registerUser() {
        console.log('初始化成功，开始注册用户');
        let result = this.engine.registerUser();
        if (result !== 0) {
            console.log('注册用户失败，错误码:' + result);
        } else {
            console.log('注册用户成功');
        }
    }

    registerUserResponse(userInfo) {
        let deviceId = 'abcdef';
        let gatewayId = 0;
        G.GLB.userInfo = userInfo;
        console.log('开始登录,用户Id:' + userInfo.id)
        let result = this.engine.login(
            userInfo.id,
            userInfo.token,
            G.GLB.gameId,
            G.GLB.gameVersion,
            G.GLB.appKey,
            G.GLB.secret,
            deviceId,
            gatewayId
        );
        if (result !== 0) {
            console.log('登录失败,错误码:' + result);
        }
    }

    logout() {
        this.engine.logout("");
    }

    joinRandomRoom() {
        this.engine.joinRandomRoom(G.GLB.MAX_PLAYER_COUNT, "");
    }

    joinOver() {
        let result = this.engine.joinOver(""); // 发送所有玩家都加入房间
        console.log("发出关闭房间的通知");
        if (result !== 0) {
            console.log("关闭房间失败，错误码：", result);
        }
    }

    leaveRoom() {
        this.engine.leaveRoom();
    }

    setFrameSync() {
        let result = this.engine.setFrameSync(G.GLB.FRAME_RATE);
        if (result !== 0) {
            console.log('设置帧同步率失败,错误码:' + result);
        }
    }

    sendEventEx(msg) {
        let result = this.engine.sendEventEx(0, JSON.stringify(msg), 0, G.GLB.playerUserIds);
        if (result.result !== 0) {
            console.log("sendEventEx", msg.action, result.result);
        }
    }

    sendFrameEvent(msg) {
        this.engine.sendFrameEvent(msg);
    }
}
