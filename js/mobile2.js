// // events slider

// const eventsSlider = document.querySelector('.section-events__content');

// let swiperEvent;

// const mobileEventsSlider = () => {
//   if (window.innerWidth <= 670 && eventsSlider.dataset.mobile == 'false') {
//     swiperEvent = new Swiper(eventsSlider, {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//       spaceBetween: 10,
//       loop: true,
//       slideClass: ('section-event__item'),

//       pagination: {
//         el: '.swiper-pagination-event',
//       },
//     });

//     eventsSlider.dataset.mobile = 'true';
//   }

//   if (window.innerWidth > 670) {
//     eventsSlider.dataset.mobile = 'false';

//       if (eventsSlider.classList.contains('swiper-container-initialized')) {
//         swiperEvent.destroy();
//       }
//   }
// }

// mobileEventsSlider();

// window.addEventListener('resize', () => {
//   mobileEventsSlider();
// });