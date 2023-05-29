$(document).ready(function(){
  $('.review-slick').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });


$(document).ready(function(){
  $('.v-slick').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });  
