$(function(){
    $('.btn').click(function(){
        $.ajax({
            type: 'get',
            url: './../php/login.php',
            cache: 'false',
            data: {'uphone': $('.txt').val(),'upwd': $('.pwd').val()},
            success: function(data){
                console.log(data);
            }
        })
    })
})