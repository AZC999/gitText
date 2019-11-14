$(function(){
    //加载底部
    $('.foot').load('foot.html');

    //加载数据
    //{"shopUrl":http://localhost/project/gitText/img/f-W-01.jpg,
    //"shopTitle"Joy&Peace/真美诗2018冬季新款羊绒皮尖头粗跟短筒女皮靴YPK28DD8:,
    //"shopPrice":678,"shopSize":1,"shopColor":"绿色"}
    console.log(localStorage.getItem(`${localStorage.getItem('uphone')}collect`))
    var arr = JSON.stringify([localStorage.getItem(`${localStorage.getItem('uphone')}collect`)]);
    arr = JSON.parse(arr);
    console.log(arr);

    //判断是否有收藏数据
    if(localStorage.getItem('uphone')){
        var obj;
        for(var i = 0 ; i < arr.length ;i++){
            obj = arr[i];
            $('.uc_fav_c').html(`<li class="clearfix">
                <span class="s_h">
                    <a href="#" class="bgd">置顶</a>
                    <input type="checkbox">
                </span>
                <a href="#" class="pro_img">
                    <img src="${obj[shopUrl]}">
                </a>
                <div class="fav_pro_c clearfix">
                    <div class="pro_info">
                        <p>
                            <a href="#">${obj[shopTitle]}</a>
                        </p>
                        <p>
                            <span class="cgray">
                                颜色：<em class="f_gray">${obj[shopColor]}</em>&nbsp;&nbsp;  
                                尺码：<em class="f_gray">${obj[shopSize]}</em>
                            </span>
                        </p>
                    </div>
                    <div class="price_cs">
                        <p>${obj[shopPrice]}</p>
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
    }else{
        $('.li_fav').css('display','block')
    }
    
    //点击取消收藏
    $('.cz2>a').click(function(){
       $(this).parent().parent().parent().parent().remove();
    })
})
