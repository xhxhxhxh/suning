$(function () {
    var $banner = $('.sn_banner');
    var $imgs = $banner.find('ul');
    var pots = $banner.find('ol').find('li');
    var bannerWidth = $banner.width();
    // console.log(bannerWidth);
    var index = 1;

    //阻止默认事件
    $banner.on('touchmove',function (e) {
        e.preventDefault();
    });
    var imgsMove = function () {
        $imgs.animate({'transform':'translateX('+(-index*bannerWidth)+'px)'},200,function () {
            if (index >= 9) {
                index = 1;
                $imgs.css({'transform':'translateX('+(-index*bannerWidth)+'px)'});
            }
            if (index <=0) {
                index = 8;
                $imgs.css({'transform':'translateX('+(-index*bannerWidth)+'px)'});
            }
            pots.removeClass('active').eq(index-1).addClass('active');
        });
    };
    var timer = setInterval(function () {
        index++;
        imgsMove();
    },2000);
    //手势事件
    $banner.on('swipeLeft',function () {
        //左划
        index++;
        imgsMove();
    });
    $banner.on('swipeRight',function () {
        //右划
        index--;
        imgsMove();
    });
    $banner.on('touchstart',function () {
        clearInterval(timer);
    });
    $banner.on('touchend',function () {
        timer = setInterval(function () {
            index++;
            imgsMove();
        },2000);
    });
});