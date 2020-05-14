
    // slider 3d
    
    var swiper = new Swiper('.swiper1', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 60,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination1',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
      
//mouse vertical slider
      var swiper = new Swiper('.swiper2', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: 'swiper-pagination1',
          clickable: true,
        },
    });

