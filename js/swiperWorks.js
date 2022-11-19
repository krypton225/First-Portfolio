export default function swiperWorks() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        allowTouchMove: false,
        loop: true,
        autoplay: {
            delay: 4200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        nextButton: '#js-prev1',
        prevButton: '#js-next1',
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        }
    });
}