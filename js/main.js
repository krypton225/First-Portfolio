// import "../node_modules/@fancyapps/ui/src/Fancybox/Fancybox";

showPicLanding();
showTextLandingPage();
layersSystem();
swiperWorks();
swiperTestimonials();

function showPicLanding() {
    let picLanding = document.getElementById("picLanding");

    setTimeout(() => {
        picLanding.classList.add("show-pic");
    }, 1300);
}

function showTextLandingPage() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
}

function layersSystem() {
    let allLinks = Array.from(document.querySelectorAll(".main-bg .menu li a"));

    // * Get all ID's sections
    let homeSection = document.getElementById("home");
    let aboutSection = document.getElementById("about");
    let worksSection = document.getElementById("works");
    let toolsSection = document.getElementById("tools");
    let testimonialsSection = document.getElementById("testimonials");

    allLinks.forEach((myLink) => {
        myLink.addEventListener("click", () => {

            document.querySelectorAll("section").forEach((sec) => {
                sec.classList.remove("high-index");

                if (sec.getAttribute("id") !== "home") {
                    homeSection.classList.add("add-props");
                }
            });

            if (myLink.getAttribute("id") === "link-home") {
                homeSection.classList.add("high-index");
            } else if (myLink.getAttribute("id") === "link-about") {
                aboutSection.classList.add("high-index");
                aboutSection.appendChild(setTitleOfSectionAtBottom("about"));
                setTitleOfSectionAtBottom("About", aboutSection);
            } else if (myLink.getAttribute("id") === "link-works") {
                worksSection.classList.add("high-index");
                worksSection.appendChild(setTitleOfSectionAtBottom("works"));
                setTitleOfSectionAtBottom("Works", worksSection);
            } else if (myLink.getAttribute("id") === "link-tools") {
                toolsSection.classList.add("high-index");
                toolsSection.appendChild(setTitleOfSectionAtBottom("tools"));
            } else if (myLink.getAttribute("id") === "link-testimonials") {
                testimonialsSection.classList.add("high-index");
                testimonialsSection.appendChild(setTitleOfSectionAtBottom("testimonials"));
            }
        });
    });
}

function swiperWorks() {
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

function swiperTestimonials() {
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

function setTitleOfSectionAtBottom(titleName) {
    let mySpan = document.createElement("span");
    mySpan.classList.add("text-line");

    let myText = document.createTextNode(titleName);
    mySpan.appendChild(myText);

    return mySpan;
}