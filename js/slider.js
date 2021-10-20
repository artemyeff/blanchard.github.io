
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








          const sliderDesktop3 = document.querySelector('.container-slider3');

          let swiper4;
          const breakpoint = window.matchMedia( '(max-width: 670px)' );
          function swiperCall() {
            swiper4 = new Swiper(sliderDesktop3, {
              slideClass: ('section-publications__item'),
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 34,
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
          }
  
          function breakpointSwiper4() {
            if ( breakpoint.matches === true ) {
            if ( swiper4 !== undefined ) swiper4.destroy( true, true );
  
  
            // or/and do nothing
  
            return;
  
        
  
              // else if a small viewport and single column layout needed
  
              } else if ( breakpoint.matches === false ) {
  
        
  
                // fire small viewport version of swiper
  
                return swiperCall();
  
        
  
              }
  
          }
  
  
  
          breakpoint.addListener(breakpointSwiper4);
  
          breakpointSwiper4()


    
        
        


 


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
        clickable: true,
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



        

















