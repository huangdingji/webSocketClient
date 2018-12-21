/*
@desc: websocket封装
*/

import NetManager from "./NetManager";
const { ccclass, property } = cc._decorator;

@ccclass
export default class WsSocket {

    ws: WebSocket;
    netManager: NetManager;

    constructor(netManager: NetManager) {
        this.netManager = netManager;
    }

    /*
    @desc: 连接websocket服务
    @ip: ip
    @port: 端口
    */
    connect(ip, port) {
        var self = this;
        this.ws = new WebSocket("ws://" + ip + ":" + port + "/ws");
        this.ws.onopen = function (event) {
            if (null !== self.netManager)
                self.netManager.onConnectSuccess();
        };
        this.ws.onmessage = function (event) {
            if (null !== self.netManager)
                self.netManager.onReceiveMsg(event.data);
        };
        this.ws.onerror = function (event) {
            if (null !== self.netManager)
                self.netManager.onError();
        };
        this.ws.onclose = function (event) {
            if (null !== self.netManager)
                self.netManager.onConnectFail();
        };
    }

    /*
    @desc: 关闭websocket
    */
    close() {
        if (null != this.ws)
            this.ws.close();
    }

    /*
    @desc: 发送数据
    @buff: 数据，字符串
    */
    send(buff) {
        if (null != this.ws) {
            this.ws.send(buff);
        }
    }

    /*
    @desc: 是否连接
    */
    isConnect() {
        return null != this.ws && this.ws.readyState == WebSocket.OPEN;
    }
}
