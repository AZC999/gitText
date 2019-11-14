<<<<<<< HEAD
window.onscroll = function (){
	var topContent = head.offsetHeight + logo.offsetHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动高度
=======
<<<<<<< HEAD
window.onscroll = function (){
	var topContent = head.offsetHeight + logo.offsetHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动高度
    console.log(scrollTop, topContent.offsetHeight);
>>>>>>> d6e3b7e2cde82419218570b3aa2444d11a9de766
    if(scrollTop >= topContent.offsetHeight) { // 滚动高度 > 头部内容高度
    	a2_nav.style.display = 'block';
     	a2_nav.style.top = 0;
     	a2_nav.style.right = 0;
	 	a2_nav.style.left = 0;
    } else {
     	a2_nav.style.display = 'none';
    }
}
var yaoVideo = document.getElementById("videoA")
function play(){
 	if(yaoVideo.paused)
 		yaoVideo.play()
 		else
 		yaoVideo.pause()
}
var yaoVideo1 = document.getElementById("videoB")
function play(){
 	if (yaoVideo.paused)
 	yaoVideo.play()
 	else
 	yaoVideo.pause()
}
<<<<<<< HEAD
=======
=======

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
 <script>
 	var yaoVideo = document.getElementById("videoA")
 	
 	function play(){
 		if (yaoVideo.paused)
 		yaoVideo.play()
 		else
 		yaoVideo.pause()
 	}
 </script>
 <script>
 	var yaoVideo1 = document.getElementById("videoB")
 	
 	function play(){
 		if (yaoVideo.paused)
 		yaoVideo.play()
 		else
 		yaoVideo.pause()
 	}
 </script>
>>>>>>> 43193218d6ec2966f9a73ec3b6e874a6ac338443
>>>>>>> d6e3b7e2cde82419218570b3aa2444d11a9de766
