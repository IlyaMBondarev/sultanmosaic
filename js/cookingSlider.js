var sliderTeam = (function(document, $) {

    var $sliderTeams = $('.cooking'),
        $list = $('#list'),
        $listItems = $('#list li'),
        $nItems = $listItems.length,
        $nView = body.clientWidth > 550 ? 3 : 1,
        autoSlider,
        $current = 0,
        $isAuto = true,
        $acAuto = 2500,

        _init = function() {
            _initWidth();
            _eventInit();
        },

        _initWidth = function() {
            $list.css({
                'margin-left': body.clientWidth > 550 ? ~~(100 / $nView) + '%' : ~~((100 / $nView) - 100) + '%',
                'width': ~~(100 * ($nItems / $nView)) + '%'
            });
            $listItems.css('width', Math.round(100 / $nItems) + '%');
            $sliderTeams.velocity({ opacity: 1 }, { display: "block" }, { delay:1000 });
        },

        _eventInit = function() {

            window.requestAnimFrame = (function() {
                return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.oRequestAnimationFrame      ||
                    window.msRequestAnimationFrame     ||
                    function(callback, element){
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();

            window.requestInterval = function(fn, delay) {
                if( !window.requestAnimationFrame       &&
                    !window.webkitRequestAnimationFrame &&
                    !window.mozRequestAnimationFrame    &&
                    !window.oRequestAnimationFrame      &&
                    !window.msRequestAnimationFrame)
                    return window.setInterval(fn, delay);
                var start = new Date().getTime(),
                    handle = new Object();

                function loop() {
                    var current = new Date().getTime(),
                        delta = current - start;
                    if(delta >= delay) {
                        fn.call();
                        start = new Date().getTime();
                    }
                    handle.value = requestAnimFrame(loop);
                };
                handle.value = requestAnimFrame(loop);
                return handle;
            }

            window.clearRequestInterval = function(handle) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
                window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) :
                window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
                window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
                window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) :
                clearInterval(handle);
            };

            $.each($listItems, function(i) {
                var $this = $(this);
                let xStart, xEnd;
                $this.on('click', function(e) {
                    e.preventDefault();
                    _stopMove(i);
                    _moveIt($this, i);
                    $isAuto = true;
                    autoSlider = requestInterval(_autoMove, $acAuto);
                });
                $this.on('touchstart', function(e) {
                    e.preventDefault();
                    xStart = e.changedTouches[0].clientX;
                    clearRequestInterval(autoSlider);
                    $isAuto = false;
                });
                $this.on('touchend', function(e) {
                    e.preventDefault();
                    xEnd = e.changedTouches[0].clientX;
                    if (xEnd < xStart && i < $listItems.length - 1) {
                        _stopMove(i+1);
                    } else if (xEnd > xStart && i > 0) {
                        _stopMove(i-1);
                    } else {
                        _stopMove(i);
                    }
                    $isAuto = true;
                    autoSlider = requestInterval(_autoMove, $acAuto);
                });
            });

            autoSlider = requestInterval(_autoMove, $acAuto);
        },

        _moveIt = function(obj, x) {

            var n = x;

            obj.find('.cooking__image-form').addClass('active');
            $listItems.not(obj).find('.cooking__image-form').removeClass('active');

            $list.velocity({
                translateX: ~~((-(Math.round(100 / $nItems))) * n) + '%',
                translateZ: 0
            }, {
                duration: 1000,
                easing: [400, 26],
                queue: false
            });

        },

        _autoMove = function(currentSlide) {
            if ($isAuto) {
                $current = ~~(($current + 1) % $nItems);
            } else {
                $current = currentSlide;
            }
            console.log($current);
            _moveIt($listItems.eq($current), $current);
        },

        _stopMove = function(x) {
            clearRequestInterval(autoSlider);
            $isAuto = false;
            _autoMove(x);
        };

    return {
        init: _init
    };

})(document, jQuery);

$(document).ready(function(){
    sliderTeam.init();
});