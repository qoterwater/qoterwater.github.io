$(function(){
  var headerHeight = document. getElementById('header').offsetHeight;
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top - headerHeight;
      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });