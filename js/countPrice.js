define(["jquery"], function ($) {
    return function (ele) {
        // 传入参数计算小计
        if (ele) {
            var getNum = ele.parent().children().eq(1).val();
            var getPrice = ele.parent().prev().text();
            ele.parent().next().get(0).innerText = getNum * getPrice;
        }
        
        // 不传入参数计算总计
        var sumPrice = 0;
        for(let i = 0;i<$('.sel').length;i++){
            if($('.sel').eq(i).attr("checked")){
                sumPrice += Number($('.sel').eq(i).parent().parent().children().eq(6).text());
            }
        }
        $('.sumPrice').get(0).innerText = Number(sumPrice);
    }

});