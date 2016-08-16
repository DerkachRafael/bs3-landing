$(function() {
	new WOW().init();
$(document).pjax('.main-nav a', '.logo', '.pjax-container',{frament:'.pjax-container'});
	 //slider
	 $('.flexslider').flexslider({
	 	animation: "slide",
	 	controlNav: "thumbnails"
	 	
	 });

	 $(window).scroll(function(){
	 	if ($(this).scrollTop() > 300) {
	 		$('#back-to-top').fadeIn();
	 	} else {
	 		$('#back-to-top').fadeOut(500);
	 	}
	 });

	//Click event to scroll to top
	$('#back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
//map
google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {
	var mapOptions = {
		zoom: 8
		, center: new google.maps.LatLng(41.8500300, -87.6500500)
	}
	var map = new google.maps.Map(document.getElementById('map-canvas')
		, mapOptions);
	var myLatLng = new google.maps.LatLng(41.8600900, -87.6500500);
	var beachMarker = new google.maps.Marker({
		position: myLatLng
		, map: map
		, title: 'Hello ,Elite-Studio',
		draggable : true
		
	});
	
}
