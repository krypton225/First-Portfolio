export default function swiperTestimonials() {
    let swiperTestimonials = new Swiper(".swiper-testimonials", {
        effect: "coverflow",
        loop: true,
        autoplay: {
            delay: 2600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "3",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        breakpoints: {
            100: {
                slidesPerView: 1,
                spaceBetween: 14,
                resistanceRatio: 0.85
            },
            650: {
                slidesPerView: 2,
                spaceBetween: 5,
                resistanceRatio: 0.85
            },
            1020: {
                slidesPerView: 3,
                spaceBetween: 20,
                resistanceRatio: 0.85
            },
        }
    });
}