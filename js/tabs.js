document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.section-catalog__item-tabs').forEach(function (tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)
            
            document.querySelectorAll('.section-catalog__tab-conteiner').forEach(function(tabContent) {
                tabContent.classList.remove('is-active')
            })
            document.querySelector(`[data-target="${path}"`).classList.add('is-active')

            $('.accordion').accordion("refresh");
        })

        $('.accordion').accordion();


        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)
            
            document.querySelectorAll('.section-catalog__item-tabs').forEach(function(tabContent) {
                tabContent.classList.remove('is-actives')
            })
            document.querySelector(`[data-path="${path}"`).classList.add('is-actives')
        })

    })

})