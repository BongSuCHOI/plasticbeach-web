import { gsap } from "gsap";

const customCursor = {
    // Created Cursor Element
    create: function () {
        const createElem = document.createElement("div");
        const createPointer = document.createElement("span");
        createElem.setAttribute("class", "cursor");
        createElem.appendChild(createPointer);
        document.body.appendChild(createElem);

        customCursor.init();
    },

    // Cursor Init
    init: function () {
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

        // customCursor.reverseColor(cursor);
        customCursor.run({ pos, mouse, speed, xSet, ySet });
    },

    // Update Coordinate
    run: function (rest) {
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
    reverseColor: function (cursor) {
        const hoverTag = document.querySelectorAll(".hover");
        const arr = [];

        arr.push(...hoverTag);
        arr.forEach((obj) => {
            obj.addEventListener("mouseenter", () => {
                cursor.classList.add("hover");
            });
            obj.addEventListener("mouseleave", () => {
                cursor.classList.remove("hover");
            });
        });
    },
};

export default customCursor;