var swiper;

function resizeScrenn() {
    if ($(window).width() >= 1200) {
        if ($(".container-slider3").length > 0) {
            swiper = new Swiper('#swiper-container', {
                direction: 'vertical', // вертикальный слайдер
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                touchRatio: 0,
                slidesPerGroup: 1,
            });
        }
    } else {
        swiper.destroy(); // или swiper.autoplay.stop();
    }
}


resizeScrenn();

$(window).resize(function () {
    resizeScrenn();
});