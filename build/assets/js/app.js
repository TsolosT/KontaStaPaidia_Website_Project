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
			}
			next.children(':first-child').clone().appendTo($(this));
			});
		//initialize google map
		initMap();
	
});
$(".amount-btn").on("click",function()
{
	 $(".amount-btn.active-amount").removeClass("active-amount");
	 $(this).addClass("active-amount");
	 donateAmount();
})
			

		//translator
	 var selectLang=document.getElementById("langselector");
		selectLang.addEventListener("change",function()
		{
			var value=selectLang.value;
			switch(value)
				{
					case "en":
								loadTranslator("en");
								break;
					case "gr":
							    loadTranslator("gr");
								break;
				}
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
//Up to top function
function goTop() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//translator
function Translate() { 
    //initialization
    this.init =  function(attribute, lng){
        this.attribute = attribute;
        this.lng = lng;    
    }
    //translate 
    this.process = function(){
            var _self = this;
			var xrhFile;
		if (window.XMLHttpRequest)
		{ xrhFile = new XMLHttpRequest();}
		else
		{ xrhFile = new ActiveXObject("Microsoft.XMLHTTP");}
                //load content data 
                xrhFile.open("GET", "./assets/data/"+this.lng+".json", false);
                xrhFile.onreadystatechange = function ()
                {
                    if(xrhFile.readyState === 4)
                    {
                        if(xrhFile.status === 200 || xrhFile.status == 0)
                        {
                            var LngObject = JSON.parse(xrhFile.responseText);
                            var allDom = document.getElementsByTagName("*");
                            for(var i =0; i < allDom.length; i++)
							{
                                var elem = allDom[i];
								var inputs=document.getElementsByTagName["input"];
                                var key = elem.getAttribute(_self.attribute);
                                if(key != null) 
								{
                                     elem.innerHTML = LngObject[key];
                                }
                            }
                        }
                    }
                }
                xrhFile.send();
    }    
}
function loadTranslator(lang)
{
    var translate = new Translate();
    var currentLng = lang;
    var attributeName = 'data-tag';
    translate.init(attributeName, currentLng);
    translate.process(); 
 }

// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-lightbox");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function closeModalMsg() {
  document.getElementById('myModal-thankmsg').style.display = "none";
}
//add donate amount to paypal
function donateAmount() {
    if ($("input[name='otheramount']").val().length > 0) {
        ("input[name='amount']").val($("input[name='otheramount']").val());
    } else {
        $("input[name='amount']").val($("button.amount-btn.active-amount").val());
    }
}
//add donate type to paypal
function donateType()
{
   if($('#donationFrequency1').is(':checked'))
   { 
	   $("input[name='cmd']").val("_donations");
   }
	else 
	{
		 $("input[name='cmd']").val("_xclick-subscriptions");
	}
}

