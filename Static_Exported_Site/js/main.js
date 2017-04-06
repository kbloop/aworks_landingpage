function main() {

(function () {
    'use strict';

    // Status preloader
    jQuery(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(25).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(25).css({
            'overflow': 'visible'
        });
    })

    // Scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

   /* ==============================================
    Testimonial Slider
    =============================================== */ 

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu
    ======================================*/
    // $(window).bind('scroll', function() {
    //     var navHeight = $(window).height() - 100;
    //     if ($(window).scrollTop() > navHeight) {
    //         $('.navbar-default').addClass('on');
    //     } else {
    //         $('.navbar-default').removeClass('on');
    //     }
    // });

    // $('body').scrollspy({ 
    //     target: '.navbar-default',
    //     offset: 80
    // })

    $(document).ready(function() {
      $("#team").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          autoHeight : true,
          itemsCustom : [
                [0, 1],
                [450, 2],
                [600, 2],
                [700, 2],
                [1000, 4],
                [1200, 4],
                [1400, 4],
                [1600, 4]
              ],
      });

      $("#clients").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          autoHeight : true,
          itemsCustom : [
                [0, 1],
                [450, 2],
                [600, 2],
                [700, 2],
                [1000, 4],
                [1200, 5],
                [1400, 5],
                [1600, 5]
              ],
      });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

    });


}());


}
main();