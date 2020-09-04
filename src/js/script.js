$(document).ready(function(){
	$('.carusel__inner').slick({
		speed: 1500,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: '<button type="button" class="slick-prev"><img src="../src/icon/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../src/icon/right.svg"></button>',
		responsive: [
		 	{
		 		breakpoint: 992,
		 		settings: {
		 		  dots: true,
		 		  arrows: false
				 }
			}
		 ]
	  });
  });