$(function(){
    $('.hgx_contactbox').each(function(index,item){
            console.log($(this));
        $(this).click(function(){
            $('.hgx_main_all .xing').eq(index).toggleClass('show').siblings().removeClass('show');
            $(this).css('color','#44a8f2').siblings().css('color','#707473')
        })
     
    })

//鼠标划上换图 改变字体颜色

    $('.hgx_contactbox img').hover(function(){
        $(this).parent().find('.hgx_imgshow').css('display','none')
        $(this).parent().find('.hgx_imghovershow').css('display','block')
        $(this).parent().find('h4').css('color','#44a8f2')
    },function(){
        $(this).parent().find('.hgx_imgshow').css('display','block')
        $(this).parent().find('.hgx_imghovershow').css('display','none')
        $(this).parent().find('h4').css('color','#707473')
})
















})