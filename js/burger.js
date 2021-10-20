window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#burgerMenu').classList.add('is-active')
    })
})


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burgerClose').addEventListener('click', function () {
        document.querySelector('#burgerMenu').classList.remove('is-active')
    })
})

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#searchBtn').addEventListener('click', function () {
        document.querySelector('#searchForm').classList.add('is-active')    
    })
})


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#searchClose').addEventListener('click', function () {
        document.querySelector('#searchForm').classList.remove('is-active')    
    })
})


document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".container-header__first")) {
      document.querySelectorAll(".header__form-search-mobile").forEach(el => {
          el.classList.remove("is-active");
      })
    }
  })



//  publications

const checkboxHeading = document.querySelector('.section-publications__checkbox-heading')
const checkboxLabels = document.querySelectorAll('.section-publications__label')

window.addEventListener('DOMContentLoaded', function () {
    checkboxHeading.addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('is-shown')
        checkboxLabels.forEach(el => {
            if (el.querySelector('.input_checkbox').checked) {
                el.classList.add('is-open')
            }
            else {
                el.classList.toggle("is-open");
            }
        
        })   
    })
})




window.addEventListener('DOMContentLoaded', function () {
    checkboxLabels.forEach(el => {
        el.addEventListener('click', function (event) {
            const label =  event.currentTarget
            if(!checkboxHeading.classList.contains('is-shown') && label.classList.contains('is-open')) {
                label.classList.remove('is-open')
            }

            if (label.querySelector('.input_checkbox').checked) {
                label.classList.add('is-active')
            } else {
                label.classList.remove('is-active')
            }
        })
    })
})






