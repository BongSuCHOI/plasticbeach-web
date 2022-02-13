// library import
import { gsap } from "gsap";

// module import
import IsMobile from "../utils/isMobile";

// copy title
function copySubject() {
    if (!IsMobile()) return;
    const subjectText = document.querySelectorAll(".archive_list .subject span");

    subjectText.forEach((elem) => {
        const subjectParent = elem.parentNode;
        const subjectClone1 = elem.cloneNode(true);
        subjectParent.append(subjectClone1);
    });

    start();
}

// start
function start(k = "n") {
    const subjectElem = document.querySelectorAll(".archive_list .subject");
    const speedRate = 20;

    if (k === "n") {
        subjectElem.forEach((elem, i) => {
            const container = elem.firstChild;
            const distance = container.offsetWidth / 2;
            const time = distance / speedRate;
            const even = (i + 1) % 2 === 0;
            gsap.killTweensOf(container);
            gsap.set(container, { x: 0 });

            const isEvenGSAP = gsap.to(container, {
                duration: time,
                repeat: -1,
                x: distance,
                ease: "none",
                paused: true,
            });

            const isOddGSAP = gsap.to(container, {
                duration: time,
                repeat: -1,
                x: "-" + distance,
                ease: "none",
                paused: true,
            });

            if (even) {
                elem.classList.add("even");
                isEvenGSAP.play();
            } else {
                isOddGSAP.play();
            }
        });
    }

    if (k === "k") {
        subjectElem.forEach((elem, i) => {
            const container = elem.firstChild;
            const distance = container.offsetWidth / 2;
            const time = distance / speedRate;
            const even = (i + 1) % 2 === 0;
            gsap.killTweensOf(container);
            gsap.set(container, { x: 0 });

            const isEvenGSAP = gsap.to(container, {
                duration: time,
                repeat: -1,
                x: distance,
                ease: "none",
                paused: true,
            });

            const isOddGSAP = gsap.to(container, {
                duration: time,
                repeat: -1,
                x: "-" + distance,
                ease: "none",
                paused: true,
            });

            if (even) {
                isEvenGSAP.play();
            } else {
                isOddGSAP.play();
            }
        });
    }
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const theme = mutation.target.getAttribute("color-theme");
        if (theme === "blue") {
            start("k");
        } else {
            start("n");
        }
    });
});
observer.observe(document.documentElement, { attributeFilter: ["color-theme"] });

// 버그 : 영/한 컨버트 시 변수 distance값이 유동적으로 계속 변경되어야 함
// 위 버그는 잡았음 리팩토링 필요

export default copySubject;
