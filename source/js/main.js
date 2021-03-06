window.addEventListener('load', function () {

    "use strict";

    // let btnMenu = document.querySelector('.menu-btn');

    // btnMenu.addEventListener('click', function() {
    //     btnMenu.classList.toggle('menu-btn--open-close')
    // });


    function burgerMenu(selector) {
        let menu = document.querySelector(selector);
        let btnMenu = document.querySelector('.menu-btn');
        let links = document.querySelectorAll('.menu__navigation-link');
        let menuInner = document.querySelector('.menu__inner');

        btnMenu.addEventListener('click', function (e) {
            e.preventDefault();
            toggleMenu();
        });

        // links.addEventListener('click', function () {
        //     toggleMenu();
        // });
        links.forEach(item => {
            item.addEventListener('click', function () {
                toggleMenu()
            })
        });

        // menuInner.addEventListener('click', function (e) {
        //     if (e.target === menuInner) {
        //         console.log(e.target);
        //         toggleMenu();
        //     }


        // });
        menu.addEventListener('click', function () {
            // if (e.target === menu) {
            //     console.log(e.target);
            //     toggleMenu();
            // }

            toggleMenu();
        });

        function toggleMenu() {
            menu.classList.toggle('menu--active');
            btnMenu.classList.toggle('menu-btn--open-close');
            if (menu.classList.contains('menu--active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        }
    }

    burgerMenu('.menu');


    // ---------- slider ------------    


    $('.about-us__slider').slick({
        prevArrow: '<button class="about-us__slider-btn  about-us__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="about-us__slider-btn  about-us__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
    });



    $('.slider-tab').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slider-tab__slider-btn  slider-tab__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="slider-tab__slider-btn  slider-tab__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
        responsive: [
            {
                breakpoint: 881,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });



    $('.stage__slider').slick({
        vertical: true,
        slidesToShow: 1,
        infinite: false,
        verticalSwiping: true,
        prevArrow: '<button class="stage__slider-btn  stage__slider-btnprev"><img src="images/arrow-slider-top.svg" alt="стрелка вверх"></button>',
        nextArrow: '<button class="stage__slider-btn  stage__slider-btnnext"><img src="images/arrow-slider-bottom.svg" alt="стрелка вниз"></button>',
    });
    $(document).ready(function () {
        let widthOne = window.innerWidth;

        if (widthOne <= 660) {
            $('.stage__slider').slick('unslick');
        } else {
            $('.stage__slider').not('.slick-initialized').slick({
                vertical: true,
                slidesToShow: 1,
                infinite: false,
                verticalSwiping: true,
                prevArrow: '<button class="stage__slider-btn  stage__slider-btnprev"><img src="images/arrow-slider-top.svg" alt="стрелка вверх"></button>',
                nextArrow: '<button class="stage__slider-btn  stage__slider-btnnext"><img src="images/arrow-slider-bottom.svg" alt="стрелка вниз"></button>',
            });
        }
    });
    $(window).on("load resize", function () {
        let width = window.innerWidth;

        if (width <= 660) {
            $('.stage__slider').slick('unslick');
        } else {
            $('.stage__slider').not('.slick-initialized').slick({
                vertical: true,
                slidesToShow: 1,
                infinite: false,
                verticalSwiping: true,
                prevArrow: '<button class="stage__slider-btn  stage__slider-btnprev"><img src="images/arrow-slider-top.svg" alt="стрелка вверх"></button>',
                nextArrow: '<button class="stage__slider-btn  stage__slider-btnnext"><img src="images/arrow-slider-bottom.svg" alt="стрелка вниз"></button>',
            });
        }
    });
    $('.stage__slider').on('afterChange', function (event, slick, currentSlide) {
        $(".stage__slider-number--active").text(currentSlide + 1);
    });



    $('.photos__slider').slick({
        appendArrows: $('.photos__slider-box'),
        prevArrow: '<button class="photos__slider-btn  photos__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="photos__slider-btn  photos__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
    });
    $('.photos__slider').on('afterChange', function (event, slick, currentSlide) {
        $(".photos__slider-number--active").text(currentSlide + 1);
    });



    $('.facts__slider').slick({
        appendArrows: $('.facts__slider-box'),
        prevArrow: '<button class="facts__slider-btn  facts__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="facts__slider-btn  facts__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
    });



    $('.services__slider').slick({
        appendArrows: $('.services__slider-box'),
        prevArrow: '<button class="services__slider-btn  services__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="services__slider-btn  services__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    adaptiveHeight: true,
                }
            },
            {
                breakpoint: 778,
                settings: {
                    adaptiveHeight: false,
                }
            },
        ],
    });
    $('.services__slider').on('afterChange', function (event, slick, currentSlide) {
        $(".services__slider-number--active").text(currentSlide + 1);
    });



    $('.benefits__slider').slick({
        slidesToShow: 1,
        appendArrows: $('.benefits__slider-box'),
        prevArrow: '<button class="benefits__slider-btn  benefits__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="benefits__slider-btn  benefits__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
    });
    $(document).ready(function () {
        let widthTwo = window.innerWidth;

        if (widthTwo >= 660) {
            $('.benefits__slider').slick('unslick');
        } else {
            $('.benefits__slider').not('.slick-initialized').slick({
                slidesToShow: 1,
                appendArrows: $('.benefits__slider-box'),
                prevArrow: '<button class="benefits__slider-btn  benefits__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
                nextArrow: '<button class="benefits__slider-btn  benefits__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
            });
        }
    });
    $(window).on("load resize", function () {
        let widthTwo = window.innerWidth;

        if (widthTwo >= 660) {
            $('.benefits__slider').slick('unslick');
        } else {
            $('.benefits__slider').not('.slick-initialized').slick({
                slidesToShow: 1,
                appendArrows: $('.benefits__slider-box'),
                prevArrow: '<button class="benefits__slider-btn  benefits__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
                nextArrow: '<button class="benefits__slider-btn  benefits__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
            });
        }
    });
    $('.benefits__slider').on('afterChange', function (event, slick, currentSlide) {
        $(".benefits__slider-number--active").text(currentSlide + 1);
    });



    $('.testimonials__slider').slick({
        appendArrows: $('.testimonials__slider-box'),
        prevArrow: '<button class="testimonials__slider-btn  testimonials__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="testimonials__slider-btn  testimonials__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
    });
    $('.testimonials__slider').on('afterChange', function (event, slick, currentSlide) {
        $(".testimonials__slider-number--active").text(currentSlide + 1);
    });
    // ---------- tabs ------------   


    const toSwitchTabs = (triggerBtn, content, activeBtn, activeContent) => {
        const tabTrigger = document.querySelectorAll(triggerBtn);
        const tabContent = document.querySelectorAll(content);

        tabTrigger.forEach((item) => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const id = e.target.getAttribute('href').replace('#', '');

                tabTrigger.forEach((child) => child.classList.remove(activeBtn));
                tabContent.forEach((child) => child.classList.remove(activeContent));

                item.classList.add(activeBtn);
                document.getElementById(id).classList.add(activeContent);
            });
        });
    };

    toSwitchTabs('.tabs__triggers-item', '.tabs__content-item', 'tabs__triggers-item--active', 'tabs__content-item--active');


    // ---------- form ------------


    let selector = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(selector);

    const validateForms = (selector, rules, successModal) => {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function (form) {
                let formData = new FormData(form);

                let xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.readyState === 200) {
                            console.log('Отправлено');
                        }
                    }
                }

                xhr.open('POST', 'mail.php', true);
                xhr.send(formData);

                form.reset();
            },
            messages: {
                name: '*Введите имя',
                tel: '*Введите номер телефона',
            },
        });
    }

    validateForms('form', { tel: { required: true }, name: { required: true } });


    // ---------- accordion ------------


    const toAccordion = (triggersSelector, itemsSelector) => {
        const btns = document.querySelectorAll(triggersSelector);
        const blocks = document.querySelectorAll(itemsSelector);

        blocks.forEach(block => {
            block.classList.add('accordion-down')
        });

        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                if (!this.classList.contains('accordion__item--active')) {
                    btns.forEach(btn => {
                        btn.classList.remove('accordion__item--active');
                    });
                    this.classList.add('accordion__item--active');
                }
            });
        });
    };

    toAccordion('.accordion__title', '.accordion__text');
});