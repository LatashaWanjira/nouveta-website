$(document).ready(function() {
  // Navbar background change on page scroll
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
  //Products Carousel
  $('.product-container').slick({
    arrows: true,
    prevArrow: $(".pp2"),
    nextArrow: $(".nn2"),
  })

  // Centered Carousel
  $('.testimonals-carousel').slick({
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }]
  });
  // Continous Carousel
  $('.partners-carousel').slick({
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  });
});
