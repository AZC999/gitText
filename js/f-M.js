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







        "act": "fnM"
    }
})

require(["jquery","indexFn", "judgePage", "loadPage", "loadShop", "loadListItem", "activePage", "loadBrand","priceSort","priceSection","act"], function ($) {
    $('#foot').load('foot.html');
});