/*
@desc: http请求
*/
const {ccclass, property} = cc._decorator;

@ccclass
export default class Http {

    /*
    @desc: 发送http请求
    @url: 地址
    @callback: 回调,onMsg成功,onErr失败
    @isPost: 是否使用post或者get,post发送可以带参数
    @params: 参数
    */
    send(url, callback, isPost?, params?) {
        let http = new XMLHttpRequest();
        http.open(isPost ? "POST" : "GET", url, true);
        // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                if (http.status === 200) {
                    callback.onMsg(http.responseText);
                } else {
                    callback.onErr(http.status, http.statusText);
                }
            }
        };
        if (isPost) {
            http.send(params);
        } else {
            http.send(null);
        }
    }
}
