$(document).ready(function($){
    var subir = $('.back-to-top');

    subir.click(function(e){
        e.preventDefault();

        $('html, body').animate({scrollTop: 0}, 500);
    });

    subir.hide();

    $(window).scroll(function(){
        
        if( $(this).scrollTop() > 200 ){
            subir.fadeIn();
        }else{
            subir.fadeOut();
        }
    });
});
    
$(document).ready(function() {
	
    var headerHeight = $('header').outerHeight(); // Target your header navigation here
      
    $('.nav-link li a').click(function(e) {
        
        var targetHref   = $(this).attr('href');
        
      $('html, body').animate({
          scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
      }, 1000);
      
      e.preventDefault();
    });
  });