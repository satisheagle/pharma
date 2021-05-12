

(function($) {

   // Testimonials 
   $(".owl-carousel").owlCarousel({    
    margin:10,
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  });
  
  // animanion on scroll
	WOW.prototype.addBox = function(element){
    this.boxes.push(element);
	};
	var wow = new WOW();
	wow.init();
	$('.wow').on('scrollSpy:exit',function(){
    var element = $(this);
    element.css({
        'visibility' : 'hidden',
        'animation-name' : 'none'
    }).removeClass('animated');
    wow.addBox(this);
	}).scrollSpy();

// nav menu toggle
	document.addEventListener("click", (e)=>{
	if(e.target.classList.contains("toggle")){
		document.querySelector("#menu").classList.toggle("visible");	
	}
	})

})(jQuery);