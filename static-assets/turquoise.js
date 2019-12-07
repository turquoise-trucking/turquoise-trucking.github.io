/* Turquoise scripts ========================================================== */
/* 2019-12-07 John Earl Hardesty */

function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  }
  
  function toggleScrollToTopButton() {
    var threshold = 50;
    if ($(window).scrollTop() > threshold) {
      $('#return-to-top').fadeIn('slow');
    } else {
      $('#return-to-top').fadeOut('slow');
    }
  }
  


$( document ).ready(function() {

    $('#return-to-top').click(scrollToTop);
    $(window).scroll(toggleScrollToTopButton);

    /* return to top https://codepen.io/rdallaire/pen/apoyx ----------------------- */
    // ===== Scroll to Top ==== 
    /*
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });*/

});