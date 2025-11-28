$(document).ready(function (e) {
	$('.steps-slider').slick({
		dots: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		centerMode: false,
		arrows: false,
		responsive: [{
			breakpoint: 1365,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});

	$('.testimonials-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		autoplaySpeed: 6000,
		prevArrow: '.arrow_prev',
		nextArrow: '.arrow_next',
		arrows: true,
		adaptiveHeight: true,
	});

	$('.community-video-slider').slick({
		dots: true,
		prevArrow: '.arrow_prev',
		nextArrow: '.arrow_next',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		autoplay: false,
		centerMode: false,
 
	});

	$('.single-row-slider').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				rows: 1,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerMode: true,
				centerPadding: '25px',
			}
		}
		]
	});

	$('.community_slider_xs').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				rows: 1,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerMode: false,
				centerPadding: '24px',
			}
		}
		]
	});

	$('.two-row-slider').slick({
		dots: true,
		rows: 2,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				rows: 1,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerMode: false,
				centerPadding: '24px',
			}
		}
		]
	});

	$('.three-row-slider').slick({
		dots: true,
		rows: 3,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				rows: 1,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerMode: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerPadding: '16px',
				centerMode: true,
			}
		}
		]
	});

	$('.location-slider').slick({
		centerMode: true,
		dots: true,
		arrows: false,
		autoplay: true,
		centerPadding: '0px',
		pauseOnHover: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		slidesToShow: 11,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 7,
				slidesToScroll: 1,
				infinite: true,
				rows: 1,
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				rows: 1,
				centerPadding: '20px',
				centerMode: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				rows: 1,
				centerPadding: '50px',
				centerMode: true,
			}
		}
		]
	});

	if (window.innerWidth < 768) {
		$('.leadership-slider').slick({
			dots: true,
			rows: 2,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			centerMode: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			arrows: false,
			responsive: [{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					rows: 1,
					centerMode: true,
					centerPadding: '10px',
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					rows: 1,
					centerPadding: '20px',
					centerMode: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 1,
					centerPadding: '70px',
					centerMode: true,
				}
			}
			]
		});
	}

	$('.departments-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		arrows: true,
		responsive: [{
			breakpoint: 1270,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				variableWidth: false,
				centerPadding: '0',
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				variableWidth: false,
			}
		}
		]
	});

	$('.intership-slider').slick({
		dots: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: true,
		arrows: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				rows: 1,
				centerMode: true,
				centerPadding: '10px',
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				rows: 1,
				centerPadding: '20px',
				centerMode: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerPadding: '50px',
				centerMode: true,
			}
		}
		]
	});

	$('.hiring-slider').slick({
		dots: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: true,
		arrows: false,
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				rows: 1,
				centerMode: true,
				centerPadding: '10px',
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				rows: 1,
				centerPadding: '20px',
				centerMode: true,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 1,
				centerPadding: '50px',
				centerMode: true,
			}
		}
		]
	});

	$('.contact-img-slider').slick({
		dots: false,
		prevArrow: '.arrow_prev',
		nextArrow: '.arrow_next',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		pauseOnFocus: false,
		autoplay: true,
		centerMode: false,
		arrows: true,
		asNavFor: $('.contact-img-slider,.contact-text-slider,.contact-tabs-slider'),
	});

	$('.contact-text-slider').slick({
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		arrows: false,
		asNavFor: $('.contact-img-slider,.contact-text-slider,.contact-tabs-slider'),
	});

	$('.contact-tabs-slider').slick({
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		arrows: false,
		focusOnSelect: true,
		asNavFor: $('.contact-img-slider,.contact-text-slider,.contact-tabs-slider'),
	});

	$('.partnership-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		centerMode: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		prevArrow: '.arrow_prev',
		nextArrow: '.arrow_next',
		arrows: true,
		asNavFor: $('.partnership-slider,.video-slider'),
	});

	$('.video-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		centerMode: false,
		arrows: false,
		asNavFor: $('.partnership-slider,.video-slider'),
	});

	if (jQuery(".question_accordion").length) {
		jQuery(".question_accordion").accordion({
			questionClass: '.question',
			answerClass: '.content',
			itemClass: '.column-item'
		});
	}

	if ($(window).width() < 471) {
		$('.job-box').click(function (e) {
			$(this).find('.job-detail').fadeIn();
		});

		$('.job_details_close').click(function (e) {
			$(this).parents('.job-detail').fadeOut();
			e.stopPropagation();
		});
	}
});

$('.video-slider').on('init', function (event, slick) { }).on('afterChange', function (e, o) {
	$('iframe').each(function () {
		$(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	});
}).slick();

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 100) {
		$(".header").addClass("header-sticky");
	} else {
		$(".header").removeClass("header-sticky");
	}
});

$(".selectBox.desktop_dropdown").on("click", function (e) {
	e.preventDefault();
	$(this).toggleClass("show");
	var dropdownItem = e.target;
	var container = $(this).find(".selectBox__value");
	container.text(dropdownItem.text);
	$(dropdownItem)
		.addClass("active")
		.siblings()
		.removeClass("active");

	var region = e.target.getAttribute("data-region");
	if (region != null) {
		var map_svg = document.getElementById("map_svg");
		var map_content = map_svg.contentDocument;
		map_content.getElementById(region).dispatchEvent(new Event('click'));
	}
});

$(".selectBox.mobile_dropdown").on("click", function (e) {
	e.preventDefault();
	if ($(e.target).hasClass("selectBox__value")) {
		$(this).toggleClass("show");
	}
});

$(".mobile_location_item").on("click", function (e) {
	e.preventDefault();
	$(this).siblings().removeClass("active");
	$(this).toggleClass("active");
});

$(".mobile_location_search input").on("keyup", function (e) {
	e.preventDefault();
	var value = $(this).val().toLowerCase();
	$(".mobile_location_item").filter(function (index) {
		$(this).toggle($(this).find("h4").text().toLowerCase().indexOf(value) > -1);
	});
	var count = $(".mobile_location_item:visible").length;
	if (count == 0) {
		$(".no_results").show();
	} else {
		$(".no_results").hide();
	}
});

$(".job-detail-btn").on("click", function (e) {
	$(this).parents('.job-box').find('.job-detail').slideToggle();
	$(this).toggleClass("active");
	$(this).find(".fa-chevron-down").toggleClass("active");
	if ($(this).hasClass("active")) {
		$(this).find('span').text("Close Details");
	} else {
		$(this).find('span').text("View Details");
	}
});

$('input[type="file"]').on('change', function () {
	var val = $(this).val();
	$(this).siblings('span').text(val);
})

function toggler(social_menu) {
	$("#" + social_menu).toggle();
}

jQuery(document).on('click', '.copy_link', function (e) {
	e.preventDefault();
	console.log('copy');
	var copyText = jQuery(this).attr('data-link');
	var $temp = jQuery("<input>");
	jQuery("body").append($temp);
	$temp.val(copyText).select();
	document.execCommand("copy");
	$temp.remove();
	jQuery('.copy_confirmation').fadeIn().delay(2000).fadeOut();
});

if (window.location.href.indexOf("title") > -1) {
	//scroll to .search-form
	jQuery('html, body').animate({
		scrollTop: jQuery(".search-form").offset().top - 75
	}, 300);
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
})

$('.to-top').click(function () {
	$(this).parents('.job-detail').animate({ scrollTop: 0 }, 800);
	return false;
});