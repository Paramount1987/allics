const Nav = {
    init() {
        this.$body = $('body');
        this.$subList = $('.js-nav-sub-list');
        this.$Nav = $('.js-nav');
        this.$btnNav = $('.js-btn-nav');

        this.clickHandler();
        this.clickOutside();
        this.btnClickHandler();
    },

    clickHandler() {
        $('.js-nav-link').click(function handler(e) {
            e.preventDefault();
            const currentId = $(this).attr('href');
            const $target = $(currentId);

            Nav.$subList.each(function eachNav() {
                const id = $(this).attr('id');

                if (currentId !== `#${id}`) {
                    if (window.matchMedia('(min-width: 1280px)').matches) {
                        $(this).fadeOut();
                    } else {
                        $(this).slideUp();
                    }
                }
            });

            if (window.matchMedia('(min-width: 1280px)').matches) {
                $target.fadeToggle();
            } else {
                $target.slideToggle();
            }
        });
    },

    clickOutside() {
        $(document).on('click', (e) => {
            const $target = $(e.target);

            if (!$target.hasClass('js-nav-link')) {
                if (window.matchMedia('(min-width: 1280px)').matches) {
                    Nav.$subList.fadeOut();
                } else {
                    Nav.$subList.slideUp();
                }
            }
        });
    },

    btnClickHandler() {
        Nav.$btnNav.click(() => {
            Nav.$body.toggleClass('nav-open');
            Nav.$Nav.fadeToggle();
            Nav.$btnNav.toggleClass('active');
        });
    },
};

export default Nav;
