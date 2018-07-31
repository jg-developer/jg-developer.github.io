$(document).ready(function(){
    $(function() {
      $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
          $(".menu").addClass("menu-scroll");
        } else {
          $(".menu").removeClass("menu-scroll");
        }
      });
    });
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var id = $(this).attr('href'),
          targetOffset = $(id).offset().top;
      $('html, body').animate({ 
        scrollTop: targetOffset - 100
      }, 700);
    });
});