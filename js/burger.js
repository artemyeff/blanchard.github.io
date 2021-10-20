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



//  event

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.section-publications__checkbox-heading').addEventListener('click', function () {
        document.querySelector('.section-publications__checkbox').classList.toggle('is-open')    
    })
})


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.section-publications__checkbox-heading').addEventListener('click', function () {
        document.querySelector('.section-publications__checkbox-heading').classList.toggle('is-opens')    
    })
})


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.section-publications__checkbox-heading').addEventListener('click', function () {
        document.querySelectorAll('.section-publications__label').classList.add('is-open')    
    })
})



