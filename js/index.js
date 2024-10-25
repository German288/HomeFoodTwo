function sendEmail() {
    
    let params = {
        formName: document.getElementById('formName').value,
        formPhone: document.getElementById('formPhone').value,
        formAdress: document.getElementById('formAdress').value,
        formTelegram: document.getElementById('formTelegram').value,
        formMessage: document.getElementById('formMessage').value,
    }

    emailjs.send("service_xukzsh4","template_bchpw99", params).then(function() {
        console.log('SUCCESS!');
        alert('Замовлення відправленно!');
    }, function() {
        console.log('FAILED...');
        alert('Замовлення не відправленно!');
    });
}

$(function() {
    $('.slider__items').slick({
        // dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg" alt="arrow-right"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            },
        ]
    });
    
    $('.menu__btn, .menu a').on('click', function() {
        $('.header-top__inner').toggleClass('header-top__inner--active');
    });

    $(".menu a, .header-bottom__link, .go-top").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});