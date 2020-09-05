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
			breakpoint: 960,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				focusOnSelect: true
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				focusOnSelect: true
			}
		},
		{
			breakpoint: 670,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				focusOnSelect: true
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				focusOnSelect: true
			}
		},
		{
			breakpoint: 350,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				focusOnSelect: true
			}
		},
	]
});


