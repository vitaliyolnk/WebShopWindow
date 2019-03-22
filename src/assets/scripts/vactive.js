$(function () {
      
    // ------------------------------------------------------- //
    //   Scroll to top button
    // ------------------------------------------------------ //

    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 1500) {
        $('#scrollTop').fadeIn();
      } else {
        $('#scrollTop').fadeOut();
      }
    });


    $('#scrollTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });

  });