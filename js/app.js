window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.section-working__tabs-btn').forEach(function(element) {
      element.addEventListener('click', function (event) {
          console.log(event)
          event.target.classList.toggle('is-active')
      })

  })

  // document.querySelectorAll('.section-catalog__slider-head').forEach(function(parent) {
  //   parent.addEventListener('click', () => {
  //     const icon = parent.querySelector('.section-catalog__spoiler-heading-icon')
  //     document.querySelectorAll('.section-catalog__spoiler-heading-icon').forEach(function(element) {
  //       if (icon != element) {
  //         element.classList.remove('is-active')
  //       }

  //     })
  //     parent.querySelector('.section-catalog__spoiler-heading-icon').classList.toggle('is-active')
  //   })
  // })

//   document.querySelectorAll('.section-catalog__slider-head').forEach(function(parent) {
//     parent.addEventListener('click', () => {
//       const icon = parent.querySelector('.section-catalog__spoiler-heading-image')
//       document.querySelectorAll('.section-catalog__spoiler-heading-image').forEach(function(element) {
//         if (icon != element) {
//           element.classList.remove('is-activ')
//         }

//       })
//       parent.querySelector('.section-catalog__spoiler-heading-image').classList.toggle('is-activ')
//     })
//   })
})
