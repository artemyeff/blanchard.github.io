document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".section-publications__checkbox-heading").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".section-publications__label");
      
      document.querySelectorAll(".section-publications__checkbox-heading").forEach(el => {
        if (el != btn) {
          el.classList.remove("is-opens");
        }
      });
      
      document.querySelectorAll(".section-publications__label").forEach(el => {
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
      document.querySelectorAll(".section-publications__label").forEach(el => {
          el.classList.remove("is-open");
      })
       document.querySelectorAll(".section-publications__checkbox-heading").forEach(el => {
          el.classList.remove("is-opens");
      });
    }
  })
  })