$(function(){
    //加载底部
    $('.foot').load('foot.html');

    //加载数据
    //{"shopUrl":http://localhost/project/gitText/img/f-W-01.jpg,
    //"shopTitle"Joy&Peace/真美诗2018冬季新款羊绒皮尖头粗跟短筒女皮靴YPK28DD8:,
    //"shopPrice":678,"shopSize":1,"shopColor":"绿色"}
    var obj = JSON.parse(localStorage.getItem(`${localStorage.getItem('uphone')}collect`));
    console.log(obj);
    
    //判断是否有收藏数据
    if(localStorage.getItem('uphone')){

    }else{
        $('.li_fav').css('display','block')
    }
})