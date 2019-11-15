define(["jquery", "loadBrand"], function ($, loadBrand) {
    // 加载商品
    return function (shops, count, hascount) {
        var shopscount = shops.length;
        var _code = null;
        if (!shopscount) {
            count = 0;
        }
        if (!shopscount) {
            $('.goods-container').text("抱歉！暂无此类商品。。。");
            $('.res').text(shopscount);
            $('.page-sum>span').eq(0).text(Math.ceil((hascount + count) / 20));
            $('.page-sum>span').eq(1).text(Math.ceil(shopscount / 20));
            return;
        }
        var holdcount = hascount;
        if (shops[0]["brandLogo"]) {
            loadBrand(shops[0]);
            shopscount--;
            holdcount++;
        }
        $('.page-sum>span').eq(0).text(Math.ceil((hascount + count) / 20));
        $('.page-sum>span').eq(1).text(Math.ceil(shopscount / 20));
        $('.res').text(shopscount);
        var sum = holdcount + count;
        for (let i = holdcount; i < sum; i++) {
            if (i >= shops.length) {
                // count = i;
                break;
            }
            if (shops[i]["_setCode"]) {
                _code = shops[i]["_setCode"];
            }
            var newImg = new Image();
            newImg.src = shops[i]['shopUrl'];
            newImg['index-data'] = holdcount == hascount ? i % 20 : i % 20 - 1;
            var newGoods = `<li _setCode=${_code}>
                            <div class="goods-head"><a href="./b-commodityDetails.html"><img src="../img/loadingShop.gif" alt=""></a></div><div class="goods-desc"><a href="./b-commodityDetails.html" ><span class="nptt">${shops[i]['shopBrand']}${shops[i]['shopDescrip']}</span></a><p><em class="now-price">¥<i>${shops[i]['shopNowPrice']}</i></em><span class="origin-price">¥<i>${shops[i]['shopOriginPrice']}</i></span></p>  <em class="collect" ></em>  </div></li>`;
            $('.goods-container').append(newGoods);
            newImg.onload = function () {
                $('.goods-container .goods-head>a>img').eq(this['index-data']).attr('src', this.src);
            }
        }

    }
});