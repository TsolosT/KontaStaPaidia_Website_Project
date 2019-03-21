// JavaScript Document

$(document).ready(function () 
{
	//nav toggler 
    $("nav").find("li").on("click", "a", function () 
		{
			$('.navbar-collapse.in').collapse('hide');
		});
	//Go to top btn
	$("#go-top-btn").on('click',function()
		{
			goTop(); 
		});
	//post-carousel
		$('#carousel-post').carousel({interval: 4000})
		$('.card .carousel-item').each(function(){
			var next = $(this).next();
			if (!next.length) {
			next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
			for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
			}});
		//initialize google map
		initMap();
		//add active class one donation amount btn
		 $(".amount-btn").on("click",function(){
			 $(".amount-btn .active-amount").removeClass("active-amount");
			 $(this).addClass("active-amount");
		 });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 37.971996112, lng: 23.73416373};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
 

function goTop() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

