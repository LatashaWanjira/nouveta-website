$(document).ready(function() {
  // Navbar background change on page scroll
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
