$(document).ready(function(){

	$("#partzero").css('height', $(window).height());
	$("#partone").css('height', $(window).height());
	$("#parttwo").css('height', $(window).height());
	$("#partthree").css('height', $(window).height());
});


$(document).on('click', '.myexp', function(){
	$(this).find('.list_edu').fadeToggle();
});

$(document).on('click', '#arrow_container', function(){
    $('html, body').stop().animate({
        scrollTop: $(window).height()
    }, 1500);
});

$(document).on('click', '#contact_icon', function(){
<<<<<<< HEAD
    $('#contact').fadeIn();
});

$(document).on('click', '#close', function(){
    $('#contact').fadeOut();
=======
    $('#my_contact').fadeToggle();
>>>>>>> be7677adb6a59ba2cf7acd3291343770d8d8fa0e
});