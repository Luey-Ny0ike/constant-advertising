$(document).ready(function(){
  $('.carousel').carousel({
    interval: 7000
  })

$('.center').slick({
  centerMode: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding: '200px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
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
})
