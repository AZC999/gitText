define(["jquery", "countPrice"], function ($, countPrice) {
    localStorage.setItem("shops", `[{"url":"../img/101001660_01_t.jpg","descrip":"Joy&Peace/真美诗2018冬季新款羊绒皮尖头粗跟短筒女皮靴YPK28DD8","color":"黑色","size":"34","price":"678","count":"2"},{"url":"../img/101001660_01_t.jpg","descrip":"Joy&Peace/真美诗2018冬季新款羊绒皮尖头粗跟短筒女皮靴YPK28DD8","color":"黑色","size":"34","price":"678","count":"2"}]`)

    var getShop = JSON.parse(localStorage.getItem("shops"));
    // 判断是否有商品加入购物车
    if (getShop) {
        // 如果有
        $('.cart_gray_box').show();
        for (let i = 0; i < getShop.length; i++) {
            var newShop = `<tr>
            <td colspan="7"><div class="shopping_cart_tr clearfix"><div class="shpcrt_blank10"></div><dl class="clearfix"><dd class="col_chkbox"><input class="sel" type="checkbox" name="" id="" checked></dd><dt class="col_1"><a href="#"><img src="../img/${getShop[i].url}" alt=""></a></dt><dd class="col_2"><a href="#"><div>${getShop[i].descrip}</div></a></dd><dd class="col_3"><div class="pl20"><p>颜色：<em>${getShop[i].color}</em></p><p>尺码：<em>${getShop[i].size}</em></p></div></dd><dd class="col_4">${getShop[i].price}</dd><dd class="col_5"><a class="goodsSub" href="#">-</a><input class="goodsTxt" type="text" value="${getShop[i].count}" name="" id=""><a class="goodsPlus" href="#">+</a></dd><dd class="col_6">${Number(getShop[i].price) * Number(getShop[i].count)}</dd><dd class="col_7"><a href="#">移入收藏夹</a><br><a class="del" href="#">删除</a></dd></dl><div class="shpcrt_blank10"></div></div></td></tr>`

            $('tbody').append(newShop);

        }
        // 创建新的商品tr

    } else {
        // 如果没有
        $('.cart_null_div').show();
    }



    // 计算总价
    countPrice();
    // 全选
    $('.allsel').click(function () {
        if ($(this).attr("checked")) {
            $('.allsel').attr("checked", $(this).attr("checked"))
            $('.sel').attr("checked", $(this).attr("checked"));
        } else {
            $('.allsel').attr("checked", false)
            $('.sel').attr("checked", false);
        }

        // 重新计算价格
        countPrice();
    })

    // 清空购物车
    $('.clearShopcart').click(function () {
        $('tbody').empty();

        // 取消全选
        $('.allsel').attr("checked", false);
        // 重新计算价格
        countPrice();
    })

    // 删除商品
    $('.del').click(function () {
        for (let i = 0; i < $('.sel').length; i++) {
            if ($('.sel').eq(i).attr("checked")) {
                $('.sel').eq(i).parent().parent().parent().parent().parent().remove();
            }
        }
        // 取消全选
        $('.allsel').attr("checked", false);
        // 重新计算价格
        countPrice();
    })

    // 商品数量加减
    // 减
    $('.goodsSub').click(function () {
        var getCount = $(this).parent().children().eq(1).val();
        getCount = getCount <= 1 ? 1 : getCount - 1;
        $(this).parent().children().eq(1).get(0).value = getCount;
        // 重新计算价格
        countPrice($(this));
    })
    // 加
    $('.goodsPlus').click(function () {
        var getCount = $(this).parent().children().eq(1).val();
        getCount++;
        $(this).parent().children().eq(1).get(0).value = getCount;
        // 重新计算价格
        countPrice($(this));
    })
    // 手动输入
    $('.goodsTxt').on('input', function () {
        var val = 0;
        val = this.value >= 1 ? this.value : 1;
        val = val <= 20 ? val : 20;
        this.value = val;
        countPrice($(this));
    })

    // 给选择添加事件
    $('.sel').click(function(){
        // 判断是否全选
        for(var i=0;i<$('.sel').length;i++){
            if(!$('.sel').eq(i).attr("checked")){
                break;
            }
        }
        if(i == $('.sel').length-1){
            $('.allsel').attr("checked",$(this).attr("checked"))
        } else {
            $('.allsel').attr("checked",false)
        }
        countPrice();
    })
});