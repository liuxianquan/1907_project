function headfade(){
    $(this).css('background','none');
    $('#home-head a').css('color','#fff');
    $('.logo span').css('background-image','url(images/lxq-logo.png)');
    $('.home-head-search a').css('background-image','url(images/lxq-search.png)');
    $('.home-head-acount .home-head-acount-a').css('background-image','url(../images/lxq-acount.png)');
}
$('#home-head').on('mouseover',function(){
    $(this).css('background','#fff');
    $('#home-head a').css('color','#000');
    $('.logo span').css('background-image','url(images/lxq-logo2.png)');
    $('.home-head-search a').css('background-image','url(images/lxq-search2.png)');
    $('.home-head-acount .home-head-acount-a').css('background-image','url(images/lxq-acount2.png)');
});
$('#home-head').on('mouseout',headfade);
//选择头部导航
var index1=0,index2=0;
$('.head-nave li').hover(
    function(){
        index1=$(this).index()+1;
        if($(this).hasClass('nave-list')){
            index2=index1;
            $('.nav'+index1).css('display','block');
            $(this).css({'border-bottom':'solid #000 2px','height':'62px'});
        }
    },
    function(){
        if($(this).hasClass('nave-list')){
            $('.nav'+index2).css('display','none');
            $(this).css({'border-bottom':'none','height':'64px'});
        }
    }
);

//选择头部导航的次级导航
$('.nav-top-a').hover(
    function(){
        $(this).children().eq(0).css('border-left','solid 2px #000');
    },
    function(){
        $(this).children().eq(0).css('border-left','solid 2px #ccc');
    }
);
//搜索栏事件
function searout(){
    $('#home-head').on('mouseout',headfade);
    $('.home-head-thesearch').css('display','none');
    $('.head-nave').css('display','block');
    $('.head-right').css('display','block'); 
}
$('.home-head-search').on('click',function(){
    $('.home-head-thesearch').css('display','block');
    $('.head-nave').css('display','none');
    $('.head-right').css('display','none');
    $('.home-head-thesearch input').focus();
    $('#home-head').off('mouseout',headfade);
});
$('.home-head-thesearch-x').on("click",searout) ;
$('#main').on("click",searout) ;
//头部账号事件
$('.home-head-acount').hover(
    function(){
    $('.home-head-acount-list').css('display','block');
},
    function(){
    $('.home-head-acount-list').css('display','none');
});
//底部邮箱验证

$('.bottom-list-mail input').keyup(
    function(){
        var emailReg = /^\w{4,}@[1-9a-zA-Z]{2,6}(\.[a-zA-Z]{2,3}){1,2}$/;
        if(emailReg.test( $(this).val() )){
            $('.bottom-list-mail button').css('background',' #1897f2')   ;
            $('.bottom-list-ul p').css('display','none');
        }else{
            $('.bottom-list-ul p').css('display','block');
        }
    }
);
$('.bottom-list-mail input').focusout(
    function(){
        $('.bottom-list-ul p').css('display','none');
    }
)
//页面导航

var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    direction: 'horizontal',//水平切换
    loop: true, // 循环模式选项
    effect : 'fade',
    autoplay:true,
    on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        } 
      },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  })  
  //取得导航下标      
  function  navbarswitch(){
    var navnum=0;
    $('.swiper-slide').each(
        function(index,value){
          if( $(value).hasClass('swiper-slide-active') ){
            //   console.log(index);
              navnum =index;
              navnum == 0 ? 10: navnum;
              navnum == 11 ? 1 : navnum;
            //   console.log(navnum);
              
            }
        }
    );
        return navnum;

}


function scro_run(e){
    if(e == 'left'){
        var temp =$('.banner-scrollbar-ul').children().eq(9).clone(true);
        $('.banner-scrollbar-ul').children().eq(9).remove();
        $('.banner-scrollbar-ul').prepend(temp[0]);
        intscro(0);
    }
    if(e == 'right'){
        var temp =$('.banner-scrollbar-ul').children().eq(0).clone(true);
        $('.banner-scrollbar-ul').append(temp[0]);
        $('.banner-scrollbar-ul').children().eq(0).remove();
        intscro(0);
    }
}
  //初始化导航条
  function intscro(n){ 
    $('.banner-scrollbar-ul').children().css('opacity','0');
    $('.banner-scrollbar-ul').children().eq(3+n).css('opacity','0.2'); 
    $('.banner-scrollbar-ul').children().eq(4+n).css('opacity','0.7'); 
    $('.banner-scrollbar-ul').children().eq(5+n).css('opacity','1'); 
    $('.banner-scrollbar-ul').children().eq(6+n).css('opacity','0.7'); 
    $('.banner-scrollbar-ul').children().eq(7+n).css('opacity','0.2'); 
  }
  intscro(0);
$('.button-left').on('click',function(){
    scro_run('left');
});
$('.button-right').on('click',function(){
    scro_run('right');
});
//自动切换导条
var t = setInterval(function(){
    var index =navbarswitch();
    if(index == 11){
        index = 1;
    }
    if(index == 0){
        index = 10;
    }
    var scro_index=$('.banner-scrollbar-ul').children().eq(5).attr('slide-index');
    // console.log(scro_index);
    if(index > scro_index  || (scro_index - index>6)){
        scro_run('right');
    }
    if(index < scro_index || (index-scro_index>6)){
        scro_run('left');
    }
},100);



//点击导航条切换
$('.banner-scrollbar-ul').on('click','li',function(){
    console.log( $(this).attr('slide-index') );
    
    // if( $('.banner-scrollbar-ul').children().eq(5).css('opacity') == 1){
    //     console.log("进入1");
    //    if($(this).index() <5){
    //     $('.button-left').trigger('click');
    //     // scro_run('left');
    //    }
    //    if( $(this).index() >5){
    //     $('.button-right').trigger('click');
    //     //    scro_run('right');
    //    }
    // }
    // if( $('.banner-scrollbar-ul').children().eq(6).css('opacity') == 1){
    //     console.log("进入2");
    //      if($(this).index() <6){
    //     $('.button-left').trigger('click');
    //     // scro_run('left');
    //    }
    //    if( $(this).index() >6){
    //     $('.button-right').trigger('click');
    //     //    scro_run('right');
    //    }
    // }
});
//切换导航条



// console.log($('.banner-scrollbar-li').eq(navbarswitch()));








//对main里面的图片加上动画

$('.home-main-body-right img').hover(
    function(){
        $(this).animate({'width':'600px','left':'-5px','height':'330px','top':'-5px'} ,400);
    },
    function(){
        $(this).animate({'width':'590px','left':'0','height':'320px','top':'0'} ,400);

    }
);
$('.home-main-body-mid img').hover(
    function(){
        $(this).animate({'width':'600px','left':'-5px','height':'310px','top':'-5px'} ,400);
    },
    function(){
        $(this).animate({'width':'590px','left':'0','height':'300px','top':'0'} ,400);

    }
);
$('.home-main-body-bottom-container').hover(
    function(){
        
        $(this).find('span').css('background-color','#000');
        $(this).find('span').css('opacity','0.3');

        $(this).find('span').animate({'opacity':'1'} ,400);

    },
    function(){
        $(this).find('span').animate({'opacity':'0.3'} ,400);

        $(this).find('span').css('background-color','#c2c8cc');
        $(this).find('span').css('opacity','1');

    }
);

//主体轮播图
var temp = 0 ;
$(' .home-main-body-left').hover(
function(){
    $('.control-left').css('display','block');
    $('.control-right').css('display','block');
    $(' .home-main-body-left a').each(function(index,value){
      
        if($(value).css('zIndex')>8 && $(value).css('zIndex')<11 ){
            $(value).animate({'top':(11-$(value).css('zIndex'))*(-6),'width':590+(11-$(value).css('zIndex'))*(-16)+'px','left':(11-$(value).css('zIndex'))*(8)+'px'} ,400);
        }
    })
    
    
},
function(){
    $('.control-left').css('display','none');
    $('.control-right').css('display','none');
    $(' .home-main-body-left a').each(function(index,value){
      
        if($(value).css('zIndex')>8 && $(value).css('zIndex')<11 ){
            $(value).animate({'top':0,'width':'590px','left':0} ,400);
        }
       
    })   
  
}
);
$(' .home-main-body-left video').hover(
    function(){
        this.play();
    },
    function(){
        this.load();
    }

);
//点击切换
$('.control-left').on('click',function(){
    temp--;
    $(' .home-main-body-left a').each(function(index,value){
      
        if($(value).css('zIndex')>8 && $(value).css('zIndex')<11 ){
            $(value).animate({'top':0,'width':'590px','left':0} ,100);
        }
       
    })  
    $(' .home-main-body-left a').each(function(index,value){
        if( (index+1+(temp%11==0? 1 : temp%11 ) )>0 ){
            
            $(value).css('zIndex',(index+1+temp)%11==0 ? 11 :(index+1+temp)%11 );

        }else{
            $(value).css('zIndex',12+index+(temp%11==0? 1 : temp%11 ) );
        }
    })
    $(' .home-main-body-left a').each(function(index,value){
        if($(value).css('zIndex')>8 && $(value).css('zIndex')<11 ){
            $(value).animate({'top':(11-$(value).css('zIndex'))*(-6),'width':590+(11-$(value).css('zIndex'))*(-16)+'px','left':(11-$(value).css('zIndex'))*(8)+'px'} ,400);
        }
    })

});

$('.control-right').on('click',function(){
    temp++;
    $(' .home-main-body-left a').each(function(index,value){
      
        if($(value).css('zIndex')>8 && $(value).css('zIndex')<11 ){
            $(value).animate({'top':0,'width':'590px','left':0} ,100);
        }
       
    })  

    $(' .home-main-body-left a').each(function(index,value){
        if( (index+1+(temp%11==0? 1 : temp%11 ) )>0 ){
            
            $(value).css('zIndex',(index+1+temp)%11==0 ? 11 :(index+1+temp)%11 );

        }else{
            $(value).css('zIndex',12+index+(temp%11==0? 1 : temp%11 ) );
        }
    })

    $(' .home-main-body-left a').each(function(index,value){
        if($(value).css('zIndex')>8 && $(value).css('zIndex')<11 ){
            $(value).animate({'top':(11-$(value).css('zIndex'))*(-6),'width':590+(11-$(value).css('zIndex'))*(-16)+'px','left':(11-$(value).css('zIndex'))*(8)+'px'} ,400);
        }
    })
});



//第二个页面 消费级产品
$('.yu-productor-list1').hover(
    function(){
        // $(this).css('box-shadow','0 0 10px #ccc');
        setTimeout(() => {
            $(this).css('box-shadow','0 0 10px #ccc');
        }, 200);

    },
    function(){
        setTimeout(() => {
            $(this).css('box-shadow','0 0 0 0');
        }, 200);
    }
);
$('.yu-productor-list-top').hover(
    function(){
        $(this).animate({'width':'610px','left':'-10px','height':'320px','top':'-10px'} ,400);
    },
    function(){
        $(this).animate({'width':'590px','left':'0','height':'300px','top':'0'} ,400);
    }
)
$('.yu-productor-list3').hover(
    function(){
        // $(this).css('box-shadow','0 0 10px #ccc');
        setTimeout(() => {
            $(this).css('box-shadow','0 0 10px #ccc');
        }, 200);

    },
    function(){
        setTimeout(() => {
            $(this).css('box-shadow','0 0 0 0');
        }, 200);
    }
);