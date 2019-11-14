require.config({
    baseUrl: "../js",
    paths: {
        "jquery": "jquery-1.8.3",
        "judgePage": "judgePages",
        "loadPage": "loadPages",
        "loadShop": "loadShops",
        "loadListItem": "loadListItem",
        "activePage": "activePage",
        "loadBrand": "loadBrand",
        "priceSort":"priceSort",
        "priceSection":"priceSection",
        "indexFn":"showImg",






        "act": "fnW"
    }
})

require(["indexFn","jquery", "judgePage", "loadPage", "loadShop", "loadListItem", "activePage", "loadBrand","priceSort","priceSection" ,"act"], function (a,$) {
    $('#foot').load('foot.html');
});