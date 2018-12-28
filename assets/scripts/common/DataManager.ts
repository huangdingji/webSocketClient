/*
@desc: 数据管理器
*/
const { ccclass, property } = cc._decorator;
@ccclass

export default class DataManager {

    mData: {};
    public static instance: DataManager;

    public static Instance() {
        if (null == DataManager.instance) {
            DataManager.instance = new DataManager();
        }
        return DataManager.instance;
    }

    constructor() {
        this.init();
    }

    init() {
        var s = cc.sys.localStorage.getItem("game_data");
        try {
            this.mData = JSON.parse(s) || {};
        } catch (e) {
            this.mData = {};
        }
    }

    /*
    @desc: 保存数据
    @key: 关键字
    @data: 数据
    */
    saveData(key, data) {
        this.mData[key] = data;
        cc.sys.localStorage.setItem("game_data", JSON.stringify(this.mData));
    }

    /*
    @desc: 获取数据
    @key: 关键字
    @return: 数据
    */
    getData(key) {
        return this.mData[key];
    }
}
