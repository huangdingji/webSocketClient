/*
@desc: 帧同步管理器
*/
import GEventDispatch from "./GEventDispatch";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FrameManager {

    //缓存帧列表
    private frameArray;
    //补帧数
    private fillFrameNum: number = 3;
    //状态 0 停止 1 正常 2 追帧  
    private curState: number = 0;
    //当前客户端帧序
    private curFrame: number = 0;
    //当前服务端帧序
    private curMainFrame: number = 0;

    private static instance: FrameManager;
    public static Instance() {
        if (null == FrameManager.instance) {
            FrameManager.instance = new FrameManager();
        }
        return FrameManager.instance;
    }

    constructor() {
        this.onEnable();
    }

    onEnable() {
        GEventDispatch.Instance().on("1000", this.onBattleSync, this);
    }

    onDisable() {
        GEventDispatch.Instance().off("1000", this);
    }

    /*
    @desc: 收到战斗数据
    */
    onBattleSync(msg) {
        this.onReceiveFrame(msg);
    }

    /*
    @desc: 收到帧；服务1s发15帧，客户端1s更新60帧，因此客户端每接收到服务1帧要插入3帧
    */
    onReceiveFrame(frame) {
        this.frameArray.push(frame);
        for (let i = 0; i < this.fillFrameNum; i++) {
            let nullFrame = {};
            nullFrame["FrameId"] = -1;
            this.frameArray.push(nullFrame)
        }
    }

    /*
    @desc: 处理一帧
    */
    handOneMsg(dt: number) {
        let frame = this.frameArray.shift();
        GEventDispatch.Instance().emit("BattleMsg", frame);
        this.curFrame++;
        if (frame.FrameId > 0)
            this.curMainFrame++;
    }

    /*
    @desc: 处理多帧
    */
    handMoreMsg(dt: number) {
        for (let i = 0; i < 2; i++) {
            this.handOneMsg(dt);
        }
    }

    /*
    @desc: 客户端每帧更新
    */
    update(dt: number) {
        if (this.frameArray.length <= 0) {
            return;
        }
        let leftMainFrame = this.frameArray.length / (this.fillFrameNum + 1);
        this.curState = leftMainFrame > 1 ? 2 : 1; //超过就追帧
        if (this.curState == 2) {
            this.handMoreMsg(dt);
        } else if (this.curState == 1) {
            this.handOneMsg(dt);
        }
    }
}
