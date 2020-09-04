$('.header__burger').on('click', function () {
	$('.header__burger').toggleClass('active')
	$('.header__menu').toggleClass('active')
});

$('.slider__body').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.slider__nav'
});
$('.slider__nav').slick({
	slidesToShow: 6,
	asNavFor: '.slider__body',
	focusOnSelect: true
});