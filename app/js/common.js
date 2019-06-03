$(function() {

	// Custom JS

	// header on scroll
	// $(document).ready(function() {
	// 	$(window).scroll(function() {
	// 		if ($(this).scrollTop() > 20) {
	// 			$('.main-header').addClass("scrolling");
	// 		} else {
	// 			$(".main-header").removeClass("scrolling");
	// 		};
	// 	});
	// })
	// end header on scroll

	// hp-banner slider 

	$('#hp-banners').slick({
		infinite: true,
		speed: 1000,
		fade: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		pauseOnHover: false,
		dots: true
	});

	$(window).scroll(function() {
		var x = $(this).scrollTop(); /* scroll pos */
		var y = $("html").height();
		var z = x / y;

		curTop = (((z * 800) + 0));
		$("#banners-scroll").css("top", (curTop + 0) + "px");
	});

	var hasWebRTC = navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia;

	if (!hasWebRTC) {
		$('.wrap-banner-scroll').css('position', 'static');
	}
	//  end hp-banner slider

	// products slider

	$('.product-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		pauseOnHover: false,
		dots: true,
	});

	//
	// mobile-menu

	$(document).ready(function() {

		var menu = $(".menu-mobile");
		var dropMenu = $(".menu-mobile__item");
		var hamburger = $(".hamburger");
		var menuOpen;
		var overLay = $(".mobile-overlay");

		function openMenu() {
			menu.css("left", "0px");
			menuOpen = true;
		}

		function closeMenu() {
			menu.css("left", "-320px");
			menuOpen = false;
		}

		function toggleMenu() {
			if (menuOpen) {
				closeMenu();
			} else {
				openMenu();
			}
		}

		function toggleHamburger() {
			hamburger.toggleClass('is-active');
		}

		function toggleOverlay() {
			overLay.toggleClass('mobile-overlay_show');
		}

		hamburger.on({
			click: function() {
				toggleMenu();
				toggleHamburger();
				toggleOverlay();
				$('.side-catalog').toggle(400);
			}
		});

		overLay.on({
			click: function() {
				toggleMenu();
				toggleHamburger();
				toggleOverlay();
			}
		})

		dropMenu.on('click', function() {
			if ($(this).find('.drop-menu__side').length == 1) {
				$(this).toggleClass('menu-mobile__item_open menu-mobile__item_arrow-rotate');
			} else {
				dropMenu.removeClass('menu-mobile__item_open menu-mobile__item_arrow-rotate');
			}
		})

		$(document).keyup(function(e) {
			if (e.which == 27 && menuOpen) {
				closeMenu();
				toggleHamburger();
			}
		});

	});



	var hp_prods = $('.hp-products').find('.hp-products__title');
	var hp_prods_imgs = $('.hp-products').find('.hp-products__img');

	for (var i = 0; i < hp_prods.length; i += 2) {
		$(hp_prods[i]).attr('data-aos', 'fade-right');
	}
	for (var i = 0; i < hp_prods_imgs.length; i += 2) {		
		$(hp_prods_imgs[i]).children("img").attr('data-aos', 'zoom-in-right');
	}

});