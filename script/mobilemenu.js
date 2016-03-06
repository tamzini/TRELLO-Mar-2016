// Menu for mobile 


 $(document).ready(function(){
 	var x = true;
	$(".menu").click(function(){
    $(".nav-bar li").slideToggle(1000);
    if (x == true) {
    	$(".menu").css("background-position", "0px -32px");
    	x = false ;
    }
    else {
    	$(".menu").css("background-position", "0px 0px");
    	x = true ;
    }
   
	});
});


$(document).scroll(function(){
     if ($(window).width() < 800) {
	$(".nav-bar li").fadeOut(1000) ;
	$(".menu").css("background-position", "0px 0px");

	};
    	
});

// End of mobile Menu 