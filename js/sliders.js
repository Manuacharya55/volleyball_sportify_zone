
var swiper = new Swiper(".recent-matches-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    //   loop:true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        765: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});



var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});
