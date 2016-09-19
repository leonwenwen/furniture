//移入动画
$(".li-img").mouseover(function(){
    $(this).animate({
        "width":"10px",
        "height":"10px",
        "margin-left":"+=330px"
    },500);
});
//移出动画
$(".li-img").mouseout(function(){
    $(this).animate({
        "width":"340px",
        "height":"250px",
        "margin-left":"-=330px"
    },500);
});
//Services图片图标
$(".portfoliolist-one").mouseenter(function(){
    var index=$(this).index();
    $(".mask-img").eq(index).css("display","block");
    $(".mask-icon").eq(index).css("margin-left","110px").show("slow");
}).mouseleave(function(){
    var index=$(this).index();
    $(".mask-img").eq(index).css("display","none");
    $(".mask-icon").eq(index).css("margin-left","-35px").hide("slow");
});
//轮播
$(function(){
    var length,
        currentIndex = 0,
        interval, //间隔
        hasStarted = false, //是否已经开始轮播
        length = $('.banner-li').length;
    console.log(length);
    //将除了第一张图片隐藏.按钮隐藏
    $('.banner-li:not(:first)').hide();
    $('.mypage').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.banner-li,#myright , #myleft').hover(function() {
        stop();
        $('.mypage').show();
    }, function() {
        $('.mypage').hide();
        start();
    });
    $('#myleft').bind('click', function() {
        pre();
    });
    $('#myright').bind('click', function() {
        next();
    });
    /*前*/
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /*后*/
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        console.log(preIndex+"next");
        console.log(currentIndex+"next");
        play(preIndex, currentIndex);
    }

    function play(preIndex, currentIndex) {
        $('.banner-li').eq(preIndex).fadeOut(500);
        $('.banner-li').eq(currentIndex).fadeIn(1000);
    }
    /*开始*/
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, 3000);
        }
    }
    /*停止*/
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();


    var imgNum=1;
    $(".mask-img").click(function(){
        $('#bigMask').css({
            "z-index":15,
            opacity:1,
            "-webkit-transition":"all 400ms linear"
        });
        var now = $(".mask-img").index(this)+1;
        var imgcontian = $('#imgContain');
        imgcontian.find('img').get(0).alt=now;
        imgcontian.find('img').get(0).src="images/b-w"+now+".jpg";
        imgNum = now;
    } )
    $(".next").click(function(){
        if(imgNum!=4){
            imgNum++;
            var imgcontian = $('#imgContain');
            imgcontian.find('img').get(0).alt=imgNum;
            imgcontian.find('img').get(0).src="images/b-w"+imgNum+".jpg";
            imgcontian.find('img').css({
                "-webkit-transition":"all 500ms linear"
            })
        }
    })
    $(".pre").click(function(){
        if(imgNum!=1){
            imgNum--;
            var imgcontian = $('#imgContain');
            imgcontian.find('img').get(0).alt=imgNum;
            imgcontian.find('img').get(0).src="images/b-w"+imgNum+".jpg";
            imgcontian.find('img').css({
                "-webkit-transition":"all 500ms linear"
            })
        }
    })
    $(".close").click(function(){
        $('#bigMask').css({
            "z-index":-1,
            opacity:0,
            "-webkit-transition":"all 400ms linear"
        });
    })
})

