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

});



function goTop() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

