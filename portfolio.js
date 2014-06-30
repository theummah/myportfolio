jQuery(document).ready(function(){
	//mouseenter highlight here
	$('.expand').on('mouseenter', function(){
		$(this).addClass('highlight');
		$(this).children().show();
	});

	$('.expand').on('mouseleave', function(){
		$(this).children().hide();
		$(this).removeClass('highlight');
	});
});