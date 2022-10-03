$(document).ready(function () {
  // mignififc popup
  $(".test-popup-link").magnificPopup({
    type: "image",
    gallery: {
      // options for gallery
      enabled: true,
    },
  });

  // counterup js
  $(".counter").counterUp();

  // slick slider
  $(".testimonial").slick({
    arrows: false,
    dots: true,
    Infinity: true,
    loop: true,
    autoplay: true,
  });
});
