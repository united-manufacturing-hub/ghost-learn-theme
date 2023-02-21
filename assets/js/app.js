/*
=====================
JS Table of Conttent 
=====================
01. Preloader
02. Sticky Header
03. Mobile Menu  
04. AOS Animation 
05. Current Date
06. Magnific Popup
07. Slick Slider
08. InfiniteScroll
09. Masonry Grid
09. Scroll to Top
10. Tab 
*/
(function ($) {
  "use strict";
  /*
------------------------  
01. Preloader
--------------------------
*/
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(10);
  });
  /*
  ------------------------  
  03. Mobile Menu 
  --------------------------
  */
  function mobileToggle(header) {
    $('.header-area:first-child .mobile-toggle').on('click', function(){
        $('.header-sticky').remove();
    });

    $(`${header} .mobile-toggle`).on("click", function () {
      console.log('ok');
      $(this).toggleClass("open");
      $('body').toggleClass('overFlow');
      $(".mobile-menu").slideToggle();
    });
    $(".sub-toggle").on("click", function () {
      if ($(this).text().includes("-")) {
        $(this).text("+")
      } else {
        $(this).text("-")
      }
      $(this).parent().siblings(".dropdown-menu").slideToggle();
    });

  }
  mobileToggle('.header-area');
  /*
  ------------------------  
  04. AOS Animation
  --------------------------
  */
  AOS.init({
    offset: 50,
    delay: 0,
    duration: 800,
    easing: 'ease-in-out',
    debounceDelay: 20,
    throttleDelay: 50,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
  /*
  ------------------------  
  05. Current Date
  --------------------------
  */
  $('#spanYear').html(new Date().getFullYear());
  /*
  ------------------------  
  06. Magnific Popup
  --------------------------
  */
  if ($('.video-popup').length > 0) {
    $('.video-popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }
  /*
  ------------------------  
  07. Slick Slider
  --------------------------
  */
  if ($('.author-slider').length > 0) {
    $('.author-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      arrows: false,
      loop: true,
      dots: true,
      draggable: false,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    });
  }
  if ($('.popular-topics-slider').length > 0) {
    $('.popular-topics-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      arrows: false,
      loop: true,
      dots: true,
      draggable: false,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    });
  }

  /*
  ------------------------  
   08. InfiniteScroll
  --------------------------
  */
  if ($('.topics-loading').length > 0) {
    $('.topics-loading').infiniteScroll({
      // options
      path: function () {
        // no value returned after 4th loaded page
        if (this.loadCount < 4) {
          let nextIndex = this.loadCount + 2;
          return `topics/topics-${nextIndex}.html`;
        }
      },
      append: '.topic-item',
      button: '.load-more-btn',
      checkLastPage: false,
      scrollThreshold: false,
      status: '.page-load-status',
      history: false,
    });
  }

  /*
  ------------------------   
   09. Masonry Grid
  -------------------------- 
  */
  if ($('.masonry-grid').length > 0) {
    jQuery(window).on('load', function () {
      var $grid = $('.masonry-grid').masonry({
        percentPosition: true,
        itemSelector: '.post-item',
        gutter: 32,
      });
    });
  }
  /*
  ------------------------  
   09. Scroll to Top
  --------------------------
  */
  function scrolltop() {
    var wind = $(window);
    wind.on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 500) {
        $(".scroll-top-button").fadeIn("slow");
      } else {
        $(".scroll-top-button").fadeOut("slow");
      }
    });
  }
  scrolltop();
  /*
  ------------------------  
   10. Tab
  --------------------------
  */
  $("document").ready(function () {
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
  });

  $(".tab-slider--nav li").click(function () {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
  });

  /*
------------------------  
12. Sticky Header
--------------------------
*/

  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    var sn = $('.header-sticky');
    var scroll = $(window).scrollTop();

    if (scroll >= 120) {
      if ($(".header-area").length < 2) {
        $(".header-area").clone().addClass("header-sticky").insertAfter('.header-area');
        mobileToggle('.header-sticky');
      }
      sn.css("top", "0px");
    }
    else if (scroll < 50) {
      sn.css("top", "-100px");
    }
    else {
      console.log(scroll);
    }
  }

}(jQuery)); 