 <script>
  var oLis = document.querySelectorAll('li');
  var oImgs = document.querySelectorAll('.a_swiperBox img');

  var index = 0;
  var timer;

  start();

  for (var i = 0; i < oLis.length; i++) {
    oLis[i].index = i;
    oLis[i].onmouseenter = function () {
      clearInterval(timer);
      // this.index
      index = this.index;
      activeOne();
    }

    oLis[i].onmouseleave = function () {
      start();
    }
  }

  function activeOne() {
    // 清除所有的激活状态
    for (var i = 0; i < oLis.length; i++) {
      oImgs[i].classList.remove('active');
      oLis[i].classList.remove('active');
    }

    oImgs[index].classList.add('active');
    oLis[index].classList.add('active');
  }

  function start() {
    timer = setInterval(function () {
      index++;
      if (index > oLis.length - 1) {
        index = 0;
      }
      activeOne();
    }, 2000);
  }
</script>