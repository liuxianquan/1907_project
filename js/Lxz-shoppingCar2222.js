$(function (){

    if (localStorage.getItem('Lxz-Commodity-content-right-top')) {
        // 获取本地数据[]
        var codeArr1 = JSON.parse( localStorage.getItem('Lxz-Commodity-content-right-top',$('.Lxz-Commodity-content-right-top').code) );

        if (codeArr1.length == 0) {
            return false;
        }
        console.log(codeArr1);
        $.ajax({
            url: '../data/Lxz-Commodity.json',
            type: 'get',
            cache: false,
            dataType: 'json',
            success: function (data){
                var results = '';
                $.each(codeArr1,function (i,item){
                    $.each(data,function (index1,obj1){
                        if (item == obj1.code) {
                            results += `<div class="Lxz-shoppingCar-content-among-gwl" code="${obj1.code}">
                            <div class="Lxz-shoppingCar-content-among-btn">
                                <input type="checkbox" name="" id="">
                            </div>
                            <div class="Lxz-shoppingCar-content-among-img">
                                <img src="${obj1.imgurl}" alt="">
                            </div>
                            <div class="Lxz-shoppingCar-content-among-text">
                                <h2 class="Lxz-shoppingCar-content-among-text1">
                                ${obj1.title}
                                </h2>
                                <h3 class="Lxz-shoppingCar-content-among-text2">
                                    发货时间为订单付款后1个工作日。
                                </h3>
                            </div>
                            <div class="Lxz-shoppingCar-content-among-jg">
                            ${obj1.price}
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
                            ${obj1.price}
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
            $.each(codeArr1,function (index1,item){
                if (code == item) {
                    codeArr1.splice(index1,1);
                }
            });
            
            var jsonStr = JSON.stringify({"code":codeArr1});

            localStorage.setItem('Lxz-Commodity-content-right-top',jsonStr);

            // alert('商品成功移除购物车');

            // if (codeArr1.length == 0) {
            //     $('.list').html('<li class="tips">购物车暂无商品!</li>');
            // }

        })

    }

})