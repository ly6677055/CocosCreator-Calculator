//FullScreenAdapter.js
cc.Class({
    extends: cc.Component,

    properties: {
        bg: cc.Node
    },

    onLoad () {
        //监听窗口大小变化时的回调，每次窗口变化都要自动适配
        cc.view.setResizeCallback(() => this.screenAdapter());
        this.screenAdapter();
    },

    /**
     * Fit Height 模式：适用于宽大于高的屏幕
     * Fit Width 模式：适用于高大于宽的屏幕
     */
    screenAdapter() {
        //当前屏幕分辨率比例
        let screenRatio = cc.winSize.width / cc.winSize.height;
        //设计稿分辨率比例
        let designRatio = cc.Canvas.instance.designResolution.width / cc.Canvas.instance.designResolution.height;

        if (screenRatio <= 1) {
            //屏幕高度大于或等于宽度,即竖屏
            if (screenRatio <= designRatio) {
                this.setFitWidth();
            } else {
                //此时屏幕比例大于设计比例
                //为了保证纵向的游戏内容不受影响，应该使用 fitHeight 模式
                this.setFitHeight();
            }
        } else {
            //屏幕宽度大于高度,即横屏
            this.setFitHeight();
        }
    },

    setFitWidth() {
        cc.Canvas.instance.fitHeight = false;
        cc.Canvas.instance.fitWidth = true;
    },

    setFitHeight() {
        cc.Canvas.instance.fitHeight = true;
        cc.Canvas.instance.fitWidth = false;
    }
});