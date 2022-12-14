import { setAnimationLeftRight, setAnimationRightLeft } from "./setAnimationsDirections.js";

import { homeTitle, homeHello } from "./constants.js";

const Loader = (function () {
    function open() {
        document.onreadystatechange = function () {
            const state = document.readyState;

            if (state === 'interactive') {
                document.getElementById('main-bg').style.visibility = "hidden";
            } else if (state === 'complete') {
                setTimeout(function () {
                    document.getElementById('load').style.visibility = "hidden";
                    document.getElementById('main-bg').style.visibility = "visible";
                    setAnimationLeftRight(homeTitle);
                    setAnimationRightLeft(homeHello);
                }, 1300);
            }
        }
    }

    return { run: open }
})();

export default Loader;