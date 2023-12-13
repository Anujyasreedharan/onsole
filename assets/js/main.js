(function ($) {
  "use strict";

  $(window).on("load", function () {
    // Background Image With Attribute
    var img = $(".bg-img");
    img.css("background-image", function () {
      var bg = "url(" + $(this).data("background") + ")";
      return bg;
    });
  });

  $(document).ready(function () {
    //codes for wow animation
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true,
      });
      wow.init();
    }
    // Animated Hamburger Icon
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("toggle-active");
      $("#mainNav").addClass("nav-bg-active");
    });

    // Select Language
    $(".language-select").niceSelect();

    // Position Navbar On Scroll
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if ((scroll > 30) | (scroll == 30)) {
        $("header").addClass(
          "wow animate__animated animate__fadeInDown box_shadow"
        );
      } else {
        $("header").removeClass(
          "wow animate__animated animate__fadeInDown box_shadow"
        );
      }
    });

    // Client Slider
    var clientSlider = $(".client__logo__wrapper");
    clientSlider.owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 5,
      responsive: {
        0: {
          items: 3,
        },
        576: {
          items: 3,
        },
        768: {
          items: 5,
        },
      },
    });

    // Choice Slider
    var choiceSlider = $(".choice__slider");
    choiceSlider.owlCarousel({
      loop: true,
      margin: 24,
      center: true,
      stagePadding: 12,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 6,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1400: {
          items: 5,
        },
        1800: {
          items: 6,
        },
      },
    });




    // Scroll Bottom To Top
    var ScrollTop = $(".scrollToTop");
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  });
})(jQuery);




$(document ).ready(function() {
  var x = 0.5;
  var y = 0.5;
  var maxRotation = 18; 
  var perspective = 1000;
  
  $(document).mousemove(function(event){
    var pos = [event.pageX / document.body.clientWidth, event.pageY / document.body.clientHeight];
    for (var i=0;i < pos.length;i++) {
      if (pos[i]<0) {
        pos[i] = 0;
      }
      if (pos[i]>1) {
        pos[i] = 1;
      }
    }
    pos[0] = Math.round(((pos[0]*2)-1)*maxRotation);
    pos[1] = Math.round(((pos[1]*-2)+1)*maxRotation);
  $(".glance").css("transform", "perspective(" + perspective + ") rotateX("+pos[1]+"deg) rotateY("+pos[0]+"deg)");
  $(".glance").css("-webkit-transform", "perspective(" + perspective +    ") rotateX("+pos[1]+"deg) rotateY("+pos[0]+"deg)");
  });
});

new WOW().init();


$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 10,
    slidesPerView: 5,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
