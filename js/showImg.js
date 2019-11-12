
$('#head').load("head.html", function () {
    // var date=new Date();
    // date.setDate(date.getDate()+10);
    // setCookie("uname","tom",date,"/");
    // if(!!document.cookie){
    //     var name=document.cookie.split("=")[1];
    //     $(".showName").html("你好,"+name+"<a class='signOut'>[退出]</a>");
    // }
    // $(".signOut").click(function(){
    //     $(".showName").html("<a rel='nofollow' href='../../hezhen/login/login.html'>登录</a>"
    //     +"/"+"<a rel='naofollow' href='../../zhanwen/register.html'>注册</a>")
    // })
    //  头left的隐藏
    $("#header-vue-left div a").hover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("#header-vue-left ul li").eq($(this).index()).show().siblings().hide();
    }, function () {
        $("#header-vue-left ul li").hide();
    });
<<<<<<< HEAD
  
=======
    // console.log($("#header-vue-left div a"))
>>>>>>> 8e375e4dc7e8b45ef682e4b173410db2096a7c1e


    //  头right的隐藏
	
    $("#notice").hover(function () {
        $(this).find("#notice-hd").show();
    }, function () {
        $("#notice-hd").hide();
    });
    //导航选项卡

    $(".on").on({
        mouseenter:function () {
            // $(this).siblings();
            $(".nav-down").eq($(this).index() - 1).slideDown().siblings().hide();
        },
        mouseleave:function () {
            // $(this).siblings();
            $(".nav-down").eq($(this).index()-1 ).slideUp().siblings().hide();
        }
    });
	
	// $(".on").mouseenter((function () {
	//     // $(this).siblings();
	//     $(".nav-down").eq($(this).index() - 1).slideDown().siblings().hide();
	// });
	// $(".on").mouseleave(function(){
	//     // $(this).siblings();
	//     $(".nav-down").eq($(this).index()-1 ).slideUp().hide();
	// })

	// $(".on").on({
	// $('.nav-down').slideDown( 1000 , 'swing' , function (){ 
	// // $(this).siblings();
 //    $('.nav-down').eq($(this).index() - 1).slideDown().siblings().hide(); } );
	// $('.nav-down').slideUp({
	//        duration:1000,
	//        easing:'easeOutElastic',
	//        complete:function (){
	//          // $(this).siblings();
	//           $(".nav-down").eq($(this).index()-1 ).slideUp().siblings().hide();   
	//        }
	// 	});
	// })
     var girlStr="";
     var clothesStr="";
     var pixieStr="";
    $.getJSON("../JSON/goods.json",function(res){
         $(res[0]).each(function(index,ele){
             girlStr+=`
             <li>
                 <div class="img">
                     <a href="fdj.html?bid=${ele.gid}" target="_blank"><img src="img/${ele.src}"></a>
                 </div>
                 <div class="text">
                     <span>
                         <a href="fdj.html?bid=${ele.gid}" target="_blank">${ele.info}</a>
                     </span>
                     <p>
                         <b>${ele.Rprice}</b><del>${ele.Oprice}</del>
                     </p>
                 </div>
             </li>
             `
         })
         $(res[1]).each(function(index,ele){
             pixieStr+=`
             <li>
                 <div class="img">
                     <a href="fdj.html?bid=${ele.gid}" target="_blank"><img src="img/${ele.src}"></a>
                 </div>
                 <div class="text">
                     <span>
                         <a href="fdj.html?bid=${ele.gid}" target="_blank">${ele.info}</a>
                     </span>
                     <p>
                         <b>${ele.Rprice}</b><del>${ele.Oprice}</del>
                     </p>
                 </div>
             </li>
             `
         })
         $(res[2]).each(function(index,ele){
             clothesStr+=`
             <li>
                 <div class="img">
                     <a href="fdj.html?bid=${ele.gid}" target="_blank"><img src="img/${ele.src}"></a>
                 </div>
                 <div class="text">
                     <span>
                         <a href="fdj.html?bid=${ele.gid}" target="_blank">${ele.info}</a>
                     </span>
                     <p>
                         <b>${ele.Rprice}</b><del>${ele.Oprice}</del>
                     </p>
                 </div>
             </li>
             `
         })
         $(".girl").html(girlStr);
         $(".boy").html(pixieStr);
         $(".exercise").html(clothesStr);
     })
})

