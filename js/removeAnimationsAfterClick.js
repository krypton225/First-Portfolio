export default function removeAnimationsAfterClick(selector) {
    setTimeout(() => {
        selector.classList.remove("animation-left-right");
        selector.classList.remove("animation-right-left");
    }, 4000);
}
