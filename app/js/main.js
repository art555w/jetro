$('.header__burger').on('click', function () {
	$('.header__burger').toggleClass('active')
	$('.header__menu').toggleClass('active')
});

$('.slider__body').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider__nav',
	arrows: false,
});

$('.slider__nav').slick({
	slidesToShow: 6,
	asNavFor: '.slider__body',
	focusOnSelect: true,
	dots: false,
	arrows: false,
	responsive: [
		{
			breakpoint: 980,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				focusOnSelect: true,
				infinite: true
			}
		},
	]
});


