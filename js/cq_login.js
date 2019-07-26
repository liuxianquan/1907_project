// $('input').focus(function(){
// 	$(this).parent().find('label').css('font-size','12px')
// 	$(this).parent().css('borderColor','#000');
// 	$(this).parent().find('label').animate({top:7} , 50 , 'swing');
// 	return false;
// })
$('input').focus(function() {
	$(this).parent().find('.lap').css('font-size', '12px')
	$(this).parent().css('borderColor', '#000');
	$(this).parent().find('.lap').animate({
		top: 7
	}, 50, 'swing');
	return false;
});
$('.userName').change(function(){
	user();
})
$('.password').change(function(){
	password();
})
function user() {
	var userFlag = false;
	if ($('.userName').val() == '15976752027') {
		$('.userName').next().remove();
		return userFlag = true;
	} else {
		$('.userName').next().remove();
		$('.userName').parent().append('<div class="m_error">用户名错误</div>');
		$('.userName').next().css({'color': '#f04848','font-size':'12px'});
		$('.userName').parent().css('border', '1px solid #f04848');
		return userFlag = false;
	}
	return userFlag;
}
function password() {
	var pa = false;
	if ($('.pass').val() == '123123' ){
		$('.password').next().remove();
		return pa = true;
	} else {
		$('.password').next().remove();
		$('.password').parent().append('<div class="m_error">密码错误</div>');
		$('.password').next().css({'color': '#f04848','font-size':'12px'});
		$('.password').css('border', '1px solid #f04848');
		return pa = false;
	}
	return pa;
}
$('.sub_btn').click(function(){
	console.log(password());
	if(password() && user()){
		$(location).attr('href',"home.html");
	}
})
$('.box_btn').click(function(){
	$(location).attr('href',"cq_wx.html");
})