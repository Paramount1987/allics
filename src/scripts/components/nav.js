const Nav = {
    init() {
        this.$subList = $('.js-nav-sub-list');
        this.clickHandler();
        this.clickOutside();
    },

    clickHandler() {
        $('.js-nav-link').click(function handler(e) {
            e.preventDefault();
            const targetHref = $(this).attr('href');
            const $target = $(targetHref);
            Nav.$subList.fadeOut();
            $target.fadeToggle();
        });
    },

    clickOutside() {
        $(document).on('click', (e) => {
            const $target = $(e.target);

            if (!$target.hasClass('js-nav-link')) {
                Nav.$subList.fadeOut();
            }
        });
    },
};

export default Nav;
