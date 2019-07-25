$('.row_tab').mouseover(function() {
	$(this).css('cursor', 'pointer');
})
$('.row_tab').children().click(function() {
	var index = $(this).index();
	$(this).addClass('focus').siblings().removeClass('focus');
	$('.content').eq(index).css('display', 'block').siblings().css('display', 'none');
	if (index == 1) {
		$('.login_main').css({
			'margin': '0 auto',
			'height': '660'
		});
		$('.swiper-slide').css('height', '660');
		$('.reg_logo').css('height', '70');
	} else {
		$('.login_main').css({
			'margin': '30px auto',
			'height': '595'
		});
		$('.swiper-slide').css('height', '595');
		$('.reg_logo').css('height', '110');
	}
})
$('input').focus(function() {
	$(this).parent().find('.lap').css('font-size', '12px')
	$(this).parent().css('borderColor', '#000');
	$(this).parent().find('.lap').animate({
		top: 7
	}, 50, 'swing');
	return false;
});

$('.phone_input').change(function(){
	phone();
})
$('.numb_e').change(function(){
	email();
})
$('.pass_e').change(function(){
	pass1();
})
$('.pass_em').change(function(){
	pass2();
})
function phone() {
	var phonFlag = false;
	var phoneReg = /^1[3-9]\d{9}$/;
	if (phoneReg.test($('.phone_input').val())) {
		$('.phone_input').next().remove();
		return phoneFlag = true;
	} else {
		$('.phone_input').addClass('error');
		$('.phone_input').next().remove();
		$('.phone_input').parent().append('<div class="m_error">手机格式不正确</div');
		$('.phone_input').next().css({'color': '#f04848','font-size':'12px'});
		$('.phone_input').parent().css('border', '1px solid #f04848');
		return phoneFlag = false;
	}
	return phoneFlag;
}

function email() {
	var emailFlag = false;
	var emailReg = /^\w{4,}@[1-9a-zA-Z]{2,6}(\.[a-zA-Z]{2,3}){1,2}$/;
	if (emailReg.test($('.numb_e').val())) {
		$('.numb_e').next().remove();
		return emailFlag = true;
	} else {
		$('.numb_e').addClass('error');
		$('.numb_e').next().remove();
		$('.numb_e').parent().append('<div class="m_error">邮箱格式不正确</div>');
		$('.numb_e').next().css({'color': '#f04848','font-size':'12px'});
		$('.numb_e').parent().css('border', '1px solid #f04848');
		return emailFlag = false;
	}
	return emailFlag;
}

function pass1() {
	var passFlag1 = false;
	var pwdReg = /^[a-zA-Z0-9]{8,20}$/;
	if (pwdReg.test($('.pass_e').val())) {
		$('.pass_e').next().remove();
		return passFlag1 = true;
	} else {
		$('.pass_e').addClass('error');
		$('.pass_e').next().remove();
		$('.pass_e').parent().append('<div class="m_error">密码需要8-20个字符，且包含字母和数字</div>');
		$('.pass_e').next().css({'color': '#f04848','font-size':'12px'});
		$('.pass_e').parent().css('border', '1px solid #f04848');
		return passFlag1 = false;
	}
	return passFlag1;
}

function pass2() {
	var passFlag2 = false;
	if ($('.pass_em').val() == $('.pass_e').val()) {
		$('.pass_em').next().remove();
		return passFlag2 = true;
	} else {
		$('.pass_em').addClass('error');
		$('.pass_em').next().remove();
		$('.pass_em').parent().append('<div class="m_error">确认密码与新密码不一致</div>');
		$('.pass_em').next().css({'color': '#f04848','font-size':'12px'});
		$('.pass_em').parent().css('border', '1px solid #f04848');
		return passFlag2 = false;
	}
	return passFlag2;
}
var moFlag = 0;
$('.move_left').bind('mouseover', function() {
	var mouseFlag = false;
	$(this).mousedown(function(e) {
		var toLeft = e.clientX - $(this).parent().offset().left;
		var $this = $(this);
		$(document).bind('mousemove', function(e) {
			var left = e.clientX - $this.parent().offset().left - toLeft;
			var maxL = $this.parent().width() - $this.width();
			left = left < 0 ? 0 : (left > maxL ? maxL : left);
			$this.css({
				left: left
			});
			$this.next().css({
				'width': left,
				'z-index': 2
			});
			$(document).mouseup(function() {
				$(document).unbind('mousemove');
				if (left < maxL) {
					$this.css('left', 0);
					if (left == 0) {
						$('.move_out').css('width', 0);
					}
				} else {
					$this.css('left', left);
					$this.next().css('width', left);
					$this.parent().find('span').text('验证通过');
					$this.parent().find('span').css({
						'left': -$this.width(),
						'color': '#fff'
					});
					$this.unbind('mouseover');
					mouseFlag = true;
					moFlag = mouseFlag;
				}
			});
		})
	});
})

$('.result_set').click(function(){
	$(this).text(getYZM(6));
	$(this).css({'background':'#fff','color':getColor()});
})
var zmflag = 0;
$('.numb_result').change(function(){
	var yzmFlag = false;
	if ($('.numb_result').val() == $('.result_set').text()){
		$('.yzm').text('验证码正确');
		$('.yzm').css({'color': '#f04848','font-size':'12px'});
		yzmFlag = true;
		zmflag = yzmFlag;
	}else{
		$('.yzm').empty();
		$('.yzm').text('验证码不正确');
		$('.yzm').css({'color': '#f04848','font-size':'12px'});
		$('.numb_result').parent().css('border', '1px solid #f04848');
		yzmFlag = false;
	}
})
$('.phone_next').click(function(){
	if(phone() && moFlag && zmflag){
		$(location).attr('href',"cq_login.html");
	}
})
$('.email_sub').mouseover(function(){
	if(email() && pass1() && pass1()){
		$(this).css('opacity',1)
		$('.email_sub').click(function(){
			$(location).attr('href',"cq_login.html");
		})
	}else{
		$(this).css('opacity','.6');
	}
})
$('.email_sub').mouseout(function(){
	$(this).css('opacity','.6');
})
