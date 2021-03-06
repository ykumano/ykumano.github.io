(() => {
    var cntr = 0;

    var objList = [];

    /**
     * ユーティリティクラス
     */
    var gcanvas = null;
    var own = null;

    /**
     * Window読込み完了ハンドラ
     */
    window.addEventListener('load', () => {
        console.log("on load");

        initialize();

        updateFrame();
    }, false);

    /**
     * 初期化処理
     */
    function initialize() {
        // ユーティリティクラスを初期化
        gcanvas = new GCanvas(document.getElementById('mainCanvas'), window);

        own = new Own(gcanvas, 100, 100);
        own.setImage("./res/a.png");

        objList.push(own);

        gcanvas.setEventListener(onPress, onMove, onRelease);
    }

    /**
     * マウスプレス操作
     * @param {*} x 
     * @param {*} y 
     */
    function onPress(x, y) {
        own.onPress(x, y);
    }
    /**
     * マウス移動操作
     * @param {*} x 
     * @param {*} y 
     */
    function onMove(x, y) {
        own.onMove(x, y);
    }
    /**
     * マウスリリース操作
     * @param {*} x 
     * @param {*} y 
     */
    function onRelease(x, y) {
        own.onRelease(x, y);
    }

    /**
     * フレーム更新処理
     */
    function updateFrame() {
        // 画面クリア
        gcanvas.drawRect(0, 0, 320, 440, "#808080ff");
        gcanvas.drawRect(0, 0, 320, 240, "#f0f0f0ff");

        cntr++;
        gcanvas.drawText("test " + cntr, 20, 20, "#00000020");

        gcanvas.drawFan(10, 10, 50, 0.0, Math.PI / 2, "#00000040");

        /**
         * オブジェクト更新処理
         */
        objList.forEach(function (obj) {
            obj.update();
        })

        /**
         * オブジェクト描画処理
         */
        objList.forEach(function (obj) {
            obj.render();
        })

        /**
         * フレーム更新処理再登録
         */
        requestAnimationFrame(updateFrame);
    }
})();
