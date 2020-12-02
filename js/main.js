
document.querySelector('.wrapper').classList.add('loaded');

//call back

let popupCallbackBackground = document.querySelector('.popup-callback-bg');
let popupCallbackOpenBtns = document.querySelectorAll('.popup-callback-open-btn');
let popupCallback = popupCallbackBackground.querySelector('.popup-callback');
let popupCallbackCloseBtn = popupCallbackBackground.querySelector('.popup-callback__close');

if (popupCallbackBackground) {

    popupCallbackOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupCallbackBackground.classList.add('popup-callback-bg-visible');
        });
    })

    popupCallbackBackground.addEventListener('click', (event) => {
        if (event.target === popupCallbackBackground) {
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });

    popupCallbackCloseBtn.addEventListener('click', () => {
        popupCallbackBackground.classList.remove('popup-callback-bg-visible');
    });
}
//estimate

let popupEstimateBackground = document.querySelector('.popup-callback-bg-estimate');
let popupEstimateOpenBtns = document.querySelectorAll('.popup-callback-estimate-open-btn');
let popupEstimate = popupEstimateBackground.querySelector('.popup-callback');
let popupEstimateCloseBtn = popupEstimateBackground.querySelector('.popup-callback__close');

if (popupEstimateBackground) {

    popupEstimateOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupEstimateBackground.classList.add('popup-callback-bg-visible');
        });
    })

    popupEstimateBackground.addEventListener('click', (event) => {
        if (event.target === popupEstimateBackground) {
            popupEstimateBackground.classList.remove('popup-callback-bg-visible');
        }
    });

    popupEstimateCloseBtn.addEventListener('click', () => {
        popupEstimateBackground.classList.remove('popup-callback-bg-visible');
    });
}

//project

let popupProjectBackground = document.querySelector('.popup-project-bg');
let popupProjectOpenBtns = document.querySelectorAll('.popup-project-open-btn');
let popupProject = popupProjectBackground.querySelector('.popup-project');
let popupProjectCloseBtn = popupProjectBackground.querySelector('.popup-project__close');

if (popupProjectBackground) {

    popupProjectOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupProjectBackground.classList.add('popup-project-bg-visible');
        });
    })

    popupProjectBackground.addEventListener('click', (event) => {
        if (event.target === popupProjectBackground) {
            popupProjectBackground.classList.remove('popup-project-bg-visible');
        }
    });

    popupProjectCloseBtn.addEventListener('click', () => {
        popupProjectBackground.classList.remove('popup-project-bg-visible');
    });
}

// validation

const popupCallbackForm = document.getElementById('popupCallbackForm');
const popupEstimateForm = document.getElementById('popupEstimateForm');
const popupProjectForm = document.getElementById('popupProjectForm');
popupCallbackForm.addEventListener('submit', event => {
    event.preventDefault();
    formSend(popupCallbackForm);
});
popupEstimateForm.addEventListener('submit', event => {
    event.preventDefault();
    formSend(popupEstimateForm);
});
popupProjectForm.addEventListener('submit', event => {
    event.preventDefault();
    formSend(popupProjectForm);
});

async function formSend(form) {
    let error = formValidate(form);

    if (error === 0) {

    }
}

function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        input.classList.remove('_error');

        if (input.classList.contains('_phone')) {
            if (input.value.length < 18) {
                input.classList.add('_error');
                error++;
            }
        } else {
            if (input.value.length < 3 || input.value.length > 32) {
                input.classList.add('_error');
                error++;
            }
        }
    }
    return error;
}

//phone mask

function mask(event) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type === "blur") {
        if (this.value.length === 2) this.value = ""
    }
}

let phones = document.querySelectorAll("._phone");
phones.forEach(phone => phone.addEventListener("input", mask, false));
phones.forEach(phone => phone.addEventListener("focus", mask, false));
phones.forEach(phone => phone.addEventListener("blur", mask, false));
//карусель-слайдер на странице услуги

$(document).ready(function() {
    if ($('.portfolio-items').length) {
        let owl = $('.portfolio-items .owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                items: 3,
                margin: 20,
                mouseDrag: false,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    630: {
                        items: 2,
                    },
                    950: {
                        items: 3,
                    },
                }
            });

            $('.portfolio-items-carousel-slider__arrow-right').click(function () {
                owl.trigger('next.owl.carousel');
            });

            $('.portfolio-items-carousel-slider__arrow-left').click(function () {
                owl.trigger('prev.owl.carousel', [300]);
            });
        }
    }
    if ($('.projects').length) {
        let owl = $('.projects .owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                items: 1,
                mouseDrag: false,
                nav: false,
                dots: false,
            });
            $('.projects-carousel-slider__arrow-right').click(function () {
                owl.trigger('next.owl.carousel');
            });
            $('.projects-carousel-slider__arrow-left').click(function () {
                owl.trigger('prev.owl.carousel', [300]);
            });
        }
    }

    if ($('.popup-project').length) {
        let owl = $('.popup-project .owl-carousel');
        if (owl.length) {
            owl.owlCarousel({
                items: 1,
                mouseDrag: false,
                nav: false,
                dots: false,
            });
            $('.popup-project-carousel-slider__arrow-right').click(function () {
                owl.trigger('next.owl.carousel');
            });
            $('.popup-project-carousel-slider__arrow-left').click(function () {
                owl.trigger('prev.owl.carousel', [300]);
            });
        }
    }
});