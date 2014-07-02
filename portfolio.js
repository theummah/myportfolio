$(document).ready(function(){

});


$(document).on('click', '.myexp', function(){
	$('#list_edu').fadeToggle();
});
	$(document).on('click', '#arrow_container', function(){
       $('html, body').stop().animate({
             scrollTop: $(window).height()
         }, 1500);
	});