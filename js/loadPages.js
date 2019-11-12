define(["jquery", "judgePage"], function ($, judgePages) {
    // 页数
    return function (shops) {
        
        var pagesum = Math.ceil((shops.length / 20));
        if(!pagesum){

        }else if(shops[0]["brandLogo"]) {
            pagesum = Math.ceil(((shops.length - 1) / 20));
        }

        if ($('.pageBtn').length) {
            $('.pageBtn').remove();
        }
        for (let i = 1; i <= pagesum; i++) {
            let newPage = `<a class="pageBtn" href="#">${i}</a>`;
            $(newPage).insertBefore('.now-pages>.pages>.next');
        }
        $('.now-pages>.pages>.prev').next().addClass('curr');
        judgePages(pagesum);
    }
});