define(["jquery", "loadShop"], function ($, loadShops) {
    return function (data, flag) {
        var holder = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i]["shopNowPrice"]) {
                holder.push(data[i]);
            }
        }
        // flag 判断flag 如果flag为0则是降序 为1则是升序
        if (flag) {
            holder.sort(function (a, b) {
                return a["shopNowPrice"] - b["shopNowPrice"];
            })
        } else {
            holder.sort(function (a, b) {
                return b["shopNowPrice"] - a["shopNowPrice"];
            })
        }

        $('.goods-container').empty();
        loadShops(holder, 16, $('.goods-container .goods-head>a>img').length);
        return holder;
    }
});