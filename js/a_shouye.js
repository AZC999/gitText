//  <script>
//   var oLis = document.querySelectorAll('li');
//   var oImgs = document.querySelectorAll('.a_swiperBox img');

//   var index = 0;
//   var timer;

//   start();

//   for (var i = 0; i < oLis.length; i++) {
//     oLis[i].index = i;
//     oLis[i].onmouseenter = function () {
//       clearInterval(timer);
//       // this.index
//       index = this.index;
//       activeOne();
//     }

//     oLis[i].onmouseleave = function () {
//       start();
//     }
//   }

//   function activeOne() {
//     // 清除所有的激活状态
//     for (var i = 0; i < oLis.length; i++) {
//       oImgs[i].classList.remove('active');
//       oLis[i].classList.remove('active');
//     }

//     oImgs[index].classList.add('active');
//     oLis[index].classList.add('active');
//   }

//   function start() {
//     timer = setInterval(function () {
//       index++;
//       if (index > oLis.length - 1) {
//         index = 0;
//       }
//       activeOne();
//     }, 2000);
//   }
// </script>
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