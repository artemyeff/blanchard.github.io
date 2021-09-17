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

        window.onclick = function(event) {
            if (!event.target.matches('.header__menu-item-button')) {
              var dropdowns = document.getElementsByClassName("header__menu-choices-open");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('is-open')) {
                  openDropdown.classList.remove('is-open');
                }
              }
            }
          }
    })

   
})