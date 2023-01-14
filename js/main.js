$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1.5,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
      loop: false,
    },
    1300: {
      items: 3.3,
      nav: false,
      loop: false,
    },
  },
});
