// select

const element = document.querySelector('#filter');
const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: true,
    placeholderValue: null,
});  


// accordion

$(function() {
  $( "#accordion1" ).accordion({
    collapsible: true,
    active: 0,

  } );
});
 $(function() {
  $( "#accordion2" ).accordion({
    collapsible: true,
    active: 0,

  } );
});
$(function() {
  $( "#accordion3" ).accordion({
    collapsible: true,
    active: 0,

  } );
});
$(function() {
  $( "#accordion4" ).accordion({
    collapsible: true,
    active: 0,

  } );
});
 $(function() {
  $( "#accordion5" ).accordion({
    collapsible: true,
    active: 0,

  } );
});

$(function() {
  $( "#accordion6" ).accordion({
    collapsible: true,
    active: 0,

  } );
}); 


// tooltip

tippy('#marker1', {
  content: 'Пример современных тенденций - современная методология разработки',
});

tippy('#marker2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});

tippy('#marker3', {
  content: 'В стремлении повысить качество',
});


// event btn

jQuery(document).ready(function($){
  $(".section-events__btn").click(function(e){
    $(".section-event__item:hidden").slice(0,3).fadeIn();
    if ($(".section-event__item:hidden").length < 1) $(this).fadeOut();
  })
})

// form-mask
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);
new JustValidate('.section-contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 3,
            maxLength: 10
        },

        tel: {
            required:true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
    messages: {
        name: {
            minLength: 'Минимальная длина поля 3 символа',
            required: 'Поле обязательно для заполнения!'
        },
        tel: {
          required: 'Поле обязательно для заполнения!'  
        } 
        



        },
        

        submitHandler: function (form, values, ajax) {

            console.log('tel')
        },

});


// maps

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("myMap1", {
        center: [55.75765670291689,37.60009910182183],
        zoom: 15
    });
    var myPlacemark = new ymaps.Placemark([55.75765670291689,37.60009910182183], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/image/contacts/yamap.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlacemark);
}

window.onload = () => {
  if(window.screen.width <= 670) {
    document.getElementById('catalog-link').setAttribute('href', '#mobile-catalog-link')
  } 
}

window.addEventListener('resize', () => {
  if(window.screen.width <= 670) {
    document.getElementById('catalog-link').setAttribute('href', '#mobile-catalog-link')
  } else {
    document.getElementById('catalog-link').setAttribute('href', '#catalog')
  }
})
