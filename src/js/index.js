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
import contactCSS from "../css/scss/contact.scss";
import workCSS from "../css/scss/work.scss";

// 동적 리소스 import
function importAll(r) {
    let videos = {};
    r.keys().map(item => videos[item.replace("./", "")] = r(item));
    return videos;
}
const videos = importAll(require.context("../video", false, /\.mp4$/));

// draw DOM & convert lang
class DrawDomAndConvert {
    constructor() {
        this.lang = "en";
        this.textData;
        this.workData;
    }

    init() {
        this.workGetJson();
        this.textGetJson();
    }

    async workGetJson() {
        const response = fetch(workJson).then((response) => response.json());
        await response.then((workData) => (this.workData = workData));
        this.bindWorkList();
    }

    async textGetJson() {
        const response = fetch(textJson).then((response) => response.json());
        await response.then((textData) => (this.textData = textData));
        this.bindText();
    }

    bindWorkList() {
        const data = this.workData;
        const parent = document.querySelector(".work_list");
        const cursor = document.querySelector(".cursor");
        const videoSrc = Object.values(videos);

        for (let i = 0; i < data.length; i++) {
            const html = document.createElement("li");
            html.setAttribute("class", `list hover ${data[i].id}`);
            html.setAttribute("category", `${data[i].category}`);
            html.innerHTML = `
                <a href="#" class="Nefarious toggle_font">${data[i].title.en}</a>
                <video class="video_tooltip" muted playsinline>
                <source src="${videoSrc[i]}" type="video/mp4" />
                </video>
            `;
            parent.appendChild(html);
        }

        customCursor.reverseColor(cursor);
        MouseOverTooltip();
    }

    bindText() {
        const data = this.textData;
        const textArr = Object.entries(data[0]);
        const budgietArr = Object.entries(data[1]);
        const timelineArr = Object.entries(data[2]);
        const categoryArr = Object.entries(data[3]);

        // 일반 content text
        for (let i = 0; i < textArr.length; i++) {
            const target = document.querySelector(`[data-name='${textArr[i][0]}']`);
            target.innerHTML = textArr[i][1].en;

            // marquee text
            if (target.classList.contains("marquee_text")) {
                target.innerHTML = textArr[i][1].en + textArr[i][1].en;
            }

            // contact input placeholder
            if (target.hasAttribute('placeholder')) {
                target.innerHTML = '';
                target.setAttribute('placeholder', textArr[i][1].en)
            }
        }

        // 예산 select box option text
        for (let i = 0; i < budgietArr.length; i++) {
            const parent = document.querySelector("select.budgiet");
            const html = document.createElement("option");
            html.setAttribute("class", budgietArr[i][0]);
            html.innerHTML = budgietArr[i][1].en;
            parent.appendChild(html);
        }

        // 일정 select box text
        for (let i = 0; i < timelineArr.length; i++) {
            const parent = document.querySelector("select.timeline");
            const html = document.createElement("option");
            html.setAttribute("class", timelineArr[i][0]);
            html.innerHTML = timelineArr[i][1].en;
            parent.appendChild(html);
        }

        // category select radio btn text
        for (let i = 0; i < categoryArr.length; i++) {
            const target = document.querySelector(`[data-name='${categoryArr[i][0]}']`);
            target.innerHTML = categoryArr[i][1].en;
        }

        Marquee(".marquee", 0.2);
    }

    changeWork() {
        const data = this.workData;

        for (let i = 0; i < data.length; i++) {
            const target = document.querySelector(`.${data[i].id} a`);

            if (this.lang === "en") {
                target.innerHTML = data[i].title.en;
            } else {
                target.innerHTML = data[i].title.ko;
            }
        }
    }

    changeText() {
        const data = this.textData;
        const textArr = Object.entries(data[0]);
        const budgietArr = Object.entries(data[1]);
        const timelineArr = Object.entries(data[2]);
        const categoryArr = Object.entries(data[3]);

        for (let i = 0; i < textArr.length; i++) {
            const target = document.querySelector(`[data-name='${textArr[i][0]}']`);

            // 일반 content text
            if (this.lang === "en") {
                target.innerHTML = textArr[i][1].en;

                // marquee text
                if (target.classList.contains("marquee_text")) {
                    target.innerHTML = textArr[i][1].en + textArr[i][1].en;
                }

                // contact input placeholder
                if (target.hasAttribute('placeholder')) {
                    target.setAttribute('placeholder', textArr[i][1].en)
                }
            } else {
                target.innerHTML = textArr[i][1].ko;

                // marquee text
                if (target.classList.contains("marquee_text")) {
                    target.innerHTML = textArr[i][1].ko + textArr[i][1].ko;
                }

                // contact input placeholder
                if (target.hasAttribute('placeholder')) {
                    target.setAttribute('placeholder', textArr[i][1].ko)
                }
            }
        }

        // 예산 select box option text
        for (let i = 0; i < budgietArr.length; i++) {
            const target = document.querySelector(`.${budgietArr[i][0]}`);
            if (this.lang === "en") {
                target.innerHTML = budgietArr[i][1].en;
            } else {
                target.innerHTML = budgietArr[i][1].ko;
            }
        }

        // 일정 select box text
        for (let i = 0; i < timelineArr.length; i++) {
            const target = document.querySelector(`.${timelineArr[i][0]}`);
            if (this.lang === "en") {
                target.innerHTML = timelineArr[i][1].en;
            } else {
                target.innerHTML = timelineArr[i][1].ko;
            }
        }

        // category select radio btn text
        for (let i = 0; i < categoryArr.length; i++) {
            const target = document.querySelector(`[data-name='${categoryArr[i][0]}']`);
            if (this.lang === "en") {
                target.innerHTML = categoryArr[i][1].en;
            } else {
                target.innerHTML = categoryArr[i][1].ko;
            }
        }
    }

    reverseColorTheme() {
        const state = document.documentElement.getAttribute("color-theme");
        if (state === "white") {
            document.documentElement.setAttribute("color-theme", "blue");
        } else {
            document.documentElement.setAttribute("color-theme", "white");
        }
    }

    change() {
        DOM.lang === "en" ? (DOM.lang = "ko") : (DOM.lang = "en");
        DOM.changeWork();
        DOM.changeText();
        DOM.reverseColorTheme();

        const enFont = document.querySelectorAll(".toggle_font");
        for (let i = 0; i < enFont.length; i++) {
            enFont[i].classList.contains("Nefarious") ? enFont[i].classList.remove("Nefarious") : enFont[i].classList.add("Nefarious");
        }
    }

    workListCategory() {
        const list = document.querySelectorAll('.work_list .list');
        for (let i = 0; i < list.length; i++) {
            let listCategory = list[i].getAttribute('category');
            if (this.id == 'all') {
                list[i].style.display = 'flex'
            } else if (listCategory == this.id) {
                list[i].style.display = 'flex'
            } else {
                list[i].style.display = 'none'
            }
        }
    }
}
let DOM = new DrawDomAndConvert();
document.querySelector(".reverse_color").addEventListener("click", DOM.change);

// run
window.addEventListener("DOMContentLoaded", () => {
    DOM.init();
    customCursor.create();
});
circleLogoAnimation.bindSGV();

// custom input[type="file"](file-name bind)
const bindFileInput = (function () {
    const elem = document.querySelector("#file");
    const bindTarget = document.querySelector(".file_name");

    elem.addEventListener("change", function () {
        let value = this.value;
        bindTarget.value = value;
    });
})();

// workListCategory
const radios = document.querySelectorAll('[type=radio]');
radios.forEach(elem => elem.addEventListener('click', DOM.workListCategory));