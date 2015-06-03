//= require jquery
//= require bootstrap-sprockets
//= require_tree .

// @import "../vendor/scrollReveal";

$(document).ready(function() {


  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  // Set div height to exact window height on page load


  $(".window-height").css("height", $(window).height() );

  // navbar transition jQuery script
$(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").css({
        "background": "rgba(0, 0, 0, 0.7)",
        "box-shadow": "0 0 2px black"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
        "box-shadow": "0 0 0px transparent"
      });
    }
  });

  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 200) {
      $(".navbar").slideUp();
    }
    else {
      $(".navbar").slideDown();
    }
  });

});


