// 请求
$(function (){
    // 加载数据
    $.ajax({
        url: '../data/Lxz-Commodity.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            $.each(data,function (index,item){
                results += '<div class="Lxz-Commodity-content-right-top" code="'+item.code+'"><h3>'+item.title+'</h3><h4>'+item.price+'</h4><i>邮费：</i><span>免费</span><div><a href="#"><i class="iconfont ">&#xe603;</i>分期最低月付￥96.21起</a></div></div><div class="Lxz-Commodity-content-right-zj"><ul type="disc" class="Lxz-Commodity-content-right-zj-wz"><li><i class="iconfont ">&#xe612;</i>系统级解决方案</li><li><i class="iconfont ">&#xe612;</i>双IMU冗余设计，内置“黑匣子”</li><li><i class="iconfont ">&#xe612;</i>外扩高性能导航模块</li><li><i class="iconfont ">&#xe612;</i>支持SDK，拓展应用潜能</li><li><i class="iconfont ">&#xe612;</i>运动模式</li><li><i class="iconfont ">&#xe612;</i>断桨保护</li><li><i class="iconfont ">&#xe612;</i>丰富的软件支持</li></ul><h3>观看介绍视频</h3></div><div class="Lxz-Commodity-content-right-bottmo"><table><tr><td rowspan="2" class="tr1">1</td><td><span>+</span></td></tr><tr><td><span>-</span></td></tr></table><div class="Lxz-Commodity-content-right-bottmo-btn"><span><h5>加入购物车</h5></span></div></div><div class="Lxz-Commodity-content-right-bottmo-wz">发货时间为订单付款后1个工作日。</div>';
            });
            $('.Lxz-Commodity-content-right').html(results);
        }
    });
    //  点击加入购物车
    $('.Lxz-Commodity-content-right').on('click','.Lxz-Commodity-content-right-bottmo-btn span',function (){
        // 点击的商品的编码
        var code = $(this).parent().parent().siblings('.Lxz-Commodity-content-right-top').attr('code');
        // localStorage: setItem(key,value)
        // 'goods'  =>  '{"code":["abc2","abc6"]}'
        if (localStorage.getItem('Lxz-Commodity-content-right-top')) {
            // 获取本地存储的数据[]
            var codeArr = JSON.parse(localStorage.getItem('Lxz-Commodity-content-right-top')).code;
        } else {
            var codeArr = [];
        }
        codeArr.push(code);//添加到购物车的商品编码
        // 把数据更新到本地存储
        var jsonStr = JSON.stringify({"code":codeArr});//json 字符串
        localStorage.setItem('Lxz-Commodity-content-right-top',jsonStr);
        alert('加入购物车成功！');
    });
    
})
