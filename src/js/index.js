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
    } else {
        document.documentElement.setAttribute("color-theme", "white");
    }
}
document.querySelector(".reverse_color").addEventListener("click", reverseColorTheme);

// convert en to ko & ko to en
const convertLang = {
    getJson: function () {
        fetch(textJson)
            .then((response) => response.json())
            .then((textData) => this.convert(textData));
    },
    // 이런식으로 for 함수화 시켜서 옵저버 if 마다 파라미터 전달해서 실행시키면 더 깔끔해질거같음
    // 아 이러면 안됨 그냥 함수명() 이렇게 해서 실행시키면 json 데이터가 파라미터로 안들어와서 에러남
    // asd: function() {
    //     for(let i=0; i < 10; i++) {
    //         console.log(i)
    //     }
    // },

    convert: function (data) {
        const $data = data;
        const textData = $data[0];
        const arr = Object.entries(textData);
        const target = document.documentElement;

        let observer = new MutationObserver(function (mutations) {
            let theme = target.getAttribute("color-theme");
            if (theme == "white") {
                // convertLang.asd();
                for (let i = 0; i < arr.length; i++) {
                    const target = document.querySelector(`[data-name='${arr[i][0]}']`);
                    target.innerHTML = arr[i][1].en;
                }
            } else {
                for (let i = 0; i < arr.length; i++) {
                    const target = document.querySelector(`[data-name='${arr[i][0]}']`);
                    target.innerHTML = arr[i][1].ko;
                }
            }
            // observer.disconnect();
        });
        observer.observe(target, { attributes: true });

        for (let i = 0; i < arr.length; i++) {
            const target = document.querySelector(`[data-name='${arr[i][0]}']`);
            target.innerHTML = arr[i][1].en;
        }
    },
};
convertLang.getJson();
