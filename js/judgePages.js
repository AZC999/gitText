define(["jquery"], function ($) {
    // 判断 上下翻页是否显示
    return function (pageSum) {
        $('.now-pages>.pages>.prev').hide();
        $('.now-pages>.pages>.next').hide();
        $('.page-sum>a.prev').hide();
        $('.page-sum>a.next').hide();
        if(!pageSum){
            return;
        }

        var judgeFlag = $('.now-pages>.pages>.curr').text();
        if (judgeFlag != 1 && judgeFlag != pageSum) {
            $('.now-pages>.pages>.prev').show();
            $('.now-pages>.pages>.next').show();
            $('.page-sum>a.prev').show();
            $('.page-sum>a.next').show();
        } else if (judgeFlag == 1) {
            $('.now-pages>.pages>.next').show();
            $('.page-sum>a.next').show();
        } else {
            $('.now-pages>.pages>.prev').show();
            $('.page-sum>a.prev').show();
        }
    }
});