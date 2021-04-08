cc.Class({
    extends: cc.Component,

    properties: {
        lb_showInput: cc.Label,                                  //输入
        lb_preStep: cc.Label,                                    //输出
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let win = cc.director.getWinSize() ;
        cc.view.setDesignResolutionSize(win.width, win.height, cc.ResolutionPolicy.EXACT_FIT);
        window.std = this;
        this.lb_showInput.string = '0';
        this.lb_preStep.string = '';
    },

    start () {
    },

    //按钮点击回调
    btnCallBack:function(sender,str){
        cal.handleKey(str)
    },

    // update (dt) {},
});
