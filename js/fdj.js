$(function(){
    new FDJ().init();
})
class FDJ{
    constructor(){
        this.name="";
        this.flag=false;
        this.bid=location.search.substr(1).split("=")[1];
        this.index2=0;
        this.hasFlag=false;
        this.sizeFlag=false;
    }
    init(){
        this.show();
        this.hide();
        this.drag();
        this.colorClick();
        this.sizeClick();
        this.numClick();
        this.bagClick();
        this.lookClick();
        this.closeClick();
        this.close2Click();
    }
    hide(){
        //头left的隐藏
        $("#header-vue-left div a").hover(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $("#header-vue-left ul li").eq($(this).index()).show().siblings().hide();
        },function(){
            $("#header-vue-left ul li").hide();
        });

        //头right的隐藏
        $("#notice").hover(function(){
            $(this).find("#notice-hd").show();
        },function(){
            $("#notice-hd").hide();
        });
    }
    drag(){
        $(".small").mouseover(function(){
            $(".mask").css("display","block");
            $(".big").css("display","block");
            $(document).mousemove(function(eve){
                var e=eve||event;
                var l=e.pageX-$(".small").get(0).offsetLeft-$(".mask").width()/2;
                var t=e.pageY-$(".small").get(0).offsetTop-$(".mask").height()/2;
                var maxL=$(".small").width()-$(".mask").width();
                var maxT=$(".small").height()-$(".mask").height();
                l=l<0 ? 0 : (l>maxL ? maxL :l);
                t=t<0 ? 0 : (t>maxT ? maxL :t);
                $(".mask").css({
                    left:function(){
                        return l;
                    },
                    top:function(){
                        return t;
                    }
                })
                var bigImgLeft=$(".big").width()*l/$(".mask").width();
                var bigImgTop=$(".big").height()*t/$(".mask").height();
                $(".bigImg").css({
                    left:function(){
                        return -bigImgLeft;
                    },
                    top:function(){
                        return -bigImgTop;
                    }
                })
                return false;
            })
            $(".small").mouseout(function(){
                $(document).mousemove(null);
                $(".mask").css("display","none");
                $(".big").css("display","none");
            })
        })
    }
    colorClick(){
        $(".color").children().each(function(index,ele){
            $(ele).click(function(){
                $(".color").children().each(function(index,ele){
                    $(ele).removeClass();
                })
                $(this).addClass("bc");
            })
        })
    }
    sizeClick(){
        var _this=this;
        $(".xSize").each(function(index,ele){
            $(ele).click(function(){
                _this.flag=true;
                $(".xSize").each(function(index,ele){
                    $(ele).css("border","1px solid #ccc");
                })
                $(this).css("border","1px solid black");
                _this.index2=$(this).index();
            })
        })
    }
    numClick(){
        var _this=this;
        $(".numAdd").click(function(){
            if(!_this.flag){
                _this.checkIt();
            }else{
                $(":text").val(Number($(":text").val())+1);
                $(".numJian").prop("disabled",0);
            }
        })
        $(".numJian").click(function(){
            if(!_this.flag){
                _this.checkIt();
            }else{
                if(Number($(":text").val())== 1){
                    $(":text").val(1);
                    $(".numJian").prop("disabled","true");
                }else{
                    $(":text").val(Number($(":text").val())-1);
                }
            }
        })
    }
    bagClick(){
        var _this=this;
        $(".bag").click(function(){
            if(!_this.flag){
                _this.checkIt();
            }else{
                if(!!localStorage.getItem(_this.name+"goods")){
                    
                    var cartGoods=JSON.parse(localStorage.getItem(_this.name+"goods"));
                    $(cartGoods).each(function(index,ele){
                        if(ele.bid==_this.bid){
                            if(ele.size==$(".xSize").eq(_this.index2).html()){
                                ele.num=Number(ele.num)+Number($(":text").val());
                                _this.hasFlag=true;
                                return false;
                            }else{
                                _this.sizeFlag=true;
                            };
                            
                        }
                    })
                    if(!_this.hasFlag){
                        cartGoods.push({bid:_this.bid,num:$(":text").val(),color:"米色",price:$(".Rprice").html(),size:$(".xSize").eq(_this.index2).html(),})
                    }else{
                        if(!_this.sizeFlag){
                            cartGoods.push({bid:_this.bid,num:$(":text").val(),color:"米色",price:$(".Rprice").html(),size:$(".xSize").eq(_this.index2).html(),})
                        }
                    }
                    localStorage.setItem(_this.name+"goods",JSON.stringify(cartGoods));
                }else{
                    localStorage.setItem(_this.name+"goods",JSON.stringify([{bid:_this.bid,num:$(":text").val(),color:"米色",price:$(".Rprice").html(),size:$(".xSize").eq(_this.index2).html(),}]))
                }
                $(".bag").attr("href","../../hezhen/cart/cart.html?uname="+_this.name);
            }
        })
    }
    checkClick(){
        var _this=this;
        $(".check").click(function(){
            $(".noChoose").css("display","none");
            $(".xSize").eq(_this.index2).css("border","1px solid black");
            _this.flag=true;
        })
    }
    lookClick(){
        $(".look").click(function(){
            $(".showSize").css("display","block");
        })
    }
    closeClick(){
        $(".close").click(function(){
            $(".showSize").css("display","none");
        })
    }
    close2Click(){
        $(".close2").click(function(){
            $(".noChoose").css("display","none");
        })
    }
    checkIt(){
        var _this=this;
        $(".noChoose").css("display","block");
        $(".xSize2").each(function(index,ele){
            $(ele).click(function(){
                $(".check").css("display","inline-block");
                $(".xSize2").each(function(index,ele){
                    $(ele).css("border","1px solid #ccc");
                })
                $(this).css("border","1px solid black");
                _this.index2=index;
                _this.checkClick();
            })
        })
    }
    show(){
        get("goods");
        get("one");
        if(!!document.cookie){
            name=document.cookie.split("=")[1];
            $(".showName").html("你好,"+name+"<a class='signOut'>[退出]</a>");
            this.name=name;
        }
        $(".signOut").click(function(){
            $(".showName").html("<a rel='nofollow' href='../../hezhen/login/login.html'>登录</a>" 
            +"/"+"<a rel='nofollow' href='../../zhanwen/register.html'>注册</a>")
        })
    }
}
function get(jname){
    $.getJSON(jname+".json",function(res){
        $(res).each(function(index,ele){
            $(ele).each(function(i,gEle){
                if(gEle.gid==new FDJ().bid){
                    $(".small").children()[0].src=`img/${gEle.src}`;
                    $(".big").children()[0].src=`img/${gEle.src}`;
                    $(".Rprice").html(gEle.Rprice);
                    $(".Oprice").html(gEle.Oprice);
                    $(".color1")[0].src=`img/${gEle.src}`;
                    $(".color2")[0].src=`img/${gEle.src}`;
                    new FDJ().Rprice=gEle.Rprice;
                }
            })
        })
        
    })
}