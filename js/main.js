// * Main variables
let homeTitle = document.querySelector(".home__content__title");
let homeHello = document.querySelector(".home__content__hello");

let aboutImage = document.querySelector(".about__img");
let aboutContent = document.querySelector(".about__content");

let inputNameForm = document.querySelector(".your-name");
let inputEmailForm = document.querySelector(".your-email");

let hireContentText = document.querySelector(".hire__content__text");
let hireImage = document.querySelector(".hire__imgs");

// * Add animations to home page titles after full loading and remove them after 2 seconds.
window.addEventListener("load", () => {
    setAnimationLeftRight(homeTitle);
    setAnimationRightLeft(homeHello);

    removeAnimationsAfterClick(homeTitle);
    removeAnimationsAfterClick(homeHello);
})

showPicLanding();
showTextLandingPage();
layersSystem();
swiperWorks();
swiperTestimonials();
preventSubmitForm();

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
    let contactSection = document.getElementById("contact");
    let hireSection = document.getElementById("hire");

    allLinks.forEach((myLink) => {
        myLink.addEventListener("click", () => {

            document.querySelectorAll("section").forEach((sec) => {
                sec.classList.remove("high-index");

                if (sec.getAttribute("id") !== "home") {
                    homeSection.classList.add("add-props");
                }
            });

            if (myLink.getAttribute("id") === "link-home") {
                addHighIndexWithAppendTitle(homeSection, "");
                setAnimationLeftRight(homeTitle);
                setAnimationRightLeft(homeHello);
            } else if (myLink.getAttribute("id") === "link-about") {
                addHighIndexWithAppendTitle(aboutSection, "about");
                setAnimationRightLeft(aboutImage);
                setAnimationLeftRight(aboutContent);
            } else if (myLink.getAttribute("id") === "link-works") {
                addHighIndexWithAppendTitle(worksSection, "works");
            } else if (myLink.getAttribute("id") === "link-tools") {
                addHighIndexWithAppendTitle(toolsSection, "tools");
            } else if (myLink.getAttribute("id") === "link-testimonials") {
                addHighIndexWithAppendTitle(testimonialsSection, "testimonials");
            } else if (myLink.getAttribute("id") === "link-contact") {
                addHighIndexWithAppendTitle(contactSection, "contact");
                setAnimationRightLeft(inputNameForm);
                setAnimationLeftRight(inputEmailForm);
            } else if (myLink.getAttribute("id") === "link-hire") {
                addHighIndexWithAppendTitle(hireSection, "hire me");
                setAnimationLeftRight(hireContentText);
                setAnimationRightLeft(hireImage);
            }
        });
    });
}

function addHighIndexWithAppendTitle(sectionName, titleSection) {
    sectionName.classList.add("high-index");

    if (sectionName !== "homeSection") {
        sectionName.appendChild(setTitleOfSectionAtBottom(titleSection));
    }
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

function preventSubmitForm() {
    document.getElementById("my-form").addEventListener("submit", (e) => {
        e.preventDefault();
    })
}

function removeAnimationsAfterClick(selector) {
    setTimeout(() => {
        selector.classList.remove("animation-left-right");
        selector.classList.remove("animation-right-left");
    }, 2000);
}

function setAnimationLeftRight(selector) {
    selector.classList.add("animation-left-right");
    removeAnimationsAfterClick(selector);
}

function setAnimationRightLeft(selector) {
    selector.classList.add("animation-right-left");
    removeAnimationsAfterClick(selector);
}