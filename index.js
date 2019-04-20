$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('header').removeClass('hidden');
    $('header').addClass('not-hidden');
  } else {
    $('header').addClass('hidden');
    $('header').removeClass('not-hidden');
  }
});
