$(document).ready(function(){
  $('.sd-slides').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out'
  });
});
