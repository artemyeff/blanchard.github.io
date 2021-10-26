document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.section-catalog__list-item').forEach(function (tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path

            
            document.querySelectorAll('.section-catalog__tab-conteiner').forEach(function(tabContent) {
                tabContent.classList.remove('is-active')
            })
            document.querySelector(`[data-target="${path}"`).classList.add('is-active')

            $('.accordion').accordion("refresh");

            document.querySelectorAll('.section-catalog__list-item').forEach(function(tabContent) {
                tabContent.classList.remove('is-actives')
            })

            document.querySelector(`[data-path="${path}"`).classList.add('is-actives')
            document.querySelectorAll('.section-catalog__content-left-side').forEach(function(tabContent) {
                tabContent.classList.remove('active')
            })
            document
                .querySelector(`[data-target="${path}"`)
                .querySelector('.section-catalog__content-left-side')
                .classList.add('active')
        })

        $('.accordion').accordion();


    })









    document.querySelectorAll('.section-catalog__slider-content-link').forEach(function (linkBtn){
        linkBtn.addEventListener('click', function(event){
            event.preventDefault();
            const path = event.currentTarget.dataset.path

            
            document.querySelectorAll('.section-catalog__content-left-side').forEach(function(linkContent) {
                linkContent.classList.remove('active')
            })
            document.querySelector(`[data-target="${path}"`).classList.add('active')

            
        })



        linkBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path

            
            document.querySelectorAll('.section-catalog__slider-content-link').forEach(function(linkContent) {
                linkContent.classList.remove('actives')
            })
            event.target.classList.add('actives')
        })

    })



})