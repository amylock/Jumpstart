$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var startSrcollPosition = 0;
  $( window ).scroll(function() {
    var  endScrollPosition = $(this).scrollTop();
    if( endScrollPosition - startSrcollPosition >= 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      startSrcollPosition = endScrollPosition;
    } else if (startSrcollPosition - endScrollPosition > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      startSrcollPosition = endScrollPosition;
    }
  });
});
