//���붯��
$(".li-img").mouseover(function(){
    $(this).animate({
        "width":"10px",
        "height":"10px",
        "margin-left":"+=330px"
    },500);
});
//�Ƴ�����
$(".li-img").mouseout(function(){
    $(this).animate({
        "width":"340px",
        "height":"250px",
        "margin-left":"-=330px"
    },500);
});
//ServicesͼƬͼ��
$(".portfoliolist-one").mouseenter(function(){
    var index=$(this).index();
    $(".mask-img").eq(index).css("display","block");
    $(".mask-icon").eq(index).css("margin-left","110px").show("slow");
}).mouseleave(function(){
    var index=$(this).index();
    $(".mask-img").eq(index).css("display","none");
    $(".mask-icon").eq(index).css("margin-left","-35px").hide("slow");
});
//�ֲ�
$(function(){
    var length,
        currentIndex = 0,
        interval, //���
        hasStarted = false, //�Ƿ��Ѿ���ʼ�ֲ�
        length = $('.banner-li').length;
    console.log(length);
    //�����˵�һ��ͼƬ����.��ť����
    $('.banner-li:not(:first)').hide();
    $('.mypage').hide();
    //�������ʱ��ʾ��ǰ����󷭰�ť,ֹͣ����������뿪ʱ������ǰ����󷭰�ť����ʼ����
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
    /*ǰ*/
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /*��*/
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
    /*��ʼ*/
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, 3000);
        }
    }
    /*ֹͣ*/
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //��ʼ�ֲ�
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

