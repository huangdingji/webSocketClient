import NetManager from "./common/NetManager";
import RoleManager from "./common/RoleManager";
import FrameManager from "./common/FrameManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.Node)
    role: cc.Node = null;

    ws: WebSocket = null;

    start() {
        RoleManager.Instance();
        FrameManager.Instance();

        let ip = "127.0.0.1";
        let port = 8001;
        NetManager.Instance().connect(ip, port);
        // this.ws = new WebSocket("ws://" + ip + ":" + port + "/ws");
        // let self = this;
        // this.ws.onopen = function (event) {
        //     console.log("Send Text WS was opened.");
        // };
        // this.ws.onmessage = function (event) {
        //     let msg = JSON.parse(event.data);
        //     console.log("response text msg", msg);
        //     self.role.x = msg.x;
        // };
        // this.ws.onerror = function (event) {
        //     console.log("Send Text fired an error");
        // };
        // this.ws.onclose = function (event) {
        //     console.log("WebSocket instance closed.");
        // };
    }

    update(dt) {
        FrameManager.Instance().update(dt);
    }

    RightBtnCallback() {
        let pos = {};
        pos["x"] = Math.floor(this.role.x+10);
        if(this.ws.readyState == WebSocket.OPEN) {
            this.ws.send(JSON.stringify(pos));
        }
    }
}
