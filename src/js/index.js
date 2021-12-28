// library import
import { gsap } from "gsap";

// data
import workJson from "./data/work.json";
import textJson from "./data/text.json";

// module import
import Work from "./work.js";
import Contact from "./contact.js";
import Convert from "./module/Convert.js";
import platformCheck from './module/PlatformCheck.js';

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
class DomTextBind extends GetData{
    constructor(_workData, _textData) {
        super(_workData, _textData)
        this.workData;
        this.textData;
    }

    async init() {
        await this._workData.then(res => this.workData = res);
        await this._textData.then(res => this.textData = res);
        
        this.bind();
        Convert.setData([this.workData, this.textData]);
        Work(this.workData);
    }

    bind() {
        const workData = this.workData;
        const textData = this.textData;
        const parent = document.querySelector(".work_list");
        const textArr = Object.entries(textData[0]);
        const budgietArr = Object.entries(textData[1]);
        const timelineArr = Object.entries(textData[2]);

        // contents
        function bindFuc(variable, name) {
            if (name == 'content') {
                variable.forEach(obj => {
                    const key = obj[0];
                    const val = obj[1];
                    const target = document.querySelector(`[data-name='${key}']`);
                    target.innerHTML = val.en;

                    // marquee text
                    if (target.classList.contains("marquee_text")) {
                        target.innerHTML = val.en + val.en;
                    }
                    // contact input placeholder
                    if (target.hasAttribute('placeholder')) {
                        target.innerHTML = '';
                        target.setAttribute('placeholder', val.en)
                    }
                })
            }
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

        // work
        workData.forEach(data => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            const div = document.createElement("div");

            // list
            li.setAttribute("class", "list");
            li.setAttribute("name", data.name);
            li.setAttribute("category", data.category);
            btn.setAttribute("class", "Nefarious toggle_font");
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
        })

        bindFuc(textArr, 'content');
        bindFuc(budgietArr, 'budgiet');
        bindFuc(timelineArr, 'timeline');
    }
}

// Custom Cursor
const customCursor = {
    // Created Cursor Element
    create: () => {
        if (!platformCheck()) { return }
        
        const createElem = document.createElement("div");
        const createPointer = document.createElement("span");
        createElem.setAttribute("class", "cursor");
        createElem.appendChild(createPointer);
        document.body.appendChild(createElem);

        customCursor.init();
    },

    // Cursor Init
    init: () => {
        const cursor = document.querySelector(".cursor");
        const pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };
        const mouse = {
            x: pos.x,
            y: pos.y,
        };
        const speed = 1;
        const xSet = gsap.quickSetter(cursor, "x", "px");
        const ySet = gsap.quickSetter(cursor, "y", "px");
        gsap.set(".cursor", {
            xPercent: -50,
            yPercent: -50,
        });

        customCursor.run({ pos, mouse, speed, xSet, ySet });
        customCursor.reverseColor(cursor);
    },

    // Update Coordinate
    run: (rest) => {
        const pos = rest.pos;
        const mouse = rest.mouse;
        const speed = rest.speed;
        const xSet = rest.xSet;
        const ySet = rest.ySet;

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        // Follow Mouse
        gsap.ticker.add(() => {
            // adjust speed for higher refresh monitors
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });
    },

    // Reverse Color
    reverseColor: (cursor) => {
        const hoverTag = document.querySelectorAll(".reverse");
        const arr = [];
        
        arr.push(...hoverTag);
        arr.forEach((obj) => {
            obj.addEventListener("mouseenter", () => {
                cursor.classList.add("reverse");
            });
            obj.addEventListener("mouseleave", () => {
                cursor.classList.remove("reverse");
            });
        });
    },
};

// Marquee
const marquee = (selector, speed) => {
    const parentElem = document.querySelector(selector);
    const childElem = parentElem.children[0];
    const copyText = childElem.innerText;
    childElem.append(copyText)
    let i = 0;
    
    setInterval(function () {
        childElem.style.marginTop = `${i}px`;
        if (i > childElem.clientWidth/2) {
            i = 0;
        }
        i = i + speed;
    }, 0);
}

// Circle Logo Animation
const circleLogoAnimation = {
    bindSGV: () => {
        const parentBtn = document.querySelector(".reverse_color");
        const circleLogo = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="166.266"
                viewBox="0 0 166.266 160.462"
                class="circleLogo"
            >
                <g transform="translate(-1099.01 -349.083)">
                    <g transform="translate(1099.01 349.083)">
                        <path
                            d="M1423.986,486.061l22.157-4.9,1.034,4.671-1.827.4.021.09a6.553,6.553,0,0,1,3.548,4.68c1.047,4.731-2.074,8.94-7.254,10.085-4.731,1.048-9.448-1.4-10.5-6.155a6.607,6.607,0,0,1,.959-5.457l-7.036,1.557Zm16.729,10.024a4.263,4.263,0,1,0-5.143-3.228A4.28,4.28,0,0,0,1440.714,496.084Z"
                            transform="translate(-1289.309 -426.423)"
                        />
                        <path
                            d="M1445.274,533.36l22.69-.339.077,5.09-22.69.339Z"
                            transform="translate(-1301.775 -456.793)"
                        />
                        <path
                            d="M1439.518,562.324l1.806.353.011-.061c-1.334-1.01-1.848-3.173-1.419-5.37.965-4.936,5.519-7.608,10.574-6.62,4.936.965,8.209,5.323,7.273,10.108a5.765,5.765,0,0,1-3.306,4.446l-.012.061,1.776.347-.976,5-16.7-3.264Zm8.368,1.636a4.319,4.319,0,0,0,5.073-3.415,4.339,4.339,0,1,0-5.073,3.415Z"
                            transform="translate(-1297.833 -466.984)"
                        />
                        <path
                            d="M1439.266,605.919c.9.4,1.48-.1,1.84-.85a1.3,1.3,0,0,0-.383-1.819c-.83-.4-1.6.147-3.181,2.007-2.725,3.181-4.761,3.663-7,2.584-3.2-1.544-3.89-5.279-2.212-8.76,1.664-3.454,4.81-4.966,8.092-3.794l-2.2,4.559a1.755,1.755,0,0,0-2.248,1.061,1.61,1.61,0,0,0,.415,2.175c.857.412,1.552.1,3.375-1.845,3.052-3.3,5.064-3.585,6.86-2.72,3.039,1.464,3.628,5.256,2.137,8.349-1.6,3.315-4.553,4.784-7.671,3.554Z"
                            transform="translate(-1291.334 -493.026)"
                        />
                        <path
                            d="M1417.208,622.531l10.678,7.684,1.469-2.041,3.136,2.257-1.468,2.042,4.6,3.313-2.973,4.132-4.605-3.314-1.433,1.992-3.136-2.257,1.434-1.992-10.679-7.684Z"
                            transform="translate(-1283.599 -509.209)"
                        />
                        <path
                            d="M1405.555,637.1l12.457,11.6-3.469,3.726-12.457-11.6Zm13.782,12.829,2.828,2.633-3.469,3.726-2.828-2.632Z"
                            transform="translate(-1276.485 -517.743)"
                        />
                        <path
                            d="M1381.88,668.141a3.914,3.914,0,0,0,4.482-.281,4.338,4.338,0,0,0-5.152-6.945,3.885,3.885,0,0,0-1.66,3.992l-4.205,3.029a9.14,9.14,0,0,1,15.849-8.846,9.107,9.107,0,0,1-13.495,12.062Z"
                            transform="translate(-1260.409 -528.379)"
                        />
                        <path
                            d="M1328.066,680.158l4.833,22.174-4.974,1.084-1.5-6.862a6.331,6.331,0,0,1-4.322,2.92c-4.315.94-8.976-1.433-10.184-6.977-1.117-5.123,1.307-9.7,6.43-10.818,2.008-.438,4.218.053,5.274,1.3l.059-.013-.385-1.768Zm-11.189,11.165a4.2,4.2,0,1,0,8.217-1.76,4.165,4.165,0,0,0-4.979-3.4A4.255,4.255,0,0,0,1316.877,691.323Z"
                            transform="translate(-1223.531 -542.954)"
                        />
                        <path
                            d="M1278.581,694a3.809,3.809,0,0,0-3.73-3.513,3.579,3.579,0,0,0-3.209,1.354l-5.2-.4c1.9-3.576,5.157-5.511,8.734-5.238a9.078,9.078,0,1,1-9.541,8.16,6.543,6.543,0,0,1,.225-1.337Zm-8.027,2.832a4.018,4.018,0,0,0,7.7.588Z"
                            transform="translate(-1196.565 -546.479)"
                        />
                        <path
                            d="M1223.334,672.346l-.66,1.718.057.021c1.226-1.139,3.446-1.271,5.536-.467,4.695,1.8,6.538,6.752,4.69,11.562-1.8,4.695-6.665,7.164-11.216,5.414a5.771,5.771,0,0,1-3.808-4.027l-.057-.021-.649,1.688-4.751-1.827,6.108-15.888Zm-3.059,7.959a4.32,4.32,0,0,0,2.484,5.588,4.341,4.341,0,1,0-2.484-5.588Z"
                            transform="translate(-1165.453 -537.309)"
                        />
                        <path
                            d="M1180.364,659.752a3.918,3.918,0,0,0,1.54,4.22,4.339,4.339,0,0,0,5.2-6.909,3.885,3.885,0,0,0-4.3-.461l-4.095-3.176a9.14,9.14,0,0,1,12.972,12.7,9.107,9.107,0,0,1-15.391-9.527Z"
                            transform="translate(-1143.734 -526.103)"
                        />
                        <path
                            d="M1157.776,618.224l-7.5,5.59c-1.77,1.32-2.264,2.759-1.147,4.259,1.155,1.549,2.614,1.609,4.311.344l7.672-5.719,3.042,4.082-18.2,13.563-3.042-4.081,5.852-4.363a4.8,4.8,0,0,1-4.41-2.22c-2.327-3.124-1.772-6.482,1.793-9.14l8.582-6.4Z"
                            transform="translate(-1124.721 -504.296)"
                        />
                        <path
                            d="M1140.433,572.347l-22.071,5.276-1.112-4.653,1.819-.436-.021-.089a6.552,6.552,0,0,1-3.627-4.619c-1.126-4.712,1.923-8.972,7.082-10.206,4.713-1.127,9.471,1.236,10.6,5.978a6.607,6.607,0,0,1-.867,5.472l7.009-1.675Zm-16.9-9.74a4.263,4.263,0,1,0,5.2,3.141A4.28,4.28,0,0,0,1123.538,562.607Z"
                            transform="translate(-1108.484 -471.036)"
                        />
                        <path
                            d="M1121.854,545.873l-22.684.719-.161-5.089,22.684-.718Z"
                            transform="translate(-1099.01 -461.34)"
                        />
                        <path
                            d="M1131.82,496.4l-1.811-.323-.011.06c1.35.989,1.9,3.143,1.508,5.346-.882,4.951-5.39,7.7-10.462,6.8-4.951-.882-8.3-5.184-7.441-9.985a5.767,5.767,0,0,1,3.231-4.5l.012-.061-1.782-.317.893-5.012,16.755,2.986Zm-8.393-1.5a4.318,4.318,0,0,0-5.015,3.5,4.34,4.34,0,1,0,5.015-3.5Z"
                            transform="translate(-1107.478 -430.665)"
                        />
                        <path
                            d="M1133.154,458.628c-.9-.383-1.478.129-1.825.881a1.3,1.3,0,0,0,.413,1.811c.835.386,1.6-.173,3.146-2.06,2.671-3.225,4.7-3.742,6.954-2.7,3.229,1.491,3.977,5.213,2.357,8.721-1.606,3.479-4.727,5.045-8.027,3.927l2.121-4.594a1.756,1.756,0,0,0,2.229-1.1,1.609,1.609,0,0,0-.451-2.168c-.863-.4-1.553-.075-3.344,1.9-3,3.345-5,3.668-6.813,2.833-3.062-1.414-3.716-5.194-2.276-8.312,1.542-3.342,4.473-4.86,7.61-3.681Z"
                            transform="translate(-1115.347 -410.341)"
                        />
                        <path
                            d="M1150.177,439.8l-10.8-7.5-1.435,2.065-3.173-2.2,1.435-2.065-4.659-3.237,2.9-4.181,4.659,3.236,1.4-2.015,3.174,2.205-1.4,2.014,10.8,7.506Z"
                            transform="translate(-1118.059 -392.175)"
                        />
                        <path
                            d="M1149.394,409.84l-2.872-2.585,3.406-3.783,2.872,2.585Zm13.994,12.6-12.649-11.386,3.405-3.784,12.65,11.387Z"
                            transform="translate(-1126.832 -380.932)"
                        />
                        <path
                            d="M1189.188,392.18a3.917,3.917,0,0,0-4.479.357,4.339,4.339,0,0,0,5.27,6.858,3.883,3.883,0,0,0,1.593-4.02l4.155-3.1a9.141,9.141,0,0,1-15.7,9.111,9.108,9.108,0,0,1,13.293-12.288Z"
                            transform="translate(-1145.376 -371.203)"
                        />
                        <path
                            d="M1238.339,372.339l-5.206-22.087,4.955-1.169,1.611,6.835a6.335,6.335,0,0,1,4.273-2.992c4.3-1.013,9,1.282,10.3,6.8,1.2,5.1-1.143,9.721-6.247,10.925-2,.471-4.218.017-5.295-1.21l-.06.015.415,1.76Zm11-11.351a4.2,4.2,0,1,0-8.186,1.9,4.164,4.164,0,0,0,5.036,3.319A4.255,4.255,0,0,0,1249.338,360.988Z"
                            transform="translate(-1177.55 -349.083)"
                        />
                        <path
                            d="M1292.607,364.689a3.811,3.811,0,0,0,3.789,3.451,3.583,3.583,0,0,0,3.186-1.408l5.2.308c-1.842,3.608-5.064,5.6-8.645,5.386a9.079,9.079,0,1,1,9.4-8.321,6.525,6.525,0,0,1-.2,1.34Zm7.98-2.966a4.019,4.019,0,0,0-7.714-.459Z"
                            transform="translate(-1209.479 -352.127)"
                        />
                        <path
                            d="M1343.506,381.99l.631-1.729-.057-.02c-1.207,1.158-3.424,1.327-5.526.56-4.725-1.727-6.651-6.642-4.883-11.482,1.726-4.725,6.543-7.275,11.124-5.6a5.768,5.768,0,0,1,3.875,3.963l.058.021.622-1.7,4.782,1.747-5.841,15.988Zm2.926-8.008a4.32,4.32,0,0,0-2.578-5.546,4.34,4.34,0,1,0,2.578,5.546Z"
                            transform="translate(-1236.043 -357.352)"
                        />
                        <path
                            d="M1390.906,397.1a3.915,3.915,0,0,0-1.611-4.194,4.339,4.339,0,0,0-5.083,7,3.885,3.885,0,0,0,4.3.388l4.149,3.106a9.14,9.14,0,0,1-13.186-12.475,9.107,9.107,0,0,1,15.55,9.265Z"
                            transform="translate(-1262.168 -371.431)"
                        />
                        <path
                            d="M1409.878,426.942l7.4-5.715c1.749-1.348,2.219-2.8,1.076-4.277-1.18-1.53-2.641-1.566-4.316-.272l-7.575,5.845-3.11-4.03,17.966-13.864,3.11,4.031-5.778,4.458a4.806,4.806,0,0,1,4.446,2.147c2.379,3.084,1.88,6.452-1.641,9.168l-8.474,6.54Z"
                            transform="translate(-1277.23 -381.609)"
                        />
                    </g>
                </g>
            </svg>
        `;

        parentBtn.innerHTML = circleLogo;
        circleLogoAnimation.playAnimation(parentBtn);
    },

    playAnimation: (parent) => {
        const target = parent.querySelector(".reverse_color .circleLogo");
        if (!target) { return }

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
        target.addEventListener("mouseleave", () =>hover.pause());
    },
};

// instance
const domTextBind = new DomTextBind();

// run
domTextBind.init();
customCursor.create();
circleLogoAnimation.bindSGV();
marquee(".marquee", 0.2);