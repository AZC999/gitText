define(["jquery"],function($){
    return function(data){
        $('.brand-wrap').show();
        $('.brand-wrap>div>img').attr("src",data["brandLogo"]);
        $('.brand-wrap>div>span').text(data["brandNmae"]);
        $('.brand-wrap>p>img').attr("src",data["brand"]);
        $('.brand-wrap>p').eq(1).text(data["descrip"]);
    }
});