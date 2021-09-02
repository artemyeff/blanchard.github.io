
const slider = document.querySelector('.container-slider5');

let mobileSlider = function () {
  if (window.innerWidth <= 750) {
    mySwiper5 = new Swiper('.container-slider5', {
      sliderPerView: 1,
      spaceBetween: 30,
      sliderClass: 'section-event__item',

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination-event',
        clickable: true,
      },

      on: {
        init: function () {
          if (window.innerWidth > 750) {
            slider.dataset.mobile == 'false'
            if (slider.classList.contains('swiper-container-initialized')) {
              mySwiper5.destroy();
            }
          }
        },
      },
    });

    slider.dataset.mobile = 'true';
  }
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});