$(function(){

    //点击手机号快捷登录
    $('.shortcut').click(function(){
        $(this).addClass('style').prev().removeClass('style');
        $('.forget-the-password').html('').addClass('heig');
        $('.frame-left').css('display','block');
        $('.frame-right').css('display','block');
        $('.frame-box').css('display','none');
        $('.account-two').css('display','block');
        $('.account-one').css('display','none');
        $('.pp').html('').removeClass('pp').parent().prev().children().removeClass('frame-style');
    })

    //点击账号密码登录
    $('.common').click(function(){
        $(this).addClass('style').next().removeClass('style');
        $('.forget-the-password').removeClass('heig').html('<a>忘记密码？</a>');
        $('.frame-left').css('display','none');
        $('.frame-right').css('display','none');
        $('.frame-box').css('display','block');
        $('.account-two').css('display','none');
        $('.account-one').css('display','block');
        $('.pp').html('').removeClass('pp').parent().prev().children().removeClass('frame-style');
    })

    //账号框
    function txt(_this){
        if(!$(_this).val()){
            $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('请输入账号');
        }
    }
    $('.txt').blur(function(){
        txt(this);
    })

    //密码框
    function pwd(_this){
        if(!$(_this).val()){
            if($(_this).val().length >= 25){
                this.value = pwdVal.substr(0,25);
            }
            $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('请输入密码');
        }
    }
    $('.pwd').blur(function(){
        pwd(this);
    })

    //手机号正则验证
    function phoneVerify(){
        var phoneReg = /^1[3|4|5|8][0-9]{9}$/;
        var phoneVal = $('.pop').val();
        if(phoneReg.test(phoneVal)){
            return true;
        }else{
            return false;
        }
    }
    //手机号码框
    function pop(_this){
        $(_this).parent().removeClass('frame-style').parent().next().children().removeClass('pp').html('');
        if($(_this).val()){
            if(!phoneVerify()){
                console.log(1);
                $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('格式错误');
            }else{
                return true;
            }
        }else{
            $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('请输入手机号码');
        }
    }
    $('.pop').blur(function(){
        pop(this);
    })

    //短信4位数字正则验证
    function sosVerify(){
        var sosReg = /^[0-9]{4}$/;
        var sosVal = $('.uxu').val();
        if(sosReg.test(sosVal)){
            return true;
        }else{
            return false;
        }
    }
  
    //获取随机4位数字
    function stochastic(){
        var random = '';
        for(let i = 0 ; i < 4 ; i++){
            random += parseInt(Math.random()*10);
        }
        return random;
    }

    //60秒内不能点击获取
    var timer = null;
    var flag = 0;
    var code;
    function hq(){
        var time = 6;
        $('.hq').children().html(time + '秒');
        if(!flag && !timer){
            flag = 1;
            code = stochastic();
            console.log('短信验证码：' + code);
            timer = setInterval(() => {
                time--;
                $('.hq').children().html(time + '秒');
                if(time === 0){
                    flag = 0;
                    clearInterval(timer);
                    timer = null;
                    $('.hq').children().html('重新获取');
                }
            },1000);
        }
    }

    //点击获取验证码
    $('.hq').click(function(){
        if(pop('.pop')){
            hq();
        }
    })

    //短信验证码框
    function uxu(_this){
        $(_this).parent().removeClass('frame-style').parent().next().children().removeClass('pp').html('');
        if($(_this).val()){
            if(!sosVerify()){
                $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('短信验证码格式不正确');
            }
        }else{
            $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('请输入短信验证码');
        }
    }
    $('.uxu').blur(function(){
        uxu(this);
    })

    //点击登录
    $('.btn').click(function(){
        if($('.account-two').css('display') == 'none'){
            if($('.txt').val() && $('.pwd').val()){
                $.ajax({
                    type: 'post',
                    url: './../php/login.php',
                    cache: 'false',
                    data: {'uphone': $('.txt').val(),'upwd': $('.pwd').val()},
                    success: function(data){
                        if(Number(data)){
                            location.href = 'a_shouye.html?data=' + $('.txt').val();
                            localStorage.setItem("uphone",$('.txt').val());
                        }else{
                            $('.txt').parent().addClass('frame-style').parent().next().children().addClass('pp').html('您的账号或密码有误');
                            $('.pwd').val('').parent().addClass('frame-style');
                        }
                    }
                })
            }else{
                txt('.txt');
                pwd('.pwd');
            }
        }else{
            if($('.pop').val() && $('.uxu').val()){
                if($('.uxu').val() === code){
                    $.ajax({
                        type: 'get',
                        url: './../php/cell-phone.php',
                        cache: 'false',
                        data: 'uphone=' + $('.pop').val(),
                        success: function(data){
                            if(data){
                                location.href = 'a_shouye.html';
                                localStorage.setItem("uphone",$('.pop').val());
                            }
                        }
                    })
                }else{
                    $('.uxu').parent().addClass('frame-style').parent().next().children().addClass('pp').html('短信验证码错误')
                }
            }else{
                pop('.pop');
                uxu('.uxu');
            }
        }
    })
    
    
})