$(function(){
    //加载底部
    $('.foot').load('foot.html');

    //加载数据
    var arr = localStorage.getItem(`${localStorage.getItem('uphone')}collect`);
    arr = JSON.parse(arr);

    //判断是否有收藏数据
    function enshrine(){
        // if(localStorage.getItem('uphone')){
        if(arr.length){
            var obj;
            for(var i = 0 ; i < arr.length ;i++){
                obj = arr[i];
                $('.uc_fav_c').append(`<li class="clearfix" indexdata=${i}>
                    <span class="s_h">
                        <a href="#" class="bgd">置顶</a>
                        <input class="ds" type="checkbox">
                    </span>
                    <a href="#" class="pro_img">
                        <img src="${obj['shopUrl']}">
                    </a>
                    <div class="fav_pro_c clearfix">
                        <div class="pro_info">
                            <p>
                                <a href="#">${obj['shopTitle']}</a>
                            </p>
                            <p>
                                <span class="cgray">
                                    颜色：<em class="f_gray">${obj['shopColor']}</em>&nbsp;&nbsp;  
                                    尺码：<em class="f_gray">${obj['shopSize']}</em>
                                </span>
                            </p>
                        </div>
                        <div class="price_cs">
                            <p>${obj['shopPrice']}</p>
                        </div>
                        <div class="cz">
                            <p class="cz1">
                                <a href="#">移入购物袋</a>
                            </p>
                            <p class="cz2">
                                <a href="#">取消收藏</a>
                            </p>
                        </div>
                    </div>
                </li>`)
            }
            $('.li_fav').css('display','none');
            $('.paginator-p').css('display','block');
            $('.ad').css('display','block');
        }else{
            $('.li_fav').css('display','block')
            $('.paginator-p').css('display','none');
            $('.ad').css('display','none');
        }
    }
    enshrine();
    
    //点击取消收藏
    $('.cz2>a').click(function(){
       $(this).parent().parent().parent().parent().remove();
       console.log($('.uc_fav_c>.clearfix').length);
        for(var i = 0 ; i < $('.uc_fav_c>.clearfix').length+1 ; i++){
            arr.splice($(this).parent().parent().parent().parent().attr('indexdata'),1);
            enshrine();
            break;
        }
        localStorage.setItem(`${localStorage.getItem('uphone')}collect`,JSON.stringify(arr));
        location.reload();
    })

    //点击全选
    $('.paginator-p>input').click(function(){
        for(var i = 0 ; i < $('.ds').length ; i++){
            if(this.checked){
                $('.ds').eq(i).get(0).checked = true;
            }else{
                $('.ds').eq(i).get(0).checked = false;
            }
        }
    })

    //点击input判断所有input的checked是否为true
    $('.uc_fav_c').on('click','input.ds',function(){
        if(this.checked){
            for(var i = 0 ; i < $('.ds').length ; i++){
                if(!$('.ds').eq(i).get(0).checked){
                    return;
                }else{
                    $('.paginator-p>input').get(0).checked = true;
                }
            }
        }else{
            $('.paginator-p>input').get(0).checked = false;
        }
    })
    
    //总记录
    if(arr){
        $('.ad').children().html(arr.length);
    }

    //选择删除
    $('.paginator-p>a').click(function(){
        var flag = 0;
        for(var i = 0 ; i < $('.ds').length ; i++){
            if($('.ds').eq(i).get(0).checked){
                $('.ds').eq(i).parent().parent().remove();
                arr.splice(i,1);
                localStorage.setItem(`${localStorage.getItem('uphone')}collect`,JSON.stringify(arr));
                flag++;
                i--;
                location.reload();
            }
        }
        if(!flag){
            alert('请选择收藏的商品');
        }
    })
})
