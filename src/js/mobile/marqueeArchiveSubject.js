// library import
import { gsap } from "gsap";

// module import
import IsMobile from "../utils/isMobile";

// copy title
function copySubject() {
    if (!IsMobile()) return;
    const subjectElem = document.querySelectorAll(".archive_list .subject span");

    subjectElem.forEach((elem) => {
        const subjectParent = elem.parentNode;
        const subjectClone1 = elem.cloneNode(true);
        subjectParent.append(subjectClone1);
    });

    start(subjectElem);
}

// start
function start(target) {
    // options
    const speedRate = 50;

    target.forEach((elem) => {
        const container = elem.parentElement;
        let distance = container.offsetWidth / 2;
        const time = distance / speedRate;

        gsap.to(container, {
            duration: time,
            repeat: -1,
            x: "-" + distance,
            ease: "none",
        });

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
// 남은 작업 : 홀수는 지금처럼 오른쪽 > 왼쪽, 짝수는 왼쪽 > 오른쪽 으로 흐르도록

export default copySubject;
