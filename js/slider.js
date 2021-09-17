
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
        let mySwiper2 = function () {
	        if (window.innerWidth >= 750) {
		var swiper2 = new Swiper('.container-slider3', {

			breakpoints: {
				750: {
					slidesPerView: 2,
					spaceBetween: 34,
				},
				970: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				1430: {
					slidesPerView: 3,
					slidesPerColumn: 1,
					slidesPerGroup: 1,
					spaceBetween: 50,
				},
			},
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},

			navigation: {
				nextEl: '.swiper-button-next-publications',
				prevEl: '.swiper-button-prev-publications',
			},


			pagination: {
				el: '.swiper-pagination-publications',
				clickable: true,
				type: 'fraction',
			},

		});

		swiper2.on('resize', function () {
			if (innerWidth < 750) {
				swiper2.destroy();
			}
		});
	}
}

        window.addEventListener('resize', () => {
            mySwiper2();
        })

        mySwiper2();



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



















// var swiper;

// function resizeScrenn() {
//     if ($(window).width() >= 1200) {
//         if ($(".container-slider3").length > 0) {
//             swiper = new Swiper('#swiper-container', {
//                 direction: 'vertical', // вертикальный слайдер
//                 slidesPerView: 1,
//                 spaceBetween: 0,
//                 loop: false,
//                 touchRatio: 0,
//                 slidesPerGroup: 1,
//             });
//         }
//     } else {
//         swiper.destroy(); // или swiper.autoplay.stop();
//     }
// }


// resizeScrenn();

// $(window).resize(function () {
//     resizeScrenn();
// });