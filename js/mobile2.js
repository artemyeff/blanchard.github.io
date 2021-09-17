const slider = document.querySelector('.container-slider5');

let mobileSlider = function () {
  if (window.innerWidth <= 320 && slider.dataset.mobile == 'false' ) {
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
    });

    slider.dataset.mobile = 'true';
  }

  if(window.innerWidth > 320) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initial'))
    mySwiper5.destroy();
  }
};

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});