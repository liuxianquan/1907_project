//右侧点击切换图片
$('.Lxz-Commodity-content-among-miniimg').each(function(index,target){
    $(target).click(function(){
        $(target).addClass('Lxz-Commodity-content-among-miniimg-active').siblings().removeClass('Lxz-Commodity-content-among-miniimg-active');
        $('.Lxz-Commodity-content-among-img1').eq(index).removeClass('Lxz-Commodity-content-among-miniimg1').addClass('Lxz-Commodity-content-among-show').siblings('.Lxz-Commodity-content-among-img1').removeClass('Lxz-Commodity-content-among-show');
    })
});

// $(function () {
// 	$('.Lxz-Commodity-content-among-dt').on('click', '.Lxz-Commodity-content-among-show', function () {
// 		var this_ = $(this);
// 		var images = this_.parents('.Lxz-Commodity-content-among-dt').find('.Lxz-Commodity-content-among-img1');
// 		var imagesArr = new Array();
// 		$.each(images, function (i, image) {
// 			imagesArr.push($(image).children('img').attr('src'));
// 		});
// 		$.pictureViewer({
// 			images: imagesArr, //需要查看的图片，数据类型为数组
// 			initImageIndex: this_.index() + 1, //初始查看第几张图片，默认1
// 			scrollSwitch: true //是否使用鼠标滚轮切换图片，默认false
// 		});
// 	});
// });


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
);
// 请求

$(function (){
    // 加载数据
    $.ajax({
        url: '../data/Lxz-shoppingCar.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            $.each(data,function (index,item){
                results += '<div class="Lxz-Commodity-goods-among-concent1" code="'+item.code+'"><div><img src="'+item.imgurl+'"></div><div class="Lxz-Commodity-goods-among-concent1-wz1"><a href="">'+item.title+'</a></div><div class="Lxz-Commodity-goods-among-concent1-wz2"><a href="">'+item.price+'</a></div><div class="Lxz-Commodity-goods-among-concent1-btn1"><span>加入购物车</span></div></div>';
            });
            $('.Lxz-Commodity-goods-among-concent').html(results);
        }
    });
    //  点击加入购物车
    $('.Lxz-Commodity-goods-among-concent').on('click','.Lxz-Commodity-goods-among-concent1 .Lxz-Commodity-goods-among-concent1-btn1',function (){
        // 点击的商品的编码
        var code = $(this).parent().attr('code');
        // localStorage: setItem(key,value)
        // 'goods'  =>  '{"code":["abc2","abc6"]}'
        if (localStorage.getItem('Lxz-Commodity-goods-among-concent1')) {
            // 获取本地存储的数据[]
            var codeArr = JSON.parse(localStorage.getItem('Lxz-Commodity-goods-among-concent1')).code;
        } else {
            var codeArr = [];
        }
        codeArr.push(code);//添加到购物车的商品编码

        // 把数据更新到本地存储
        var jsonStr = JSON.stringify({"code":codeArr});//json 字符串
        localStorage.setItem('Lxz-Commodity-goods-among-concent1',jsonStr);
        alert('加入购物车成功！');
    });
    
})

var backToTop=document.querySelector(".backToTop");
  var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
  var isTop=true;
  var timer=null;
  backToTop.style.display="none";
  window.onscroll=function(){
    var topH=document.documentElement.scrollTop||document.body.scrollTop; 
    if(topH>0){
      backToTop.style.display="block";
    }else{
        backToTop.style.display="none";
    }
  }
  backToTop.onclick=function(){
    timer=setInterval(function(){
        var topH=document.documentElement.scrollTop||document.body.scrollTop;
        var stepLength=Math.ceil(topH/3);
        document.documentElement.scrollTop=document.body.scrollTop=topH-stepLength;
        if(topH==0){
          clearInterval(timer);
        }
     },30);
  }