/* eslint-disable no-new */
class SliderWorks {
    constructor(classContainer) {
        this.classContainer = classContainer;
        this.init();
    }

    init() {
        /* global Swiper */
        new Swiper(this.classContainer, {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                750: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                },
                1280: {
                    slidesPerView: 5,
                    slidesPerColumn: 1,
                },
            },
        });
    }
}

export default SliderWorks;
