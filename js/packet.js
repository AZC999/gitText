require.config({
    baseUrl: "../js",
    paths: {
        "jquery": "jquery-1.8.3",
        "countPrice":"countPrice",



        "act": "cartFn"
    }
})

require(["jquery","countPrice", "act"], function ($) {

});