 

 $(document).ready(function(){
 scrollto();
 });

 function scrollto(){
 	                    $("nav a").click(function(e){
 		                                           e.preventDefault();
 		                                           var sectionID = e.currentTarget.id + "section" ;
 		                                           $("html body").animate({
 			                                                               scrollTop: $("#" + sectionID).offset().top - 150},2000);


 		                                         
 		});
 	
 }