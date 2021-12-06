// module
import customCursor from "./module/customCursor.js";
import circleLogoAnimation from "./module/CircleLogo.js";
import Marquee from "./module/Marquee.js";
import MouseOverTooltip from "./module/MouseOverTooltip.js";
import textJson from "./data/text.json";
import workJson from "./data/work.json";

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
    const state = document.documentElement.getAttribute("color-theme");
    if (state === "white") {
        document.documentElement.setAttribute("color-theme", "blue");
        convertLang.getJson("ko");
    } else {
        document.documentElement.setAttribute("color-theme", "white");
        convertLang.getJson("en");
    }
}
document.querySelector(".reverse_color").addEventListener("click", reverseColorTheme);

// convert en to ko & ko to en
const convertLang = {
    init: function() {
        convertLang.getTextJson();
        convertLang.getWorkJson();
    },

    getTextJson: function () {
        fetch(textJson)
            .then((response) => response.json())
            .then((textData) => convertLang.dataBox(textData));
    },

    getWorkJson: function () {
        fetch(workJson)
            .then((response) => response.json())
            .then((workData) => convertLang.dataBox(workData));
    },

    dataBox: function(textData, workData) {
        const text = textData;
        const work = workData;
    },

    // 여기서 부터 다시 짜야함 한번에 text랑 video title 전환 및 컬러반전 시키도록 (json 호출은 처음 한번만 하게)
    convert: function (DATA, lang) {
        const data = DATA;
        const textData = data[0];
        const arr = Object.entries(textData);
        let state = lang;

        for (let i = 0; i < arr.length; i++) {
            const target = document.querySelector(`[data-name='${arr[i][0]}']`);
            target.innerHTML = arr[i][1].en;

            if (state == "en") {
                target.innerHTML = arr[i][1].en;
            } else if (state == "ko") {
                target.innerHTML = arr[i][1].ko;
            }
        }
    },
};
convertLang.init();
