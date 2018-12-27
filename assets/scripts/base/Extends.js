//定时器
cc.Node.prototype.startTimer = function(callBack, target, delay) {
    this.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(callBack, target)));
};

cc.Node.prototype.startTimerForever = function(callBack, target, t) {
    return this.runAction(cc.repeatForever(cc.sequence(cc.delayTime(t), cc.callFunc(callBack, target))));
};

cc.Node.prototype.stopTimer = function() {
    this.stopAllActions();
};

//访问所有节点
cc.Node.prototype.visibleAll = function(callBack) {
    var arrChildren = this.getChildren();

    //访问子节点
    for(var k = 0; k < arrChildren.length; ++k) {
        var child = arrChildren[k];
        callBack(child);

        child.visibleAll(callBack);
    }
}

//访问所有节点
cc.Node.prototype.destroyAll = function(callBack) {
    var arrChildren = this.getChildren();

    //访问子节点
    for(var k = 0; k < arrChildren.length; ++k) {
        var child = arrChildren[k];
        if(child.closeUI) {
            child.closeUI();
        } else {
            child.destroy();
        }
    }
}