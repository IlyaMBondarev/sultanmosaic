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
                    650: {
                        items: 2,
                    },
                    1321: {
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
                touchDrag: false,
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