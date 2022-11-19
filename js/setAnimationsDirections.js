import removeAnimationsAfterClick from "./removeAnimationsAfterClick.js";

export function setAnimationLeftRight(selector) {
    selector.classList.add("animation-left-right");
    removeAnimationsAfterClick(selector);
}

export function setAnimationRightLeft(selector) {
    selector.classList.add("animation-right-left");
    removeAnimationsAfterClick(selector);
}