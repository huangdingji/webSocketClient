/*
@desc: 角色管理器
*/
import GEventDispatch from "./GEventDispatch";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleManager {
    private roleArray;   // 角色数组

    private static instance: RoleManager;
    public static Instance() {
        if (null == RoleManager.instance) {
            RoleManager.instance = new RoleManager();
        }
        return RoleManager.instance;
    }

    constructor() {
        GEventDispatch.Instance().on("BattleMsg", this.onBattleMsg, this);
    }

    onDisable() {
        GEventDispatch.Instance().off("BattleMsg", this);
    }

    /*
    @desc: 处理接收到战斗数据
    */
    onBattleMsg(msg) {
        msg.array.forEach(element => {
            
        });
        this.frameUpdate();
    }

    /*
    @desc: 帧更新
    */
   frameUpdate() {

   }
}
