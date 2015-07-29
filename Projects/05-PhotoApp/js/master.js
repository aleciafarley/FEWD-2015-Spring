/* this goes before the document file because we want it to always run */

new WOW().init();

$(document).ready(function() {
	$(".js-carousel").carousel({
		show: {
			"500px": 2,
			"740px": 3
		}
	});

	$(".js-lightbox").lightbox();
		
})