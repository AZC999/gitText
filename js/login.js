$(function(){
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

    //点击登录
    $('.btn').click(function(){
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
    })
})