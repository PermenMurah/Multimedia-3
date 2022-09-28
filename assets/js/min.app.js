$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  

  var swiper = new Swiper('.blog-slider', {
   spaceBetween: 30,
   effect: 'fade',
   loop: true,
   mousewheel: {
     invert: false,
   },
   // autoHeight: true,
   pagination: {
     el: '.blog-slider__pagination',
     clickable: true,
   }
 });