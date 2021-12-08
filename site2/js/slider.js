const swiper1 = new Swiper('.container-slider1', {
  slideClass: ('slide-slider1 '),
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 34,
  navigation: {
    nextEl: '.swiper-button-next-products',
    prevEl: '.swiper-button-prev-products',

  },
  breakpoints:{
    750: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    970:{
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1300:{
      slidesPerView: 4,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }
  }
})


// swiper2

var swiper2 = new Swiper('.container-slider2', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next-news',
    prevEl: '.swiper-button-prev-news',
  },
});




