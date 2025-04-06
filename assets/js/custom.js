jQuery(document).ready(function ($) {
  "use strict"
  // Header scroll class
  if ($('#main-header').length) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 60) {
        $('#main-header').addClass('header-scrolled');
      } else {
        $('#main-header').removeClass('header-scrolled');
      }
    });
    if ($(window).scrollTop() > 60) {
      $('#main-header').addClass('header-scrolled');
    }
  }
  // Smooth scroll for the navigation and links with .scrollto classes
  if ($('.main-nav a').length) {
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
          if ($('#main-header').length) {
            top_space = $('#main-header').outerHeight();
            if (!$('#main-header').hasClass('header-scrolled')) {
              top_space = top_space - 40;
            }
          }
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
          if ($(this).parents('.main-nav, .mobile-nav').length) {
            $('.main-nav .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
  }
}); //End


function preloader() {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
}

$(window).on('load', function () {
  preloader();
});
