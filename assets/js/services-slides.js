$(document).ready(function(){
  $('.slides').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus:false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slides').slick('slickFilter','.sd');

});

$('#sd-unslick').on('click', function(){
  $('.slides').slick('slickUnfilter');
  $('.slides').slick('slickFilter','.sd');
});

$('#sr-unslick').on('click', function(){
  $('.slides').slick('slickUnfilter');
  $('.slides').slick('slickFilter','.sr');
});

$('#mp-unslick').on('click', function(){
  $('.slides').slick('slickUnfilter');
  $('.slides').slick('slickFilter','.mp');
});

$('#fp-unslick').on('click', function(){
  $('.slides').slick('slickUnfilter');
  $('.slides').slick('slickFilter','.fp');
});

$('#rd-unslick').on('click', function(){
  $('.slides').slick('slickUnfilter');
  $('.slides').slick('slickFilter','.rd');
});

$('#pr-unslick').on('click', function(){
  $('.slides').slick('slickUnfilter');
  $('.slides').slick('slickFilter','.pr');
});

$('#gis-unslick').on('click', function(){
  $('.slides').slick('slickUnfilter');
  $('.slides').slick('slickFilter','.gis');
});
