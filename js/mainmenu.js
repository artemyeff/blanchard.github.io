
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__menu-item-button").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__menu-choices-open");
    
    document.querySelectorAll(".header__menu-item-button").forEach(el => {
      if (el != btn) {
        el.classList.remove("is-opens");
      }
    });
    
    document.querySelectorAll(".header__menu-choices-open").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("is-open");
      }
    })
    dropdown.classList.toggle("is-open");
    btn.classList.toggle("is-opens")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__main-menu")) {
    document.querySelectorAll(".header__menu-choices-open").forEach(el => {
        el.classList.remove("is-open");
    })
     document.querySelectorAll(".header__menu-item-button").forEach(el => {
        el.classList.remove("is-opens");
    });
  }
})
})