window.addEventListener('scroll', () =>{
    const header= document.querySelector('#head');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 2000,
            
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 230, height: 250, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 240, height: 270, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 280, height: 320, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 335, height: 390, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 280, height: 320, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 240, height: 270, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 230, height: 250, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
