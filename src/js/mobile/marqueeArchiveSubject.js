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
function start() {
    const subjectElem = document.querySelectorAll(".archive_list .subject");
    // options
    const speedRate = 50;

    subjectElem.forEach((elem, i) => {
        const container = elem.firstChild;
        let distance = container.offsetWidth / 2;
        const time = distance / speedRate;
        const even = (i + 1) % 2 === 0;

        if (even) {
            elem.classList.add("even");
            gsap.to(container, {
                duration: time,
                repeat: -1,
                x: distance,
                ease: "none",
            });
        } else {
            gsap.to(container, {
                duration: time,
                repeat: -1,
                x: "-" + distance,
                ease: "none",
            });
        }

        // const observer = new MutationObserver((mutations) => {
        //     mutations.forEach((mutation) => {
        //         distance = container.offsetWidth;
        //         ani.restart();
        //     });
        // });
        // observer.observe(container.parentElement, { attributeFilter: ["class"] });
    });
}

// 버그 : 영/한 컨버트 시 변수 distance값이 유동적으로 계속 변경되어야 함

export default copySubject;
