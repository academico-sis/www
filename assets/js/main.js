;(function ($) {
	"use strict";
	$(document).ready(function () {
		$('body').scrollspy({
			target: ".header-area",
			offset: 50
		});

		$('[data-toggle="tooltip"]').tooltip();

		$('.mainmenu').slicknav({
			label: '',
			duration: 500,
			prependTo: '',
			closedSymbol: '<i class="fa fa-angle-right"></i>',
			openedSymbol: '<i class="fa fa-angle-right"></i>',
			appendTo: '.header-area',
			menuButton: '.toggle',
			closeOnClick: 'true',
		});

		$(".toggle").on('click', function () {
			$(this).toggleClass("active");
		});



		$(".t6-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplayTimeout: 5000,
			dots: false,
			nav: true,
			navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>", ],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 1,
				},
			}
		});


		$("#mainmenu-area").sticky({
			topSpacing: 0
		});

		$(".preloader").fadeOut("slow");

		var scroll = new SmoothScroll('a[href*="#"]', {
			speed: 1000
		});
		if (typeof Typed === 'function') {
			var typed = new Typed('.typing', {
				strings: ["Work Speed"],
				loop: true,
				typeSpeed: 100,
				backSpeed: 80,
			});
		}

	});
})(jQuery);
