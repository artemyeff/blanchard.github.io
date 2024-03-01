// scrollTrigger slide start
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('section');

let snap = value => value;

ScrollTrigger.create({
    start: 0,
    end: "max",
    snap: {
        snapTo: (value, self) => snap(value, self.direction),
        duration: {min: 0.2, max: 0.4},
        delay: 0,
    }
});

let panels = gsap.utils.toArray(".container-slide .panel");
 
let panelTween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container-slide",
    start: "top top",
    end: "+=" + (innerWidth * 3),
    markers: true,
    pin: true,
    scrub: 1,
  }
});

let sectionTriggers = sections.map(section => ScrollTrigger.create({
  trigger: section,
  start: "top top",
  refreshPriority: -1
}));



ScrollTrigger.addEventListener("refresh", () => {
  let start = panelTween.scrollTrigger.start,
      end = panelTween.scrollTrigger.end,
      each = (end - start) / (panels.length - 1), 
      max = ScrollTrigger.maxScroll(window),
      sectionPositions = sectionTriggers.map(trigger => trigger.start / max);
  panels.forEach((panel, i) => sectionPositions.push((start + i * each) / max));
  snap = ScrollTrigger.snapDirectional(sectionPositions); 
});

// scrollTrigger slide end

// const list = [
//   `/img/image.png`,
//   `/img/image2.png`,
//   `/img/image3.png`,
//   `/img/image4.png`,
// ]



// document.querySelector('.portfolio-item__view__image').addEventListener('click', (e)=> {
//   const tl = gsap.timeline({});
//   console.log(e.target)
//     list.forEach((el)=> {
//       console.log(el)
//       tl.to(e.target, { attr: { src: el }, duration:1 , delay: 1 })
//     })
// })








const about = gsap.timeline()


gsap.fromTo(".header", {y: -100,opacity: 0},{ y: 0,duration: 1,opacity: 1})
gsap.from(".about__image", {opacity: 0, x: 0,duration: 1, delay: .5, stagger: {amount: 1}})
gsap.fromTo(".about__desc", {x: -100,opacity: 0},{ x: 0,duration: 1,opacity: 1})
gsap.fromTo(".about__title", {x: 100,opacity: 0},{ x: 0,duration: 1,opacity: 1})
gsap.fromTo(".about__subtitle", {x: -100,opacity: 0},{ x: 0,duration: 1,opacity: 1})
gsap.fromTo(".about__text", {x: 100,opacity: 0},{ x: 0,duration: 1,opacity: 1})
gsap.fromTo(".about__buttons", {x: -100,opacity: 0},{ x: 0,duration: 1,opacity: 1})


gsap.utils.toArray('.section-title').forEach(title=> {
  gsap.fromTo(title, {x: -100,duration: 1,opacity: 0},{ x: 0,duration: 1,opacity: 1, delay: .5, scrollTrigger: {trigger: title,scrub: 1,}})
})
gsap.utils.toArray('.section-subtitle').forEach(subtitle=> {
  gsap.fromTo(subtitle, {x: 100,duration: 1,opacity: 0},{ x: 0,duration: 1,opacity: 1, delay: .5, scrollTrigger: {trigger: subtitle,scrub: 1,}})
})
gsap.utils.toArray('.skills__text').forEach(text=> {
  gsap.fromTo(text, {x: -100,duration: 1,opacity: 0},{ x: 0,duration: 1,opacity: 1, delay: .5, scrollTrigger: {trigger: text,scrub: 1,}})
})

gsap.fromTo('.portfolio__subtitle', {x: 100,opacity: 0},{x:0,duration: 1,opacity: 1, scrollTrigger: {trigger: '.portfolio', scrub: 1}})

gsap.utils.toArray('.portfolio__list__item').forEach((item2, index)=> {
  gsap.fromTo(item2, {duration: 1,opacity: 0},{duration: 1,opacity: 1, delay: index * .1, scrollTrigger: {trigger: item2}})
})


gsap.utils.toArray('.skills__list__item').forEach((item, index)=> {
  gsap.fromTo(item, 
    { x: -40, y: -20,duration: 1,opacity: 0},
    { x: 0,y:0,duration: 1,opacity: 1, delay: index * .1, 
      scrollTrigger: {
        trigger: item,}})
})


gsap.utils.toArray('.portfolio-item__content').forEach((item3)=> {
  gsap.fromTo('.portfolio-item__title', {y: -100,opacity: 0},{y:0,duration: 1,opacity: 1,
    scrollTrigger: {trigger: item3,
        start: "left 100%",
        end: "left 20%",
        
        containerAnimation: panelTween,
        markers: true
      }
    })
})

gsap.utils.toArray('.portfolio-item__content').forEach((item4)=> {
  gsap.fromTo('.portfolio-item__text', {x: -50,opacity: 0},{x:0,duration: .8,opacity: 1,
    scrollTrigger: {trigger: item4,
        start: "left 100%",
        end: "left 20%",
        
        containerAnimation: panelTween,
        markers: true
      }
    })
})


gsap.utils.toArray('.portfolio-item__content').forEach((item4)=> {
  gsap.fromTo('.portfolio-item__view__image', {scale: .5,opacity: 0},{scale: 1,duration: .8,opacity: 1,
    scrollTrigger: {trigger: item4,
        start: "left 100%",
        end: "left 20%",
        
        containerAnimation: panelTween,
        markers: true
      }
    })
})




// burger start

const burger = document.querySelector('.burger-btn')
const body = document.querySelector('body')
const burgerClose = document.querySelector('.close.btn-reset')
const navItem = document.querySelectorAll('.nav__item')


var menu = gsap.timeline({paused: true});
menu.fromTo(".menu__top", {y: -70, opacity: 0},{duration: 0.5, y: 0, opacity: 1})
.fromTo('.menu', {backgroundColor: "transparent"},{duration: 0.5,backgroundColor: "#121921"},'<')
.fromTo(".menu__left", { y: 100, opacity: 0},{duration: 0.5, y: 50, opacity: 1})
.fromTo(".menu__right, .social", { y: 100, opacity: 0},{duration: 0.5, y: 50, opacity: 1});

burger.addEventListener('click', ()=> {
  document.querySelector('.menu').classList.add('menu--open')
  menu.play();
  body.classList.add('fixed-scroll')
})


burgerClose.addEventListener('click', ()=> {
  menu.reverse();
  setTimeout(()=> {
    menu.paused()
    document.querySelector('.menu').classList.remove('menu--open')
  }, 1500)
  body.classList.remove('fixed-scroll')
} )

navItem.forEach(el => {
  el.addEventListener('click', ()=> {
    menu.reverse();
    setTimeout(()=> {
      menu.paused()
      document.querySelector('.menu').classList.remove('menu--open')
    }, 1500)
    body.classList.remove('fixed-scroll')
  })
})

// burger end





// navigation start

const navigationLinks = document.querySelectorAll('.nav__list a');

console.log(navigationLinks)

navigationLinks.forEach(link => {
	let id = link.getAttribute("href");
	let active = link.querySelector(".active");


	gsap.fromTo(active, {
		opacity: 0
	}, {
		opacity: 1,
    scrollTrigger:{
      trigger: id,
			start: "top bottom",
			end: "bottom top",
			scrub: true}
	})

  gsap.fromTo(link, {
		opacity: 0.5
	}, {
		opacity: 1,
    scrollTrigger:{
      trigger: id,
			start: "top bottom",
			end: "bottom top",
			scrub: true}
	})
});


// navigation end


// $(document).on("click",".nav__list__item__link, .footer__logo", function (event) {
//   //отменяем стандартную обработку нажатия по ссылке
//   event.preventDefault();
//   //забираем идентификатор бока с атрибута href
//   var id  = $(this).attr('href');
//   TweenLite.to(window, 2, {scrollTo: id});
// });