define(["jquery"], function ($) {
    return function (data, lowPrice, highPrice) {
        var holder = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i]["shopNowPrice"]) {
                holder.push(data[i]);
            }
        }
        return holder.filter(item => {
            return Number(item["shopNowPrice"]) >= lowPrice && Number(item["shopNowPrice"]) <= highPrice;
        })
    }
});