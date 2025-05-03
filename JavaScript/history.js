function adjustFontSize() {
var newSize;

if (window.innerWidth >= 1200) {
    newSize = 62.5;
} else if (window.innerWidth >= 790) {
    newSize = Math.max(10, Math.min(window.innerWidth / 16, 62.5));
} else {
    newSize = Math.max(30, Math.min(window.innerWidth / 1, 62.5));
}

document.documentElement.style.fontSize = newSize + '%';
}

window.addEventListener('resize', adjustFontSize);


window.addEventListener('load', adjustFontSize);

function PageTopCheck(){
    var winScrollTop = $(this).scrollTop();
    var secondTop =  $("#area-2").offset().top - 150;
    if(winScrollTop >= secondTop){
		$('.js-scroll').removeClass('scroll-view');
		$('.js-pagetop').addClass('scroll-view');
	} else {
		$('.js-scroll').addClass('scroll-view');
		$('.js-pagetop').removeClass('scroll-view');
	}

}

$('.scroll-top a').click(function () {
	var elmHash = $(this).attr('href'); 
	if (elmHash == "#area-2") {
		var pos = $(elmHash).offset().top;
		$('body,html').animate({scrollTop: pos}, pos);
	}else{
		$('body,html').animate({scrollTop: 0}, 500);
	}
    return false;
});

$(window).scroll(function () {
	PageTopCheck();
});

$(window).on('load', function () {
	PageTopCheck();
});


$(document).ready(function () {
	$('.fadeInUpTrigger').on('inview', function (event, isInView) {
		if (isInView) {
			$(this).addClass('animate__animated animate__fadeInUp');
		}
	});
});


tippy('.cap', {
	placement: 'right',
	animation: 'shift-toward-subtle',
	theme: 'translucent',
	duration: 200,
}
)