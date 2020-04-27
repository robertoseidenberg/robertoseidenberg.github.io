$(document).ready(function() {

	// Init rumbling links
	$('a').jrumble({
		x: 5,
		y: 5,
		rotation: 1
	});

	// Links are rumbling on mouseover
	$('a').hover(function(){
		$(this).trigger('startRumble');
	}, function(){
		$(this).trigger('stopRumble');
	});
});