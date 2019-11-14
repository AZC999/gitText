define(['jquery', "judgePage", "loadPage", "loadShop", "loadListItem", "activePage", "priceSort", "priceSection"], function ($, judgePages, loadPages, loadShops, listItem, activePage, priceSort, priceSection) {
    var shopsAjax; //储存请求过来的商品数据
    var priceShopsHolder;
    var getdistance;

    // list 展开与收起
    $('.filter-list-wrap').on("click", "li>p", function () {
        if ($(this).parent().children().eq(1).css('display') == "none") {
            $(this).children().eq(0).css('background', 'url(../img/css_sprites.png) -212px -98px');
            $(this).parent().children().eq(1).css('display', 'block');
        } else {
            $(this).parent().children().eq(1).css('display', 'none');
            $(this).children().eq(0).css('background', 'url(../img/css_sprites.png) -212px -124px');
        }
    })

    // list内容项的展开与收起
    $('.filter-list-wrap').on('click', '.filter-more', function () {
        $(this).parent().children().show();
        $(this).css('display', 'none');

    })
    $('.filter-list-wrap').on('click', '.filter-less', function () {
        for (let i = 4; i < $(this).parent().children().length; i++) {
            $(this).parent().children().eq(i).hide();
        };
        $('.filter-more').css('display', 'block');

    })

    // 左侧栏项加载
    $(function () {
        $.getJSON(
            '../JSON/f-M-sort.json',
            function (data) {
                var n = 0;
                for (var item of data) {
                    var newLi = `<li><p><i></i><span>${item["listName"]}</span></p><div><ul class="brand_name ${item['settype']}"><div class="filter-more"><span class="icon"></span></div><div class="filter-less"><span class="icon"></span></div></ul></div></li>`;
                    $('.filter-list-wrap').append(newLi);
                    listItem(`.${item['settype']}>div.filter-more`, item[item["settype"]], `.${item['settype']}>li`, n);
                    n++;
                }
            }
        )
    })



    // 商品图片加载
    $(function () {
        $.getJSON(
            '../JSON/f-Mgoods.json',
            function (data) {
                loadShops(data, 16, $('.goods-container .goods-head>a>img').length);
                loadPages(data);
                shopsAjax = data;
                $('.filter-sub-content .brand-wrap').hide();
                // 激活热销项 sub-title-tab-linkA
                $('.sub-title-tab>li>a').eq(1).addClass('sub-title-tab-linkA');
            }
        )
    })


    // 翻动滚轮加载
    document.onscroll = function () {
        var getPageH = document.documentElement.offsetHeight || document.body.offsetHeight;
        var getClientH = document.documentElement.clientHeight || document.body.clientHeight;
        var getSorllT = document.documentElement.scrollTop || document.body.scrollTop;
        var clientH = document.documentElement.clientHeight || document.body.clientHeight;
        var maxT = $('.footer').get(0).offsetTop;

        if (!getdistance) {
            getdistance = $('form').get(0).offsetTop;
        }
        if (getdistance <= getSorllT) {
            $('form').css("position", "fixed");
            $('form').css("top", "0");
        } else {
            $('form').css("position", "relative");
        }
        if (getSorllT + clientH >= maxT) {
            $('form').css("position", "relative");
        }
        var judgeFlag = $('.now-pages>.pages>.curr').text();
        var hascount = $('.goods-container .goods-head>a>img').length;
        if (getPageH - getClientH - getSorllT < 700 && hascount < 20 && hascount) {
            loadShops(shopsAjax, 4, hascount + (judgeFlag - 1) * 20);
        }
    }

    // 给按钮添加翻页
    // 上一页
    $('.now-pages>.pages>.prev').click(function () {
        $('.now-pages>.pages>.curr').prev().addClass('curr');
        $('.now-pages>.pages>.curr').eq(1).removeClass('curr');
        activePage(shopsAjax);
    })
    $('.page-sum>a.prev').click(function () {
        $('.now-pages>.pages>.curr').prev().addClass('curr');
        $('.now-pages>.pages>.curr').eq(1).removeClass('curr');
        activePage(shopsAjax);
    })
    // 下一页
    $('.now-pages>.pages>.next').click(function () {
        $('.now-pages>.pages>.curr').next().eq(0).addClass('curr');
        $('.now-pages>.pages>.curr').eq(0).removeClass('curr');
        activePage(shopsAjax);
    })
    $('.page-sum>a.next').click(function () {
        $('.now-pages>.pages>.curr').next().eq(0).addClass('curr');
        $('.now-pages>.pages>.curr').eq(0).removeClass('curr');
        activePage(shopsAjax);
    })
    // 给页数按钮添加翻页功能
    $('.now-pages>.pages').on('click', 'a.pageBtn', function () {
        $('.now-pages>.pages>a.pageBtn').removeClass('curr');
        $(this).addClass('curr')
        activePage(shopsAjax);
    })

    // 给左侧菜单添加点击事件
    $('.filter-sub-navlist .filter-list-wrap').on('click', 'a', function () {
        if ($(this).parent().parent().parent().parent().children().eq(0).children().eq(1).text() == "品牌") {
            $.getJSON(
                `../JSON/${$(this).attr("brand-code")}.json`,
                function (data) {
                    $('.goods-container').empty();
                    loadShops(data, 16, $('.goods-container .goods-head>a>img').length);
                    loadPages(data);
                    shopsAjax = data;
                }
            ).error(function () {
                loadShops([], 0, 0);
                loadPages([]);
            })
        }
        if ($(this).parent().parent().parent().parent().children().eq(0).children().eq(1).text() == "价格") {
            var price = $(this).text().split('-');
            var getLowPrice = price[0];
            var getHighPrice = price[1].substring(0, price[1].length - 1);
            shopsAjax = priceSection(shopsAjax, getLowPrice, getHighPrice);
            $('.goods-container').empty();
            loadShops(shopsAjax, 16, $('.goods-container .goods-head>a>img').length);
            loadPages(shopsAjax);

        }
        // 筛选后隐藏筛选项
        $(this).parent().parent().parent().parent().hide();


    })

    // 为 sub-title 绑定事件（新品、热销、推荐...）
    $('.sub-title-tab>li>a').click(function () {
        // 清除所有激活项 将当前项目激活
        $('.sub-title-tab>li>a').removeClass('sub-title-tab-linkA');
        $(this).addClass('sub-title-tab-linkA');
        // 为价格添加事件
        if ($(this).text() == "价格") {
            // 判断priceShopsHolder是否有值 有值就不再重新赋值
            priceShopsHolder = priceShopsHolder ? priceShopsHolder : shopsAjax;

            if ($(this).parent().hasClass('arrow-up')) {
                $(this).parent().removeClass('arrow-up');
                $(this).parent().addClass('arrow-down');
                shopsAjax = priceSort(shopsAjax, 0);
                return;
            }
            $(this).parent().removeClass('arrow-down');
            $(this).parent().addClass('arrow-up');
            shopsAjax = priceSort(shopsAjax, 1);
            return;
        }
        // 如果不是价格就将样式清楚
        if ($('.sub-title-tab>li>a').parent().hasClass('arrow-up')) {
            $('.sub-title-tab>li>a').parent().removeClass('arrow-up');
        }
        if ($('.sub-title-tab>li>a').parent().hasClass('arrow-down')) {
            $('.sub-title-tab>li>a').parent().removeClass('arrow-down');
        }

        if ($(this).text() == "热销") {
            shopsAjax = priceShopsHolder;
            $('.goods-container').empty();
            loadShops(shopsAjax, 16, $('.goods-container .goods-head>a>img').length);
            // loadPages(shopsAjax);
        }
    })

    // 设置 localStorage 详情页获取 shopCode
    $('.goods-container').on('click', 'li', function () {
        localStorage.setItem("shopCode", $(this).attr('_setCode'));
    })

    // 给收藏数据
    $('.goods-container').on('click', '.collect', function () {
        if (localStorage.getItem('uphone')) {
            var _setFlag = 0;
            if(localStorage.getItem(`${localStorage.getItem('uphone')}collect`)){
                var comfireData = localStorage.getItem(`${localStorage.getItem('uphone')}collect`);
                comfireData = JSON.parse(comfireData);
                for(let item of comfireData){
                    console.log(comfireData)
                    if(item["shopUrl"] == $(this).parent().prev().children().eq(0).children().eq(0).attr("src")){
                        _setFlag = 1;
                    }
                }
            }

            if (localStorage.getItem(`${localStorage.getItem('uphone')}collect`)) {
                var collectHolder = `{"shopUrl":"${$(this).parent().prev().children().eq(0).children().eq(0).attr("src")}","shopTitle":"${$(this).prev().prev().children().eq(0).text()}","shopPrice":"${$(this).prev().children().eq(0).children().eq(0).text()}","shopSize":"1","shopColor":"绿色"}`;
            } else {
                var collectHolder = `[{"shopUrl":"${$(this).parent().prev().children().eq(0).children().eq(0).attr("src")}","shopTitle":"${$(this).prev().prev().children().eq(0).text()}","shopPrice":"${$(this).prev().children().eq(0).children().eq(0).text()}","shopSize":"1","shopColor":"绿色"}]`;
            }
            collectHolder = JSON.parse(collectHolder);

            if (localStorage.getItem(`${localStorage.getItem('uphone')}collect`)) {
                var collectArr = localStorage.getItem(`${localStorage.getItem('uphone')}collect`);
                collectArr = JSON.parse(localStorage.getItem(`${localStorage.getItem('uphone')}collect`));
                collectArr.push(collectHolder);
            } else {
                var collectArr = collectHolder;
            }
            collectArr = JSON.stringify(collectArr);
            if(!_setFlag){
                localStorage.setItem(`${localStorage.getItem('uphone')}collect`, collectArr);
            }
            

            $(this).addClass('hobby');
            // 出现收藏提示框
            $('.mask').show();
            var flag = 10;
            $('.timeCount').text(`倒计时${flag}秒后自动关闭`);
            timer = setInterval(function () {
                flag--;
                $('.timeCount').text(`倒计时${flag}秒后自动关闭`);
                if (flag <= 0) {
                    $('.mask').hide();
                    clearInterval(timer);
                }
            }, 1000)
        } else {
            alert('请先登录您的账号！');
            location.href = "./login.html";
        }
    })
    // 关闭收藏框
    $('.close').click(function () {
        $('.mask').hide();
        clearInterval(timer);
    })
    // 设置收藏框大小
    $('.mask').css('width', $(document).width());
    $('.mask').css('height', $(document).height());

});