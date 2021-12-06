// module
import customCursor from "./module/customCursor.js";
import circleLogoAnimation from "./module/CircleLogo.js";
import Marquee from "./module/Marquee.js";
import MouseOverTooltip from "./module/MouseOverTooltip.js";

// css
import commonCSS from "../css/scss/common.scss";
import styleCSS from "../css/scss/style.scss";
import workListCSS from "../css/scss/workList.scss";

// run
window.addEventListener("DOMContentLoaded", customCursor.create);
window.addEventListener("load", Marquee(".marquee", 0.2));
circleLogoAnimation.bindSGV();
MouseOverTooltip();

// custom input[type="file"](file-name bind)
const bindFileInput = (function () {
    const elem = document.querySelector("#file");
    const bindTarget = document.querySelector(".file_name");

    elem.addEventListener("change", function () {
        let value = this.value;
        bindTarget.value = value;
    });
})();

// reverse color theme
function reverseColorTheme() {
    let state = document.documentElement.getAttribute('color-theme');
    if (state === 'white') {
        document.documentElement.setAttribute('color-theme', 'blue');
    } else {
        document.documentElement.setAttribute('color-theme', 'white');
    }
}
document.querySelector('.reverse_color').addEventListener('click', reverseColorTheme);