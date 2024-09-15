var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    },

    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});