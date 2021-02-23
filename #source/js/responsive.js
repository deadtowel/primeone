//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header__menu');
		var headerLang=$('.header-top__lang');
	if(w<768){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
	if(w<768){
		if(!$('.header-bottom__menu').hasClass('done')){
			$('.header-bottom__menu').addClass('done').appendTo(headerMenu);
		}
	}else{
		if($('.header-bottom__menu--left').hasClass('done')){
			$('.header-bottom__menu--left').removeClass('done').prependTo($('.header-bottom__column--first'));
		}
		if($('.header-bottom__menu--right').hasClass('done')){
			$('.header-bottom__menu--right').removeClass('done').prependTo($('.header-bottom__column--third'));
		}
	}

}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();