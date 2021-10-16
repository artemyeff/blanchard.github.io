
    // swiper1
        var swiper0 = new Swiper('.container-slider1', {
            slidesPerView: 1,
            spaceBetween: 10,

            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            effect: 'fade'
        });
        

        // swiper2
        var swiper1 = new Swiper(".container-slider2", {
            slidesPerView: 3,
            grid: {
              rows: 2,
            },
            spaceBetween: 50,
            slidesPerGroup: 3,

            breakpoints: {
                200: {
					slidesPerView: 1,
					spaceBetween: 34,
                    slidesPerGroup: 1,
                    grid: {
                        rows: 1,
                        },
				},
				670: {
					slidesPerView: 2,
					spaceBetween: 34,
				},
				868: {
					slidesPerView: 2,
                    grid: {
                    rows: 2,
                    },
                    spaceBetween: 34,
                    slidesPerGroup: 2,
				},
				1300: {
					slidesPerView: 3,
                    grid: {
                    rows: 2,
                    },
                    spaceBetween: 50,
                    slidesPerGroup: 3,
				},
			},


            navigation: {
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery',
        },

            pagination: {
              el: ".swiper-pagination-gallery",
              clickable: true,
              type: 'fraction',
            },
          });





    
        
        


        // swiper3
//         let mySwiper2 = function () {
// 	        if (window.innerWidth >= 750) {
// 		var swiper2 = new Swiper('.container-slider3', {

// 			breakpoints: {
// 				750: {
// 					slidesPerView: 2,
// 					spaceBetween: 34,
// 				},
// 				970: {
// 					slidesPerView: 2,
// 					spaceBetween: 50,
// 				},
// 				1300: {
// 					slidesPerView: 3,
// 					slidesPerColumn: 1,
// 					slidesPerGroup: 1,
// 					spaceBetween: 50,
// 				},
// 			},
// 			autoplay: {
// 				delay: 6000,
// 				disableOnInteraction: false,
// 			},

// 			navigation: {
// 				nextEl: '.swiper-button-next-publications',
// 				prevEl: '.swiper-button-prev-publications',
// 			},


// 			pagination: {
// 				el: '.swiper-pagination-publications',
// 				clickable: true,
// 				type: 'fraction',
// 			},

// 		});

// 		swiper2.on('resize', function () {
// 			if (innerWidth < 750) {
// 				swiper2.destroy();
// 			}
// 		});
// 	}
// }

//         window.addEventListener('resize', () => {
//             mySwiper2();
//         })

//         mySwiper2();







        const sliderDesktop2 = document.querySelector('.container-slider3');
        let swiper2;
        const desctopSlider = () => {
          if (window.innerWidth >= 670 && sliderDesktop2.dataset.desktop == 'true') {
            swiper2 = new Swiper(sliderDesktop3, {
              slideClass: ('section-publications__item'),
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10,
              pagination: {
                el: '.swiper-pagination-publications',
                type: 'fraction',
              },
              navigation: {
                nextEl: '.swiper-button-next-publications',
                prevEl: '.swiper-button-prev-publications',
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
                  slidesPerView: 3,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 50,
                }
              }
            })
            sliderDesktop3.dataset.desktop == 'false'
          }
          if (window.innerWidth <= 670) {
            sliderDesktop2.dataset.mobile = 'false';
              if (sliderDesktop2.classList.contains('swiper-container-initialized')) {
                swiper3.destroy();
              }
          }
        }
        desctopSlider();
        window.addEventListener('resize', () => {
          desctopSlider();
        })
      


        // swiper4
        var swiper3 = new Swiper('.container-slider4', {
            slidesPerView: 1,
            spaceBetween: 34,
            loop: false,

            breakpoints: {
                750: {
                    slidesPerView: 2,
                    spaceBetween: 34,
                    observer: true,
                },
                970: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    observer: true,
                },
                1430: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 50,
                    observer: true,
                },
            },

            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: '.swiper-button-next-project',
                prevEl: '.swiper-button-prev-project',
            },
        });




              // events slider

const mobileSlider = document.querySelector('.section-events__content');

let swiper5;

const mobileEventsSlider = () => {
  if (window.innerWidth <= 670 && mobileSlider.dataset.mobile == 'false') {
    swiper5 = new Swiper(mobileSlider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: ('section-event__item'),

      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

      pagination: {
        el: '.swiper-pagination-event',
      },
    });

    mobileSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 670) {
    mobileSlider.dataset.mobile = 'false';

      if (mobileSlider.classList.contains('swiper-container-initialized')) {
        swiper5.destroy();
      }
  }
}

mobileEventsSlider();

window.addEventListener('resize', () => {
  mobileEventsSlider();
});



        

















