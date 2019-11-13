
$('#head').load("head.html", function () {
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
            if(scroH>=navH+10){
                $("#container_n").css({"position":"fixed","top":"0"})
                $("#nav-top").css({"border-bottom":"2px solid #000"})
                $(".nav-down").css({"border-bottom":"2px solid #000"})
            }else if(scroH<navH+10){
                $("#container_n").css({"position":"static"})
                $("#nav-top").css({"border-bottom":0})
                $(".nav-down").css({"border-bottom":0})
            }
        })
    })
})
