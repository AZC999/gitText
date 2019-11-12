$(function(){
    //初始
    var flag_1,flag_2,flag_3,flag_4,flag_5;

    //获取ASCll里数字跟字母的下标
    var f_arr = []
    for(var i = 48 ; i <= 122 ; i++){
        if(!(i > 57 && i < 65 || i > 90 && i < 97)){
            f_arr.push(i);
        }
    }

    //随机获取4位数字+字母
    function four_code(){
        var random = '';
        for(let i = 0 ; i < 4 ; i++){
            random += String.fromCharCode(f_arr[parseInt(Math.random()*f_arr.length)])
        }
        return random;
    }

    //随机获取6位数字+字母
    function six_code(){
        var random = '';
        for(let i = 0 ; i < 6 ; i++){
            random += String.fromCharCode(f_arr[parseInt(Math.random()*f_arr.length)])
        }
        return random;
    }
    var Six_code = six_code();

    //点击获取4位数随机验证码
    function obtain(_this){
        var Four_code = four_code();
        $(_this).html(Four_code).css('font-size','16px').css('font-weight','bold').css('color','#1a3daa');
    }
    obtain('.obtain');
    $('.obtain').click(function(){
        obtain(this);
    })

    //手机号正则验证
    function phoneVerify(){
        var phoneReg = /^1[3|4|5|8][0-9]{9}$/;
        var phoneVal = $('.txt').val();
        if(phoneReg.test(phoneVal)){
            return true;
        }else{
            return false;
        }
    }

    //密码正则验证
    function pwdVerify(){
        // var pwdReg = /\w|[!,@,#,$,%,^,&,*,?,_,~,.]{6,25}/;//字母、数字、符号均可，6-25个字符以内
        var pwdReg = /[!,@,#,$,%,^,&,*,?,_,~,.]|\w{6,25}/;
        var pwdVal = $('.jxj').val();
        if(pwdReg.test(pwdVal)){
            return true;
        }else{
            return false;
        }
    }

     //手机号验证
    function txt(_this){
        $(_this).parent().next().children().removeClass('righttips pp');
        if($(_this).val()){
            if(phoneVerify()){
                $.ajax({
                    type: 'get',
                    url: './../php/inquire.php',
                    cache: false,
                    data: 'uphone=' + $(_this).val(),
                    dataType: 'text',
                    success: function(msg){
                        if(Number(msg)){
                            flag_1 = false;
                            $(_this).parent().addClass('frame-style').last().next().children().addClass('pp').html('该账号已存在');
                        }else{
                            flag_1 = true;
                            $(_this).parent().removeClass('frame-style').last().next().children().addClass('righttips').html('');
                        }
                    }
                })
            }else{
                flag_1 = false;
                $(_this).parent().addClass('frame-style').next().children().addClass('pp').html('格式错误');
            }
        }else{
            flag_1 = false;
            $(_this).parent().addClass('frame-style').next().children().addClass('pp').html('请输入手机号码');
        }
    }
    $('.txt').blur(function(){
        txt(this);
    })

    //验证码验证
    function dxd(_this){
        $(_this).parent().removeClass('frame-style').next().children().removeClass('pp');
        if($(_this).val()){
            if($(_this).val().toLowerCase() === $(_this).parent().next().html().toLowerCase()){
                flag_2 = true;
                $(_this).parent().removeClass('frame-style').parent().next().children().removeClass('pp').html('');
            }else{
                $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('验证码不正确');
                flag_2 = false;
            }
        }else{
            flag_2 = false;
            $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('请输入验证码');
        }
    }
    $('.dxd').blur(function(){
        dxd(this);
    })

    // 点击判断获取6位数随机验证码
    $('.captcha').click(function(){
        if(flag_1 && flag_2){
            $(this).prev().removeClass('frame-style').parent().next().children().addClass('dd').html('验证码已成功发送，请注意查收!').css('color','#009645')
            console.log(`短信验证码：${Six_code}`);
        }else{
            txt('.txt');
            dxd('.dxd');
            if(flag_1){
                $(this).prev().addClass('frame-style').parent().next().children().addClass('pp').html('图片验证码校验失败!');
                $('.dxd').parent().addClass('frame-style').parent().next().children().addClass('pp').html('验证码不正确');
            }
        }
    })

    //短信验证码验证
    function yxy(_this){
        $(_this).parent().removeClass('frame-style').parent().next().children().removeClass('pp')
        if($(_this).val()){
            if(Six_code.toLowerCase() === $(_this).val().toLowerCase()){
                $(_this).parent().parent().next().children().html('');
                flag_3 = true;
            }else{
                $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').css('color','#000').html('短信验证码不正确');
                flag_3 = false;
            }
        }else{
            $(_this).parent().addClass('frame-style').parent().next().children().addClass('pp').html('请输入短信验证码');
            flag_3 = false;
        }
    }
    $('.yxy').blur(function(){
        yxy(this);
    })

    //密码验证
    function jxj(_this){
        $(_this).parent().removeClass('frame-style').next().children().removeClass('pp righttips');
        if($(_this).val()){
            if(pwdVerify()){
                $(_this).parent().removeClass('frame-style').next().children().addClass('righttips').html('');
                flag_4 = true;
            }else{
                $(_this).parent().addClass('frame-style').next().children().html('请输入密码');
                flag_4 = false;
            }
        }else{
            $(_this).parent().addClass('frame-style').next().children().addClass('pp').html('请输入密码');
            flag_4 = false;
        }
    }
    
    $('.jxj').on('input',function(){
        var pwdVal = $('.jxj').val();
        var pwdReg1 = /\w/;
        var pwdReg2 = /[!,@,#,$,%,^,&,*,?,_,~,.]/;
        var pwdReg3 = /\d/;
        var pwdReg4 = /[a-z]/;
        var pwdReg5 = /[A-Z]/;
        var pwdReg6 = /[!,@,#,$,%,^,&,*,?,_,~,.]/;
        var flag = 0;
        $('.pwd-extent').css('display','block');

        if(pwdVal.match(pwdReg3)){
            flag++;
        };
        if(pwdVal.match(pwdReg4)){
            flag++;
        };
        if(pwdVal.match(pwdReg5)){
            flag++;
        };
        if(pwdVal.match(pwdReg6)){
            flag++;
        };

        if(pwdReg1.test(pwdVal) || pwdReg2.test(pwdVal)){//任意一种密码为初级
            $('.pwd-extent em').eq(0).addClass('pwdlow');
        }else{
            $('.pwd-extent em').eq(0).removeClass('pwdlow').parent().css('display','none');
        }

        if(pwdVal.length >= 13){//密码长度为13时为中级
            $('.pwd-extent em').eq(1).addClass('pwdlow').siblings().removeClass('pwdlow');
        }else{
            $('.pwd-extent em').eq(0).addClass('pwdlow').siblings().removeClass('pwdlow');
        }

        if(flag >= 2){//两种组合密码为中级
            flag_4 = true;
            if(flag >= 3){//三种组合密码为中级
                $('.pwd-extent em').eq(2).addClass('pwdlow').siblings().removeClass('pwdlow');
            }else{
                $('.pwd-extent em').eq(1).addClass('pwdlow').siblings().removeClass('pwdlow');
            }
        }else{
            flag_4 = false;
        }

        if(pwdVal.length >= 25){
            this.value = pwdVal.substr(0,25);
        }
        
    })
    $('.jxj').blur(function(){
        jxj(this);
    })

    //确认密码验证
    function exe(_this){
        $(_this).parent().next().children().removeClass('pp righttips')
        if($(_this).val()){
            if($(_this).val().length >= 6){
                if($(_this).val() === $('.jxj').val()){
                    $(_this).parent().next().children().addClass('righttips').removeClass('pp').html('');
                    flag_5 = true;
                }else{
                    $(_this).parent().next().children().addClass('pp').removeClass('righttips').html('两次密码输入不一致');
                    flag_5 = false;
                }
            }else{
                $(_this).parent().next().children().addClass('pp').removeClass('righttips').html('密码应6-25位之间');
                flag_5 = false;
            }
        }else{
            $(_this).parent().next().children().addClass('pp').html('请输入确认密码');
            flag_5 = false;
        } 
    }
    $('.exe').blur(function(){
        exe(this);
    })

    //点击确认并提交
    function sub(){
        txt('.txt');
        dxd('.dxd');
        yxy('.yxy');
        jxj('.jxj');
        exe('.exe');
        if(flag_1 && flag_2 && flag_3 && flag_4 && flag_5){
            $.ajax({
                type: 'get',
                url: './../php/register.php',
                cache: 'false',
                data: {'uphone': $('.txt').val(),'upwd': $('.jxj').val()},
                success: function(data){
                    alert('注册成功');
                }
            })
        }
    }
    $('.sub').click(function(){
        sub();
    })
})