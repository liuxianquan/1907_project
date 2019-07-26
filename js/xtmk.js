
$(function(){
    $.ajax({
            type:'get',
            url:'../data/xtmk.json',
            dataType:'json',
            cache:false,
            success:function(data){
                console.log(data);
                var resules ='';
                $.each(data,function(index,item){
                    console.log(item);
                    console.log(index);
                    resules += '<div class="hgx_main_right" code="'+item.code+'"><img src="'+item.imgurl+'" /><h3>'+item.title+'</h3><h4>'+item.trait+'</h4><a href="../html/Lxz-Commodity.html" class="hgx_shop">'+item.shop+'</a><a href="#" class="hgx_more">'+item.more+'<span>></span></a></div>';
                });
                $('.continer').html(resules);
            }
    })











})