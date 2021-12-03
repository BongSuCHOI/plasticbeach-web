// module
import customCursor from "./module/customCursor.js";
import circleLogoAnimation from "./module/CircleLogo.js";
import Marquee from "./module/Marquee.js";
import MouseOverTooltip from "./module/MouseOverTooltip.js";

// css
import commonCSS from "../css/scss/common.scss"
import styleCSS from "../css/scss/style.scss"

// run
window.addEventListener("DOMContentLoaded", customCursor.create);
window.addEventListener("load", Marquee(".marquee", 0.2));
circleLogoAnimation.bindSGV();
MouseOverTooltip();