define(['jquery', 'loadShop', 'judgePage'], function ($, loadShops, judgePages) {
    return function (data) {
        var pagesum = Math.ceil(data.length / 20);
        if (data[0]["brandLogo"]) {
            pagesum = Math.ceil(((data.length - 1) / 20));
        }
        var judgeFlag = $('.now-pages>.pages>.curr').text();
        $('.goods-container').empty();
        loadShops(data, 16, (judgeFlag - 1) * 20);
        judgePages(pagesum);
    }
});