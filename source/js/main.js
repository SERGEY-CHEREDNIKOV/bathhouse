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
});