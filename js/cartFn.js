define(["jquery","countPrice"],function($,countPrice){
    // 判断是否有商品加入购物车
    if( '判断是否有商品' ){
        // 如果有
        $('.cart_gray_box').show();

        // 创建新的商品tr
        var newShop = `<tr>
        <td colspan="7"><div class="shopping_cart_tr clearfix"><div class="shpcrt_blank10"></div><dl class="clearfix"><dd class="col_chkbox"><input class="sel" type="checkbox" name="" id="" checked></dd><dt class="col_1"><a href="#"><img src="../img/${商品图片地址}" alt=""></a></dt><dd class="col_2"><a href="#"><div>${商品名称描述}</div></a></dd><dd class="col_3"><div class="pl20"><p>颜色：<em>${商品颜色}</em></p><p>尺码：<em>${商品尺码}</em></p></div></dd><dd class="col_4">${商品单价}</dd><dd class="col_5"><a class="goodsSub" href="#">-</a><input class="goodsTxt" type="text" value="1" name="" id=""><a class="goodsPlus" href="#">+</a></dd><dd class="col_6">${商品总价}</dd><dd class="col_7"><a href="#">移入收藏夹</a><br><a class="del" href="#">删除</a></dd></dl><div class="shpcrt_blank10"></div></div></td></tr>`

        $('tbody').append(newShop);
    } else {
        // 如果没有
        $('.cart_null_div').show();
    }



    // 计算总价
    countPrice();
    // 全选
    $('.allsel').click(function(){
        if($(this).attr("checked")){
            $('.allsel').attr("checked",$(this).attr("checked"))
            $('.sel').attr("checked",$(this).attr("checked"));
        } else {
            $('.allsel').attr("checked",false)
            $('.sel').attr("checked",false);
        }

        // 重新计算价格
        countPrice();
    })

    // 清空购物车
    $('.clearShopcart').click(function(){
        $('tbody').empty();

        // 取消全选
        $('.allsel').attr("checked",false);
        // 重新计算价格
        countPrice();
    })

    // 删除商品
    $('.del').click(function(){
        for(let i = 0;i<$('.sel').length;i++){
            if($('.sel').eq(i).attr("checked")){
                $('.sel').eq(i).parent().parent().parent().parent().parent().remove();
            }
        }
        // 取消全选
        $('.allsel').attr("checked",false);
        // 重新计算价格
        countPrice();
    })

    // 商品数量加减
    // 减
    $('.goodsSub').click(function(){
        var getCount = $('.goodsTxt').val();
        getCount = getCount<=1?1:getCount-1;
        $('.goodsTxt').get(0).value = getCount;
        // 重新计算价格
        countPrice($(this));
    })
    // 加
    $('.goodsPlus').click(function(){
        var getCount = $('.goodsTxt').val();
        getCount++;
        $('.goodsTxt').get(0).value = getCount;
        // 重新计算价格
        countPrice($(this));
    })
});