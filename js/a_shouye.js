
<script>
 window.onscroll = function () {
	var topContent=head.offsetHeight+logo.offsetHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动高度
    console.log(scrollTop, topContent.offsetHeight);
    if (scrollTop >= topContent.offsetHeight) { // 滚动高度 > 头部内容高度
     a2_nav.style.display = 'block';
     a2_nav.style.top = 0;
     a2_nav.style.right = 0;
	 a2_nav.style.left = 0;
    } else {
     a2_nav.style.display = 'none';
    }
  }
 </script>
 <script type="text/javascript">   
     var video1=document.getElementById("videoPlay1");
     video1.onclick=function(){
         video1.controls=true;
         if(video1.paused){
             video1.play();
         }else{
             video1.pause();
         }
     }
 </script>