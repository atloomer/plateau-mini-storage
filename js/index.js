// SMOOTH SCROLLING

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// END SMOOTH SCROLLING

// PARALLAX EFFECT FOR LANDING PAGE

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*0.15)+'px');
}

$(window).scroll(function(){
    var fromtop = $(document).scrollTop();
    $('#hero-container').css({opacity: 200-fromtop});
});

// Content fade in on scroll

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.fade-in').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1',
          'margin-top': '3px'
        }, 800);

      }

    });

  });

});

//  COPYRIGHT DATE AUTO UPDATE

// Get date
var today = new Date();
var year = today.getFullYear();
console.log(year);

// Set or display year
$('.year').text(year);

// END COPYRIGHT DATE

//  Carousel

$('.carousel').flickity({

  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  autoPlay: 2000,
  pageDots: false

});
