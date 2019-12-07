/* Turquoise scripts ========================================================== */
/* 2019-12-07 John Earl Hardesty */


$( document ).ready(function() {

    /* return to top https://codepen.io/rdallaire/pen/apoyx ----------------------- */
    // ===== Scroll to Top ==== 
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
    });

});