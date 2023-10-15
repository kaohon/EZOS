(function() {
    // 要素の取得
    var elements = document.getElementsByClassName("drag-and-drop");

    // タッチデバイスかどうかを判定
    var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    // タッチデバイスの場合、タッチイベントを使用
    var startEvent = isTouchDevice ? "touchstart" : "mousedown";
    var moveEvent = isTouchDevice ? "touchmove" : "mousemove";
    var endEvent = isTouchDevice ? "touchend" : "mouseup";

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(startEvent, mdown, false);
    }

    function mdown(e) {
        var drag = this;
        var rect = drag.getBoundingClientRect();

        var offsetX, offsetY;

        if (isTouchDevice) {
            var touch = e.changedTouches[0];
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
        } else {
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        }

        var speedFactor = 1.5; // 移動速度係数 (調整可能)

        drag.style.zIndex = 1000; // ドラッグ中の要素を最前面に表示

        document.addEventListener(moveEvent, mmove, false);
        document.addEventListener(endEvent, mup, false);

        function mmove(e) {
            var x, y;

            if (isTouchDevice) {
                var touch = e.changedTouches[0];
                x = touch.clientX;
                y = touch.clientY;
            } else {
                x = e.clientX;
                y = e.clientY;
            }

            // 移動速度係数を適用
            x = (x - offsetX) * speedFactor;
            y = (y - offsetY) * speedFactor;

            drag.style.left = x + "px";
            drag.style.top = y + "px";
        }

        function mup(e) {
            document.removeEventListener(moveEvent, mmove, false);
            document.removeEventListener(endEvent, mup, false);
            drag.style.zIndex = ''; // ドラッグ完了後にz-indexを元に戻す
        }
    }
})();