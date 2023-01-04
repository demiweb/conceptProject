//mouse hidden bg
let bgHidden = document.querySelector('.hidden-bg .img');
function ifHiddenBg() {
    if (bgHidden) {
        function update(e){
            let rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left || e.touches[0].clientX  - rect.left;
            var y = e.clientY  - rect.top || e.touches[0].clientY  - rect.top;

            bgHidden.style.setProperty('--cursorX', x + 'px');
            bgHidden.style.setProperty('--cursorY', y + 'px');
        }

        bgHidden.addEventListener('mousemove',update)
        bgHidden.addEventListener('touchmove',update);
        bgHidden.addEventListener('mouseout', () => {
            bgHidden.style.setProperty('--cursorX', '-50vw');
            bgHidden.style.setProperty('--cursorY', '-50vh');
        })
    }
}
ifHiddenBg();


//header scroll

$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 52);
});

function headerStart() {
    let headr = document.querySelector('.header');
    let hei = headr.offsetHeight;
    console.log(hei);
    if (window.innerWidth < 768) {
        let hm = document.querySelector('.header-menu');
        hm.style.height = `calc((100vh - ${hei}px) + 4.1767vw)`;
    }
}
headerStart();

//header scroll

//go next click

let btnNext = [...document.querySelectorAll('.go-next-btn')];

function clickNext() {
    if (btnNext.length) {
        btnNext.forEach((btn) => {
            let next = btn.nextElementSibling;

            btn.addEventListener('click', () => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(next).offset().top - $('.header').height()
                }, 400);
            })
        })
    }
}

clickNext();

//go next click


var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();









//mouse follows


// var backdrop = document.querySelector('.backdrop');

let burger = [...document.querySelectorAll('.burger')];
let centerMenu = [...document.querySelectorAll('.header-menu')][0];

function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                centerMenu.classList.toggle('out');
                // backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


//swipers

let clientsSlider = [...document.querySelectorAll('.our-clients__wrap')];

function clientsStartSlider() {
    if (!clientsSlider.length) {

    } else {
        clientsSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.our-clients__slider');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 6,
                breakpoints: {

                    767: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    }
                }

            });
        })
    }
}

clientsStartSlider();

//swipers
