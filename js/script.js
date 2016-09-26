jQuery(document).ready(function($){
	console.log('js works');
});

$(window).load(function() {
 $('.loading').animate({
   opacity: 0
 }, 1000).hide(0, function() {
   console.log('cover hided');
 });
});
