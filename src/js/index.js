var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
    var player;
    player = new YT.Player('player', {
        videoId: 'M7lc1UVf-VE',
        playerVars: { 'autoplay': 1, 'controls': 0 },
        events: {
            'onReady': onPlayerReady,
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}

// module import
import customCursor from "./module/CustomCursor.js";
import circleLogoAnimation from "./module/CircleLogo.js";
import Marquee from "./module/Marquee.js";
import MouseOverTooltip from "./module/MouseOverTooltip.js";
import Emailjs from "./module/Email.js";
import textJson from "./data/text.json";
import workJson from "./data/work.json";

// css import
import commonCSS from "../css/scss/common.scss";
import styleCSS from "../css/scss/style.scss";
import contactCSS from "../css/scss/contact.scss";
import workCSS from "../css/scss/work.scss";

// DOM text bind
class DomTextBind {
    constructor() {
        this.lang = "en";
        this.workData;
        this.textData;
    }

    async getJson() {
        const workRes = fetch(workJson).then((workRes) => workRes.json());
        await workRes.then((workData) => (this.workData = workData));

        const textRes = fetch(textJson).then((textRes) => textRes.json());
        await textRes.then((textData) => (this.textData = textData));
        
        this.bindWorkList();
        this.bindText();

        // children class
        convert.parentData(this.workData, this.textData)
    }

    bindWorkList() {
        const data = this.workData;
        const parent = document.querySelector(".work_list");
        const cursor = document.querySelector(".cursor");

        for (let i = 0; i < data.length; i++) {
            const dt = document.createElement("dt");
            dt.setAttribute("class", `list hover ${data[i].name}`);
            dt.setAttribute("category", `${data[i].category}`);
            dt.innerHTML = `
                <a href="#" class="Nefarious toggle_font">${data[i].title.en}</a>
                <div id="video_tooltip"></div>
                `;
                // <iframe
                //     class="video_tooltip"
                //     width="560"
                //     height="315"
                //     src="https://www.youtube.com/embed/${data[i].url}?&mute=1&enablejsapi=1&playsinline=1&color=white&controls=0"
                //     frameborder="0"
                //     allowfullscreen>
                // </iframe>
            parent.appendChild(dt);
        }

        customCursor.reverseColor(cursor);
        // MouseOverTooltip();
    }

    bindText() {
        const data = this.textData;
        const textArr = Object.entries(data[0]);
        const budgietArr = Object.entries(data[1]);
        const timelineArr = Object.entries(data[2]);
        const categoryArr = Object.entries(data[3]);

        function bindFuc(variable, name) {
            // 일반 content text 및 category select radio btn text
            if (name == 'content' || name == 'category') {
                for (let i = 0; i < variable.length; i++) {
                    const target = document.querySelector(`[data-name='${variable[i][0]}']`);
                    target.innerHTML = variable[i][1].en;

                    // 일반 content text
                    if (name == 'content') {
                        // marquee text
                        if (target.classList.contains("marquee_text")) {
                            target.innerHTML = variable[i][1].en + variable[i][1].en;
                        }
                        // contact input placeholder
                        if (target.hasAttribute('placeholder')) {
                            target.innerHTML = '';
                            target.setAttribute('placeholder', variable[i][1].en)
                        }
                    }
                }
            }
            // 예산/일정 select box option text
            else if (name == 'budgiet' || name == 'timeline') {
                for (let i = 0; i < variable.length; i++) {
                    const parent = document.querySelector(`select.${name}`);
                    const html = document.createElement("option");
                    html.setAttribute("class", variable[i][0]);
                    html.innerHTML = variable[i][1].en;
                    parent.appendChild(html);
                }
            }
        }
        
        bindFuc(textArr, 'content');
        bindFuc(budgietArr, 'budgiet');
        bindFuc(timelineArr, 'timeline');
        bindFuc(categoryArr, 'category');
        Marquee(".marquee", 0.2);
    }

    workCategory() {
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

// convert color & text
class Convert extends DomTextBind {
    constructor(lang) {
        super(lang)
        this.workData;
        this.textData;
    }

    parentData(work, text) {
        this.workData = work;
        this.textData = text;
    }

    changeWork() {
        const data = this.workData;

        for (let i = 0; i < data.length; i++) {
            const target = document.querySelector(`.${data[i].name} a`);

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
        let lang = this.lang;

        function changeFuc(variable, name) {
            // 일반 content text 및 category select radio btn text
            if (name == 'content' || name == 'category') {
                for (let i = 0; i < variable.length; i++) {
                    const target = document.querySelector(`[data-name='${variable[i][0]}']`);
                    
                    if (lang === "en") {
                        target.innerHTML = variable[i][1].en;
                        // 일반 content text
                        if(name == 'content') {
                            // marquee text
                            if (target.classList.contains("marquee_text")) {
                                target.innerHTML = textArr[i][1].en + textArr[i][1].en;
                            }
                            // contact input placeholder
                            if (target.hasAttribute('placeholder')) {
                                target.setAttribute('placeholder', textArr[i][1].en)
                            }
                        }
                    } else {
                        target.innerHTML = variable[i][1].ko;
                        // 일반 content text
                        if(name == 'content') {
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
                }
            }
            // 예산/일정 select box option text
            else if (name == 'budgiet' || name == 'timeline') {
                for (let i = 0; i < variable.length; i++) {
                    const target = document.querySelector(`.${variable[i][0]}`);
                    
                    if (lang === "en") {
                        target.innerHTML = variable[i][1].en;
                    } else {
                        target.innerHTML = variable[i][1].ko;
                    }
                }
            }
        }

        changeFuc(textArr, 'content');
        changeFuc(budgietArr, 'budgiet');
        changeFuc(timelineArr, 'timeline');
        changeFuc(categoryArr, 'category');
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
        const enFont = document.querySelectorAll(".toggle_font");

        convert.lang === "en" ? (convert.lang = "ko") : (convert.lang = "en");
        convert.changeWork();
        convert.changeText();
        convert.reverseColorTheme();

        for (let i = 0; i < enFont.length; i++) {
            if (enFont[i].classList.contains("Nefarious")) {
                enFont[i].classList.remove("Nefarious")
            } else {
                enFont[i].classList.add("Nefarious")
            }
        }
    }
}

// instance
let domTextBind = new DomTextBind();
let convert = new Convert();

// run
window.addEventListener("DOMContentLoaded", () => {
    domTextBind.getJson();
    customCursor.create();
    circleLogoAnimation.bindSGV();
});

// reverse color
document.querySelector(".reverse_color").addEventListener("click", convert.change);

// workListCategory
const radios = document.querySelectorAll('[type=radio]');
radios.forEach(elem => elem.addEventListener('click', domTextBind.workCategory));

// custom input[type="file"](file-name bind)
(function bindFileInput() {
    const elem = document.querySelector("#file");
    const bindTarget = document.querySelector(".file_name");

    elem.addEventListener("change", function () {
        let value = this.value;
        bindTarget.value = value;
    });
})();

// email js run
Emailjs();