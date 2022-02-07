$(document).ready(function(){
    // banner_slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                autoplay: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      });

    //vedio popup
    //   new VenoBox({
    //     selector: ".venobox"
    // });
    $('.venobox').venobox();

  //team slider
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        nextArrow: '.angle_left',
        prevArrow: '.angle_right',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                autoplay: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                autoplay: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            }
          ]
      });

      //work image popup
      new VenoBox({
        selector: '.my-image_popup-links',
    });
    
    //TESTIMONIAL SLIDER

    $('.test_text_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.test_img_slider'
    });
    $('.test_img_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.test_text_slider',
      dots: false,
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      autoplay: true,
      focusOnSelect: true,
      nextArrow: '.testi_arr_right',
      prevArrow: '.testi_arr_left',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            dots: false,
            arrows: true,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
            arrows: true,
            autoplay: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }
      ]
    });


    //sticky top menu js

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      var sticky = $('.sticky_top');

      if(scrolling >= 200){
        sticky.addClass('nav_bg');
      }
      else{
        sticky.removeClass('nav_bg');
      }
    });

    //scrollspy bootstrap js code
    $('body').scrollspy({target: ".navbar", offset: 50});

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    //wow js for our story part
    new WOW().init();
    
});