document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.header__menu-item-button').forEach(function (tabsBtn){
        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)
            
            document.querySelectorAll('.header__menu-choices-open').forEach(function(tabContent) {
                tabContent.classList.remove('is-open')
            })
            document.querySelector(`[data-target="${path}"`).classList.add('is-open')

            
        })



        tabsBtn.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)
            
            document.querySelectorAll('.header__menu-item-button').forEach(function(tabContent) {
                tabContent.classList.remove('is-opens')
            })
            document.querySelector(`[data-path="${path}"`).classList.add('is-opens')
        })

    })

})