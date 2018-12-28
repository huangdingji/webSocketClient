/*
@desc: 全局变量
*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class G {
    public static Game = {
        GameManager: null,
        BulletManager: null,
        DuckManger: null,
        PlayerManager: null,

        fireInterval: 1500,
        itemInterval: 8000,
        GameSeconds: 60
    }

    public static GameState = cc.Enum({
        None: 0,
        Pause: 1,
        Play: 2,
        Over: 3,
        End: 4
    })

    public static DirectState = cc.Enum({
        None: 0,
        Left: 1,
        Right: 2
    })

    public static GLB = {
        RANDOM_MATCH: 1,
        PROPERTY_MATCH: 2,
        COOPERATION: 1,
        COMPETITION: 2,
        MAX_PLAYER_COUNT: 2,
        PLAYER_COUNTS: [2],
    
        GAME_START_EVENT: "gameStart",
        GAME_OVER_EVENT: "gameOver",
        READY: "ready",
        ROUND_START: "roundStar",
        SHOOT_GUN_ITEM: "shootGunItem",
        FIRE_EVENT: "fire_event",
        FIRE_ANIM: "fire_anim",
        TOUCH_EVENT: "touch_event",
        GOAL_EVENT: "goal_event",
        DIRECTION: "direction",
        GAME_TIME: "game_time",
    
        channel: 'MatchVS',
        platform: 'alpha',
        gameId: 201488,
        gameVersion: 1,
        IP: "wxrank.matchvs.com",
        PORT: "3010",
        GAME_NAME: "game6",
        appKey: 'fb72bbd6f9ca4804bbb7dae12c710068',
        secret: 'fb1ad6cf74724a27a59ad83c089ad26c',
    
        gameTime: 60,
        speed: 750,
        speedY: 400,
        bounceDistance: 100,
        //双方距离--
        playerMinDistance: 268,
    
        matchType: 1,
        gameType: 2,
        userInfo: null,
        playerUserIds: [],
        isRoomOwner: false,
    
        syncFrame: true,
        FRAME_RATE: 15,
    
        NormalBulletSpeed: 1000,
        limitX: 505,
        roomId: 0,
    }

    public static eventType = {
        openUI: "openUI",
        closeUI: "closeUI",
        gameStart: "gameStart",
        gameOver: "gameOver",
        roundOver: "roundOver",
        roundStart: "roundStart",
        playerDead: "playerDead",
        time: "time",
        score: "score",
        updateCoin: "updateCoin",
        loadBullet: "loadBullet",
    
        initResponse: "initResponse",
        errorResponse: "errorResponse",
        joinRoomResponse: "joinRoomResponse",
        joinRoomNotify: "joinRoomNotify",
        leaveRoomResponse: "leaveRoomResponse",
        leaveRoomNotify: "leaveRoomNotify",
        leaveRoomMedNotify: "leaveRoomMedNotify",
    
        joinOverResponse: "joinOverResponse",
        createRoomResponse: "createRoomResponse",
        getRoomListResponse: "getRoomListResponse",
        getRoomDetailResponse: "getRoomDetailResponse",
        getRoomListExResponse: "getRoomListExResponse",
        kickPlayerResponse: "kickPlayerResponse",
        kickPlayerNotify: "kickPlayerNotify",
        playerAccountGet: "playerAccountGet",
    }
}
