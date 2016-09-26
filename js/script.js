$(window).load(function() {
  $('.loading').animate({
		opacity: 0
	}, 600,function() {
		$(this).remove();
	});
});
