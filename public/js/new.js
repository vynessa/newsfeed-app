$(() => {
  $('.slider').slider();
  $('.button-collapse').sideNav();
});

document.addEventListener('DOMContentLoaded', () => {
  $('.preloader-background').delay(1700).fadeOut('slow');
  $('.preloader-wrapper').delay(1700).fadeOut();
});
