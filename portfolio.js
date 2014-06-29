jQuery(document).ready(function(){
	//mouseenter highlight here
	$('.expand').on('mouseenter', function(){
		$(this).addClass('highlight');
	});

	$('.expand').on('mouseleave', function(){
		$(this).removeClass('highlight');
	});
});