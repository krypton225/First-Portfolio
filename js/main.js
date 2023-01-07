// * Import Bootstrap bundle js file.
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Loader from "./Loader.js";

import "../scss/main.scss";

import {
    homeTitle, homeHello, aboutImage, aboutContent,
    inputNameForm, inputEmailForm, hireContentText, hireImage,
    homeSection, aboutSection, worksSection, toolsSection,
    testimonialsSection, contactSection, hireSection
} from "./constants.js";

import showPicLanding from "./showPicLanding.js";

import preventSubmitForm from "./preventSubmitForm.js";

import addHighIndexWithAppendTitle from "./addHighIndexWithAppendTitle.js";

import swiperWorks from "./swiperWorks.js";

import swiperTestimonials from "./swiperTestimonials.js";

import removeAnimationsAfterClick from "./removeAnimationsAfterClick.js";

import { setAnimationLeftRight, setAnimationRightLeft } from "./setAnimationsDirections.js";

import setNavbarItems from "./data/navItems.js";

Loader.run();

setNavbarItems();

showPicLanding();

layersSystem();

swiperWorks();

swiperTestimonials();

preventSubmitForm();

function layersSystem() {
    let allLinks = Array.from(document.querySelectorAll(".main-bg .menu li a"));

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