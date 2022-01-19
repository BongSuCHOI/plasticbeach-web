// library import
import { gsap } from "gsap";

// data
import workJson from "./data/work.json";
import textJson from "./data/text.json";

// module import
import Work from "./work.js";
import Contact from "./contact.js";
import Convert from "./module/Convert.js";
import platformCheck from "./module/PlatformCheck.js";

// css import
import styleCSS from "../css/scss/style.scss";

// Get Data
class GetData {
    constructor(_workData, _textData) {
        this._workData = fetch(workJson).then((workRes) => workRes.json());
        this._textData = fetch(textJson).then((textRes) => textRes.json());
    }
}

// DOM text bind
class DomTextBind extends GetData {
    constructor(_workData, _textData) {
        super(_workData, _textData);
        this.workData;
        this.textData;
    }

    async init() {
        await Promise.all([this._workData, this._textData]).then((datas) => {
            this.workData = datas[0];
            this.textData = datas[1];
        });

        this.bind();
        Work(this.workData);
        Contact.init();
        Convert.setData([this.workData, this.textData]);
        customCursor.hoverEffect();
    }

    bind() {
        const workData = this.workData;
        const textData = this.textData;
        const parent = document.querySelector(".work_list");
        const textArr = Object.entries(textData[0]);
        const budgietArr = Object.entries(textData[1]);
        const timelineArr = Object.entries(textData[2]);

        // contents
        const bindFuc = (variable, name) => {
            if (name == "content") {
                variable.forEach((obj) => {
                    const key = obj[0];
                    const val = obj[1];
                    const target = document.querySelector(`[data-name='${key}']`);
                    target.innerHTML = val.en;

                    // marquee text
                    if (target.classList.contains("marquee_text")) {
                        target.innerHTML = val.en + val.en;
                    }
                    // contact input placeholder
                    if (target.hasAttribute("placeholder")) {
                        target.innerHTML = "";
                        target.setAttribute("placeholder", val.en);
                    }
                });
            } else if (name == "budgiet" || name == "timeline") {
                variable.forEach((obj) => {
                    const val = obj[1];
                    const parent = document.querySelector(`select.${name}`);
                    const html = document.createElement("option");
                    html.innerHTML = val.en;
                    parent.appendChild(html);
                });
            }
        };

        // work
        workData.forEach((data) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            const div = document.createElement("div");

            // list
            li.setAttribute("class", "list");
            li.setAttribute("name", data.name);
            li.setAttribute("category", data.category);
            btn.setAttribute("class", "Nefarious toggle_font cursor_effect");
            btn.setAttribute("data-content", data.title.en);
            btn.innerHTML = data.title.en;

            // detail(accordion menu)
            div.setAttribute("class", "detail");
            div.setAttribute("name", data.name);
            div.setAttribute("category", data.category);

            // append
            li.appendChild(btn);
            li.appendChild(div);
            parent.appendChild(li);
        });

        bindFuc(textArr, "content");
        bindFuc(budgietArr, "budgiet");
        bindFuc(timelineArr, "timeline");
    }
}

// Custom Cursor
const customCursor = {
    // Cursor Init
    init: () => {
        if (!platformCheck()) {
            return;
        }

        const cursor = document.querySelector(".cursor");
        const tooltipBox = document.querySelector(".tooltip_box");
        const pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };
        const mouse = {
            x: pos.x,
            y: pos.y,
        };
        const speed = 0.1;
        const cursorSetX = gsap.quickSetter(cursor, "x", "px");
        const cursorSetY = gsap.quickSetter(cursor, "y", "px");
        const tooltipSetX = gsap.quickSetter(tooltipBox, "x", "px");
        const tooltipSetY = gsap.quickSetter(tooltipBox, "y", "px");
        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
        });

        window.addEventListener(
            "mousemove",
            () => {
                gsap.to(cursor, {
                    opacity: 1,
                    duration: 0.3,
                });
            },
            { once: true }
        );

        customCursor.run({ pos, mouse, speed, cursorSetX, cursorSetY, tooltipSetX, tooltipSetY });
    },

    // Update Coordinate
    run: (rest) => {
        const { pos, mouse, speed, cursorSetX, cursorSetY, tooltipSetX, tooltipSetY } = rest;

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        // Follow Mouse
        gsap.ticker.add(() => {
            // adjust speed for higher refresh monitors
            const cursorDT = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            const tooltipDT = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            let cursorPosX = (pos.x += (mouse.x - pos.x) * cursorDT);
            let cursorPosY = (pos.y += (mouse.y - pos.y) * cursorDT);
            let tooltipPosX = (pos.x += (mouse.x - pos.x) * tooltipDT);
            let tooltipPosY = (pos.y += (mouse.y - pos.y) * tooltipDT);

            cursorSetX(cursorPosX);
            cursorSetY(cursorPosY);
            tooltipSetX(tooltipPosX);
            tooltipSetY(tooltipPosY);
        });
    },

    // Hover Effect
    hoverEffect: () => {
        const cursor = document.querySelector(".cursor");
        const hoverElem = cursor.querySelector(".hover");
        const targets = document.querySelectorAll(".cursor_effect");
        const tArr = [...targets];

        // Mouse Enter Effect
        const enterEffect = () => {
            return gsap.to(hoverElem, {
                duration: 0.3,
                scale: 1,
            });
        };
        // Mouse Leave Effect
        const leaveEffect = () => {
            return gsap.to(hoverElem, {
                duration: 0.3,
                scale: 0,
            });
        };
        tArr.forEach((obj) => {
            obj.addEventListener("mouseenter", enterEffect);
            obj.addEventListener("mouseleave", leaveEffect);
        });
    },
};

// Marquee
const marquee = (selector, speed) => {
    const parentElem = document.querySelector(selector);
    const childElem = parentElem.children[0];
    const copyText = childElem.innerText;
    childElem.append(copyText);
    let i = 0;

    setInterval(function () {
        childElem.style.marginTop = `${i}px`;
        if (i > childElem.clientWidth / 2) {
            i = 0;
        }
        i = i + speed;
    }, 0);
};

// Circle Logo Animation
const circleLogoAnimation = () => {
    const parentBtn = document.querySelector(".reverse_color");
    const target = parentBtn.querySelector(".circleLogo");

    gsap.from(target, {
        duration: 10,
        repeat: -1,
        ease: "none",
        rotate: -360,
    });

    // Hover Animation Speed
    const hover = gsap.to(target, {
        duration: 0.8,
        repeat: -1,
        ease: "none",
        rotate: 360,
        paused: true,
    });
    target.addEventListener("mouseenter", () => hover.play());
    target.addEventListener("mouseleave", () => hover.pause());
};

// instance
const domTextBind = new DomTextBind();

// run
domTextBind.init();
customCursor.init();
circleLogoAnimation();
marquee(".marquee", 0.2);

/**
 * 인트로는 MutationObserver으로 document에 변화를 감시하다가(load="ing"같은 attr)
 * 돔이 로드되고 난 후에(load이벤트 또는 기타 등등... [노마드 코더 리액트 예제에 있던 호출에 1초정도 걸리던 api가져와서 테스트해보면 좋을듯])
 * 인트로가 아직도 재생중이면, 인트로가 끝날때까지 기다리고 끝나면 감시하던 속성을 변경해서 인트로를 종료
 * 반대로 인트로가 끝났는데 아직도 돔이 로드되고 있으면, 로드가 끝날때까지 인트로 유지 후 로드가 끝나면 감시하던 속성을 변경해서 인트로를 종료
 * 감시하던 속성(attr같은) 제거 후
 * MutationObserver 종료 (일시정지 X)
 **/
