var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,//分页器点击可切换
   

    },
    effect : 'fade',
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
     on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } 
    }
  }) 

//头部透明度变化
$('.hgx_header_big>li').each(function(index,item){
 // console.log($(this));
      $(this).on("mouseover",function(){
          $(this).css('opacity','1').siblings().css({'opacity':'0.5' });
          });       
      $(this).on('mouseout',function(){
        $(this).css('opacity','1').siblings().css({'opacity':'1' });
      })
})

//鼠标划入展开收起
// $('.hgx_header_select').each(function(){
//   var $this=$(this);
//   $this.parent().hover(function(){
//   $this.css('display','block'); 
//   },function(){
//     $this.css('display','none');
//   })
// })



    //农业切换
   $('.hgx_fliger ul li').each(function(index,item){
   
   	$(this).click(function(){
       $('.hgx_fliger img').eq(index).addClass('show').siblings().removeClass('show');
       $(this).addClass('active').siblings().removeClass('active'); 
       $('.hgx_fliger .iconfont').animate({'top':$(this).index()*75-47+'px'})
   	})
   })
