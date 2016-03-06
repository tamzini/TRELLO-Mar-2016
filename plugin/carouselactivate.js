	
	$(document).ready(function() {
		
		//owl Carousel-1
		$("#owl-demo").owlCarousel({
			autoPlay: true,
			navigation : true,
			pagination: false,
			items: 5,
			slideSpeed: 1000,
			paginationSpeed: 3000,
			rewindSpeed: 2000,
		 
		});
		
		

//owl Carousel-2
		$("#owl-demo-2").owlCarousel({
			autoPlay: false,
			navigation : true,
			pagination: false,
			items: 5,
			slideSpeed: 1000,
			paginationSpeed: 3000,
			rewindSpeed: 2000,
		 
		});
		
		//owl Carousel-2
		$("#owl-demo-3").owlCarousel({
			autoPlay: false,
			navigation : true,
			pagination: false,
			items: 4,
			slideSpeed: 1000,
			paginationSpeed: 3000,
			rewindSpeed: 2000,
		 
		});
		
	});