$(document).ready(function () {
  // owl carousel plugin for banner section
  $(".banner-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // magnificPopup plugin for youtube video
  $(".youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // country slider using owl carousel
  $(".country-carousel").owlCarousel({
    loop: false,
    nav: false,
    // dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // service slider using owl carousel
  $(".service-carousel").owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // testimonial card sliding
  $(".testimonial-carousel").owlCarousel({
    loop: false,
    nav: false,
    // dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // testimonial card sliding
  $(".partner-carousel").owlCarousel({
    loop: true,
    nav: false,
    // dots: false,
    autoplay: true,
    autoplayTimeOut: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
