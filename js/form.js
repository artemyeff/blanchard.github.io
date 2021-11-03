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
            let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
        },

});

