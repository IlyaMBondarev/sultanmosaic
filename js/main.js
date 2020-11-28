
document.querySelector('.wrapper').classList.add('loaded');


//карусель-слайдер на странице услуги

$(document).ready(function() {
    let owl = $('.owl-carousel');
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

        $('.carousel-slider__arrow-right').click(function () {
            owl.trigger('next.owl.carousel');
        });

        $('.carousel-slider__arrow-left').click(function () {
            owl.trigger('prev.owl.carousel', [300]);
        });
    }
});