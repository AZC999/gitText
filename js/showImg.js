$('#head').load("head.html", function (){
    var headHolder;
    if(localStorage.getItem('uphone')){
        headHolder = $('.showName').html();
        $('.showName').get(0).innerHTML = `<a href="#"> ${localStorage.getItem('uphone')}</a> <a class = "exit" href="#">[退出]</a>`;
        $('.exit').click(function(){
            $('.showName').get(0).innerHTML = headHolder;
            localStorage.setItem('uphone','');
        })
    }

    // 跳转首页
    $('.indexCollectLink').click(function(){
        if(localStorage.getItem('uphone')){
            location.href = "./collect.html";
        } else {
            location.href = "./login.html";
        }
    })
    
    //  头left的隐藏
    $("#header-vue-left div a").hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#header-vue-left ul li").eq($(this).index()).show().siblings().hide();
    }, function () {
        $("#header-vue-left ul li").hide();
    });
    //  头right的隐藏
    $("#notice").hover(function () {
        $(this).find("#notice-hd").show();
    }, function () {
        $("#notice-hd").hide();
    });
    //导航选项卡
    $(".on").on({
        mouseenter:function () {
            $(".nav-down").eq($(this).index() - 1).slideDown().siblings().hide();
        },
        mouseleave:function () {
            $(".nav-down").eq($(this).index()-1 ).slideUp().siblings().hide();
        }
    });
    $(function(){
        var navH=$("#container_n").offset().top
        $(window).scroll(function(){
            var scroH=$(this).scrollTop()
            if(scroH>navH){
                $("#container_n").css({"position":"fixed","top":"0"})
                $("#nav-top").css({"border-bottom":"2px solid #000"})
                $(".nav-down").css({"border-bottom":"2px solid #000"})
            }else if(scroH<=navH){
                $("#container_n").css({"position":"static"})
                $("#nav-top").css({"border-bottom":"1px solid #ccc"})
            }
        })
    })
})
