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

//  COPYRIGHT DATE AUTO UPDATE

// Get date
var today = new Date();
var year = today.getFullYear();
console.log(year);

// Set or display year
$('.year').text(year);

// END COPYRIGHT DATE

// ASK USER IF THEY WANT TO SEND AN EMAIL

$(document).ready(function(){
	$('a').confirmMailto();
});

//  carousel

$('.carousel').flickity({

  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  autoPlay: 2000,
  pageDots: false
    
});