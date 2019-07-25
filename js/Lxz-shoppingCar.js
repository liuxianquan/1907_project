$(function (){

    if (localStorage.getItem('Lxz-Commodity-goods-among-concent1')) {
        // 获取本地数据[]
        var codeArr = JSON.parse( localStorage.getItem('Lxz-Commodity-goods-among-concent1') ).code;

        if (codeArr.length == 0) {
            return false;
        }

        $.ajax({
            url: '../data/Lxz-shoppingCar.json',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function (data){
                var results = '';
                $.each(codeArr,function (i,item){
                    $.each(data,function (index,obj){
                        if (item == obj.code) {
                            results += `<div class="Lxz-shoppingCar-content-among-gwl" code="${obj.code}">
                            <div class="Lxz-shoppingCar-content-among-btn">
                                <input type="checkbox" name="" id="">
                            </div>
                            <div class="Lxz-shoppingCar-content-among-img">
                                <img src="${obj.imgurl}" alt="">
                            </div>
                            <div class="Lxz-shoppingCar-content-among-text">
                                <h2 class="Lxz-shoppingCar-content-among-text1">
                                ${obj.title}
                                </h2>
                                <h3 class="Lxz-shoppingCar-content-among-text2">
                                    发货时间为订单付款后1个工作日。
                                </h3>
                            </div>
                            <div class="Lxz-shoppingCar-content-among-jg">
                            ${obj.price}
                            </div>
                            <div class="Lxz-shoppingCar-content-among-sl1">
                                <div class="Lxz-shoppingCar-content-among-sl">
                                        <button class="Lxz-shoppingCar-content-among-sl-btn1">
                                                <i>-</i>
                                        </button>
                                        <input type="text" min="1" max="50" value="1">
                                        <button class="Lxz-shoppingCar-content-among-sl-btn2">
                                                <i>+</i>
                                        </button>
                                </div>
                            </div>
                            <div class="Lxz-shoppingCar-content-among-js">
                            ${obj.price}
                            </div>
                            <div class="Lxz-shoppingCar-content-among-sc">
                                <i class="iconfont ">&#xe696;</i>
                            </div>
                        </div>`;
                        }
                    });
                });
                $('.Lxz-shoppingCar-content-among-gwcsp').html(results);
            }
        });

        // 删除商品
        $('.Lxz-shoppingCar-content-among-gwcsp').on('click','.Lxz-shoppingCar-content-among-gwl .Lxz-shoppingCar-content-among-sc',function (){
            // 删除节点
            $(this).parent().remove();

            // 点击商品的编码
            var code = $(this).parent().attr('code');

            // 数组： pop()  shift()  splice(idnex,1)
            // 删除本地存储的数据
            $.each(codeArr,function (index,item){
                if (code == item) {
                    codeArr.splice(index,1);
                }
            });

            var jsonStr = JSON.stringify({"code":codeArr});

            localStorage.setItem('Lxz-Commodity-goods-among-concent1',jsonStr);

            alert('商品成功移除购物车');

            // if (codeArr.length == 0) {
            //     $('.list').html('<li class="tips">购物车暂无商品!</li>');
            // }

        })

    }

});
/*结束2222222222222222*/

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
