/*
@desc: 游戏场景
*/
import UIBase from "../base/UIBase";
let mvs = require("../network/Matchvs");

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
        this.sendDirectMsg(window.DirectState.Right);
    }

    rightCancel() {
        this.sendDirectMsg(window.DirectState.None);
    }

    leftStart() {
        this.sendDirectMsg(window.DirectState.Left);
    }

    leftCancel() {
        this.sendDirectMsg(window.DirectState.None);
    }

    sendDirectMsg(direction) {
        // if (window.Game.GameManager.gameState === window.GameState.Play) {
            // mvs.engine.sendFrameEvent(JSON.stringify({
            //     action: window.GLB.DIRECTION,
            //     direction: direction
            // }));
        // }

        mvs.engine.sendFrameEvent(JSON.stringify({
            action: window.GLB.DIRECTION,
            direction: window.DirectState.Left,
        }));
        mvs.engine.sendFrameEvent(JSON.stringify({
            action: window.GLB.DIRECTION,
            direction: window.DirectState.Right,
        }));
    }

    // update (dt) {}
}
