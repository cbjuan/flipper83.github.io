;(function($){
    "use strict"; 
     
    // Countdown JS
    $('#example').countdown({
        date: '2/17/2017 18:00:00',
        offset: -8,
        day: 'Day',
        days: 'Days'
    }, 
    function () {
        alert('Comienza el Freakend!');
    });
    
    // MixItUp JS
    $(function(){
        $('.gallery_item .slides').mixItUp();
    }); 
    
   
    
    $(window).load(function() {
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            dot:false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 68,
//            itemMargin: 5,
            maxItems: 6,
            asNavFor: '#slider',
            controlsContainer: $("#carousel"), 
            customDirectionNav: $(".custom-navigation a"),
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            directionNav: false,
            sync: "#carousel"
        }); 
    });
    
    // Carousel-2
    $(window).load(function() {
        // The slider being synced must be initialized first
        $('#carousel-2').flexslider({
            animation: "slide",
            controlNav: false,
            dot:false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 140,
            itemMargin: 15,
            maxItems: 7,
            asNavFor: '#slider',
            controlsContainer: $("#carousel"), 
            customDirectionNav: $(".custom-navigation a"),
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            directionNav: false,
            sync: "#carousel"
        }); 
    });
     
  
    // Can also be used with $(document).ready()
    $('.gallery_item').flexslider({
        animation: "slide",
        itemWidth: 174.98,
        itemMargin: 20,
        controlNav: true,
        animationLoop: false,
        slideshow: false,
        controlsContainer: $(".gallery_item"), 
        customDirectionNav: $(".custom-navigation a"),
    });
    
    // Lightbox
     lightbox.option({
        'showImageNumberLabel': false,  
    })
    
    
 
})(jQuery);   