/*
@desc: 网络管理器
*/
import WsSocket from "./WsSocket";
import GEventDispatch from "./GEventDispatch";
import Http from "./Http";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NetManager {
    private static instance: NetManager;
    public static Instance() {
        if (null == NetManager.instance) {
            NetManager.instance = new NetManager();
        }
        return NetManager.instance;
    }

    gameSocket: WsSocket;
    gameHttp: Http;

    constructor() {
        this.gameHttp = new Http();
    }

    /*
    @desc: 获取当前的websocket连接
    */
    getWsSocket() {
        return this.gameSocket
    }

    /*
    @desc: 是否连接
    */
    isConnect() {
        let wsSocket = this.getWsSocket();
        return wsSocket != null && wsSocket.isConnect();
    }

    /*
    @desc: 连接
    */
    connect(serverIp, serverPort) {
        this.gameSocket = new WsSocket(this);
        let wsSocket = this.getWsSocket();
        wsSocket.connect(serverIp, serverPort);
    }

    /*
    @desc: 关闭websocket
    */
    close() {
        let socket = this.getWsSocket();
        if (socket != null) {
            socket.close();
            socket = null;
        }
    }

    onConnectSuccess() {
    }

    onConnectFail() {
    }

    onError() {
    }

    /*
    @desc: 发送数据
    */
    send(buff) {
        this.gameSocket.send(buff);
    }

    /*
    @desc: 接受数据
    @buff: 接收数据字符串
    解析后数据格式:
    response = {
        errcode 错误代码
        type 协议号
        msg 协议内容，需要再进行JSON.parse
    }
    */
    onReceiveMsg(buff) {
        let response = JSON.parse(buff);
        if ( response.errcode && response.errcode != "" ){
            console.log("error "+ response.errcode);
        } else {
            GEventDispatch.Instance().emit(response.type.toString(), JSON.parse(response.msg));
        }
    }

    /*
    @desc: 发送http请求
    @url: 地址
    @callback: 回调,onMsg成功,onErr失败
    @isPost: 是否使用post或者get,post发送可以带参数
    @params: 参数
    */
    SendHttpRequest(url, callback, isPost?, params?) {
        this.gameHttp.send(url, callback, isPost, params);
    }
};

