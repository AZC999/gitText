window.onscroll = function (){
	var topContent = head.offsetHeight + logo.offsetHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动高度
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
