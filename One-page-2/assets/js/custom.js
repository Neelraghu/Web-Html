$("button.navbar-toggler").click(function(){
    $(this).toggleClass("open-menu");
  });

  $(document).ready(function(){
    $('.testimonial-slider-grp').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
         ]
     });
  });
  