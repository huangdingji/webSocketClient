/*
@desc: 游戏场景
*/
import UIBase from "../base/UIBase";
import G from "../common/Globals";
import MatchvsManager from "../common/MatchvsManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class uiGamePanel extends UIBase {
    onLoad () {
        super.onLoad();
        this.nodeDict["right"].on(cc.Node.EventType.TOUCH_START, this.rightStart, this);
        this.nodeDict["right"].on(cc.Node.EventType.TOUCH_END, this.rightCancel, this);
        this.nodeDict["left"].on(cc.Node.EventType.TOUCH_START, this.leftStart, this);
        this.nodeDict["left"].on(cc.Node.EventType.TOUCH_END, this.leftCancel, this);
    }

    start () {

    }

    rightStart() {
        this.sendDirectMsg(G.DirectState.Right);
    }

    rightCancel() {
        this.sendDirectMsg(G.DirectState.None);
    }

    leftStart() {
        this.sendDirectMsg(G.DirectState.Left);
    }

    leftCancel() {
        this.sendDirectMsg(G.DirectState.None);
    }

    sendDirectMsg(direction) {
        if (G.Game.GameManager.gameState === G.GameState.Play) {
            MatchvsManager.Instance().sendFrameEvent(JSON.stringify({
                action: G.GLB.DIRECTION,
                direction: direction
            }));
        }
    }
}
