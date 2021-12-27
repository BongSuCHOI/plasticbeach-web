// module import
import CustomCursor from "./module/CustomCursor.js";
import Marquee from "./module/Marquee.js";
import MouseOverTooltip from "./module/MouseOverTooltip.js";
import Accordion from "./module/Accordion.js";
import CircleLogoAnimation from "./module/CircleLogo.js";
import Emailjs from "./module/Email.js";
import WorkCategory from "./module/WorkCategory.js";

// data
import textJson from "./data/text.json";
import workJson from "./data/work.json";

// css import
import styleCSS from "../css/scss/style.scss";

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

        CustomCursor.create();

        // children class
        convert.parentData(this.workData, this.textData)
    }

    bindWorkList() {
        const data = this.workData;
        const parent = document.querySelector(".work_list");
        let embedURL = [];
        let detailData = [];
        
        data.forEach(obj => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            const div = document.createElement("div");

            // list
            li.setAttribute("class", "list");
            li.setAttribute("name", obj.name);
            li.setAttribute("category", obj.category);
            btn.setAttribute("class", "Nefarious toggle_font");
            btn.setAttribute("data-content", obj.title.en);
            btn.innerHTML = obj.title.en;

            // detail(accordion menu)
            div.setAttribute("class", "detail");
            div.setAttribute("name", obj.name);
            div.setAttribute("category", obj.category);
            
            // append
            li.appendChild(btn);
            li.appendChild(div);
            parent.appendChild(li);

            // data push to variable
            embedURL.push(obj.url);
            detailData.push(obj.detail);
        })

        Accordion.props(detailData);
        MouseOverTooltip(embedURL);
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
                variable.forEach(obj => {
                    const key = obj[0];
                    const val = obj[1];
                    const target = document.querySelector(`[data-name='${key}']`);
                    target.innerHTML = val.en;

                    // 일반 content text
                    if (name == 'content') {
                        // marquee text
                        if (target.classList.contains("marquee_text")) {
                            target.innerHTML = val.en + val.en;
                        }
                        // contact input placeholder
                        if (target.hasAttribute('placeholder')) {
                            target.innerHTML = '';
                            target.setAttribute('placeholder', val.en)
                        }
                    }
                })
            }
            // 예산/일정 select box option text
            else if (name == 'budgiet' || name == 'timeline') {
                variable.forEach(obj => {
                    const key = obj[0];
                    const val = obj[1];
                    const parent = document.querySelector(`select.${name}`);
                    const html = document.createElement("option");
                    html.setAttribute("class", key);
                    html.innerHTML = val.en;
                    parent.appendChild(html);
                })
            }
        }
        
        bindFuc(textArr, 'content');
        bindFuc(budgietArr, 'budgiet');
        bindFuc(timelineArr, 'timeline');
        bindFuc(categoryArr, 'category');

        Marquee(".marquee", 0.2);
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

        data.forEach((obj, i) => {
            const lists = document.querySelectorAll(".list");
            const target = lists[i].querySelector("span");

            if (this.lang === "en") {
                target.innerHTML = obj.title.en;
                target.setAttribute("data-content", obj.title.en);
            } else {
                target.innerHTML = obj.title.ko;
                target.setAttribute("data-content", obj.title.ko);
            }
        })
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
                variable.forEach(obj => {
                    const key = obj[0];
                    const val = obj[1];
                    const target = document.querySelector(`[data-name='${key}']`);
                    
                    if (lang === "en") {
                        target.innerHTML = val.en;
                        // 일반 content text
                        if(name == 'content') {
                            // marquee text
                            if (target.classList.contains("marquee_text")) {
                                target.innerHTML = val.en + val.en;
                            }
                            // contact input placeholder
                            if (target.hasAttribute('placeholder')) {
                                target.setAttribute('placeholder', val.en)
                            }
                        }
                    } else {
                        target.innerHTML = val.ko;
                        // 일반 content text
                        if(name == 'content') {
                            // marquee text
                            if (target.classList.contains("marquee_text")) {
                                target.innerHTML = val.ko + val.ko;
                            }
                            // contact input placeholder
                            if (target.hasAttribute('placeholder')) {
                                target.setAttribute('placeholder', val.ko)
                            }
                        }
                    }
                })
            }
            // 예산/일정 select box option text
            else if (name == 'budgiet' || name == 'timeline') {
                variable.forEach(obj => {
                    const key = obj[0];
                    const val = obj[1];
                    const target = document.querySelector(`.${key}`);
                    
                    if (lang === "en") {
                        target.innerHTML = val.en;
                    } else {
                        target.innerHTML = val.ko;
                    }
                })
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

        enFont.forEach(elem => {
            if (elem.classList.contains("Nefarious")) {
                elem.classList.remove("Nefarious")
            } else {
                elem.classList.add("Nefarious")
            }
        })
    }
}

// instance
let domTextBind = new DomTextBind();
let convert = new Convert();

// run
domTextBind.getJson();

// reverse color
document.querySelector(".reverse_color").addEventListener("click", convert.change);

// workListCategory
const radios = document.querySelectorAll('[type=radio]');
radios.forEach(elem => elem.addEventListener('click', WorkCategory));

// custom input[type="file"](file-name bind)
(function bindFileInput() {
    const elem = document.querySelector("#file");
    const bindTarget = document.querySelector(".file_name");

    elem.addEventListener("change", function () {
        let value = this.value;
        bindTarget.value = value;
    });
})();
