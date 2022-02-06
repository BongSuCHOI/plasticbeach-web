// library
import { gsap } from "gsap";

// module
import IsMobile from "../utils/isMobile";

// init cursor
function init() {
    if (IsMobile()) return;
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor_dot");
    const tooltipBox = document.querySelector(".tooltip_box");
    const set = {
        cursorX: gsap.quickSetter(cursor, "x", "px"),
        cursorY: gsap.quickSetter(cursor, "y", "px"),
        dotX: gsap.quickSetter(dot, "x", "px"),
        dotY: gsap.quickSetter(dot, "y", "px"),
        tooltipX: gsap.quickSetter(tooltipBox, "x", "px"),
        tooltipY: gsap.quickSetter(tooltipBox, "y", "px"),
    };
    const speed = {
        cursor: 1,
        dot: 0.1,
        tooltip: 0.1,
    };
    const pos = {
        cursor: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        },
        dot: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        },
        tooltip: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        },
    };
    const mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    };
    const gsapSet = (elem) =>
        gsap.set(elem, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
        });

    gsapSet(cursor);
    gsapSet(dot);
    run({ set, speed, pos, mouse });
    event();
}

// run cursor
function run(rest) {
    const { set, speed, pos, mouse } = rest;
    const DT = (targetSpeed) => 1.0 - Math.pow(1.0 - targetSpeed, gsap.ticker.deltaRatio());
    const posXY = (xy, mouseXY, dt) => (mouseXY - xy) * dt;

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    // Follow Mouse
    gsap.ticker.add(() => {
        const cursorDT = DT(speed.cursor);
        const dotDT = DT(speed.dot);
        const tooltipDT = DT(speed.tooltip);
        let cPosX = (pos.cursor.x += posXY(pos.cursor.x, mouse.x, cursorDT));
        let cPosY = (pos.cursor.y += posXY(pos.cursor.y, mouse.y, cursorDT));
        let dPosX = (pos.dot.x += posXY(pos.dot.x, mouse.x, dotDT));
        let dPosY = (pos.dot.y += posXY(pos.dot.y, mouse.y, dotDT));
        let tPosX = (pos.tooltip.x += posXY(pos.tooltip.x, mouse.x, tooltipDT));
        let tPosY = (pos.tooltip.y += posXY(pos.tooltip.y, mouse.y, tooltipDT));

        set.cursorX(cPosX);
        set.cursorY(cPosY);
        set.dotX(dPosX);
        set.dotY(dPosY);
        set.tooltipX(tPosX);
        set.tooltipY(tPosY);
    });
}

// cursor event
function event() {
    const hoverSvg = document.querySelector(".cursor_dot .hover");
    const targets = document.querySelectorAll(".cursor_effect");
    const cursor = document.querySelector(".cursor");
    const cursorText = document.querySelectorAll(".cursor_text");
    const cursorPointer = document.querySelectorAll(".cursor_pointer");
    const dot = document.querySelector(".cursor_dot");

    // change cursor type
    const enterFuc = (type) => {
        cursor.classList.add(type);
        cursor.classList.remove("default");
    };
    const leaveFuc = (type) => {
        cursor.classList.remove(type);
        cursor.classList.add("default");
    };

    // mouse effect
    const enterEffect = () => {
        return gsap.to(hoverSvg, {
            duration: 0.3,
            scale: 1,
        });
    };
    const leaveEffect = () => {
        return gsap.to(hoverSvg, {
            duration: 0.3,
            scale: 0,
        });
    };

    // change cursor type - eventListener
    cursorText.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            enterFuc("text");
        });
        elem.addEventListener("mouseleave", () => {
            leaveFuc("text");
        });
    });
    cursorPointer.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            enterFuc("pointer");
        });
        elem.addEventListener("mouseleave", () => {
            leaveFuc("pointer");
        });
    });

    // mouse effect - eventListener
    targets.forEach((elem) => {
        elem.addEventListener("mouseenter", enterEffect);
        elem.addEventListener("mouseleave", leaveEffect);
    });

    // first move mouse
    window.addEventListener(
        "mousemove",
        () => {
            const tl = gsap.timeline();
            tl.to(cursor, {
                opacity: 1,
                duration: 0.3,
            }).to(
                dot,
                {
                    opacity: 1,
                    duration: 0.3,
                },
                "<"
            );
        },
        { once: true }
    );
}

export default init;
