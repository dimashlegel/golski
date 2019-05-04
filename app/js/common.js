$(function() {

	// Custom JS

	// header on scroll
	$(document).ready(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 20) {
				$('.main-header').addClass("scrolling");
			} else {
				$(".main-header").removeClass("scrolling");
			};
		});
	})
	// end header on scroll

	// hp-banner slider 



	$('#hp-banners').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		fade: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		pauseOnHover: false,
		dots: true,
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

});