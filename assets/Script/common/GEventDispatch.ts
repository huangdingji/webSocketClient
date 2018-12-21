/*
desc: 事件监听分发器
*/

const { ccclass, property } = cc._decorator;
@ccclass

export default class GEventDispatch {

    public static instance: GEventDispatch;

    public static Instance() {
        if (null == GEventDispatch.instance) {
            GEventDispatch.instance = new GEventDispatch();
        }
        return GEventDispatch.instance;
    }

    constructor() {
        this.regists = {};
    }

    regists: {};

    /*
    @desc: 事件监听
    @eventName: 事件名
    @callFun: 回调函数
    @object: 监听事件的父类
    */
    on(eventName, callFun, object) {
        if (undefined === this.regists[eventName]) {
            this.regists[eventName] = [];
        }
        this.regists[eventName].push([callFun, object]);
    }

    /*
    @desc: 事件分发
    @eventName: 事件名
    @param: 参数
    */
    emit(eventName, param = null) {
        if (undefined !== this.regists[eventName]) {
            let methodLs = this.regists[eventName];
            methodLs.forEach(element => {
                element[0].call(element[1], param);
            });
        }
    }

    /*
    @desc: 移除事件
    @eventName: 事件名
    @object: 移除事件的父类
    */
    off(eventName, object) {
        if (undefined !== this.regists[eventName]) {
            if (undefined === object) {
                this.regists[eventName].splice(0, this.regists[eventName].length);
            } else {
                let methodLs = this.regists[eventName];
                methodLs.forEach((element, index) => {
                    if (element[1] == object) {
                        methodLs.splice(index, 1);
                        return;
                    }
                });
            }
        }
    }

    /*
    @desc: 清空所有的事件监听
    */
    clear() {
        this.regists = {};
    }

}

