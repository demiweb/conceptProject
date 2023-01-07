//mouse hidden bg
let bgHidden = document.querySelector('.hidden-bg .img');

function ifHiddenBg() {
    if (bgHidden) {
        function update(e) {
            let rect = e.target.getBoundingClientRect();
            var x = e.clientX - rect.left || e.touches[0].clientX - rect.left;
            var y = e.clientY - rect.top || e.touches[0].clientY - rect.top;

            bgHidden.style.setProperty('--cursorX', x + 'px');
            bgHidden.style.setProperty('--cursorY', y + 'px');
        }

        bgHidden.addEventListener('mousemove', update)
        bgHidden.addEventListener('touchmove', update);
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
    // console.log(hei);

}

headerStart();

//header scroll


//odometer
let trueLessInterval = [false, false, false];

function isElementInViewport(el, k) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function counter(id, start, end, duration, k) {
    let obj = document.getElementById(`${id}`),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
                trueLessInterval[k] = true;
            }
        }, step);
}


$(window).scroll(function () {

    let elem = document.querySelectorAll('.odometer');

    elem.forEach((el, k) => {
        if (trueLessInterval[k] === false) {
            let data = el.dataset.val;

            if (isElementInViewport(el, k)) {
                trueLessInterval[k] = 3;
                counter(el.id, 0, data, 1500, k);
            }
        }
    });


});

//odometer

//go next click

let btnNext = [...document.querySelectorAll('.go-down')];

function clickNext() {
    if (btnNext.length) {
        btnNext.forEach((btn) => {


            btn.addEventListener('click', () => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('.about-us').offset().top - $('.header').height()
                }, 400);
            })
        })
    }
}

clickNext();

//go next click

let btnMobMoreText = [...document.querySelectorAll('.about-us__cont .text')];

function openMobTextMore() {
    if (btnMobMoreText.length) {
        btnMobMoreText.forEach((btn) => {
            let a = btn.querySelector('a');

            if (window.innerWidth < 768) {
                a.addEventListener('click', () => {

                })
            }
        })
    }
}
// openMobTextMore();

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
                autoplay: {
                    delay: 3000,
                },
                spaceBetween: 6,
                breakpoints: {

                    767: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                        autoplay: false,
                    }
                }

            });
        })
    }
}

clientsStartSlider();

//swipers


//single infos

let infos = [...document.querySelectorAll('.our-infos__single')];

function infosControl() {
    if (infos.length) {
        infos.forEach((inf, k) => {
            let btn = inf.querySelector('.btn-infos');
            btn.addEventListener('click', () => {
                infos.forEach((inf2) => {
                    inf2.classList.remove('open');
                });
                inf.classList.add('open');
            })
        })
    }
}



infosControl();
//single infos

let btnTxt = [...document.querySelectorAll('.btn-txt')];

function openTxt() {
    if (btnTxt.length) {
        btnTxt.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.txt-block').classList.toggle('open');
            })
        })
    }
}
openTxt();