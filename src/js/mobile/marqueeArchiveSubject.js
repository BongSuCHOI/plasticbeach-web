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
    const speedRate = 20;

    subjectElem.forEach((elem, i) => {
        const isEven = (i + 1) % 2 === 0;
        const container = elem.firstChild;
        const distance = container.offsetWidth / 2;
        const time = distance / speedRate;
        const tweenDefaults = {
            duration: time,
            repeat: -1,
            ease: "none",
            paused: true,
        };

        gsap.killTweensOf(container);
        gsap.set(container, { x: 0 });

        const evenGSAP = gsap.to(container, {
            ...tweenDefaults,
            x: distance,
        });

        const oddGSAP = gsap.to(container, {
            ...tweenDefaults,
            x: "-" + distance,
        });

        if (isEven) {
            elem.classList.add("even");
            evenGSAP.play();
        } else {
            oddGSAP.play();
        }
    });
}

// const reverseColor = document.querySelector(".reverse_color");

// reverseColor.addEventListener("click", () => {
//     const toArchiveBtn = document.querySelector(".menu_box .to_archive");
//     const isOnArchive = toArchiveBtn.classList.contains("on");

//     if (IsMobile() && isOnArchive) start();
// });

/**
 * 바로 위 주석 해논 방법을 쓰던, 아래 방법을 쓰던
 * 위에 gsap.killTweensOf(container);이걸 주석으로 날리던, 그대로 살리던
 * contact에 포커싱이 돼있을 때 컬러반전을 시키면 archive가 display: none상태라 start() 함수가 실행돼도 재설정 후 실행하질 못함
 * navigation.js에서 contact, archive 스타일 방식을 바꾸거나 html 마크업 구조를 바꾸던가 해서 display: none 안시키는 쪽으로 생각해 봐야 할듯
 */

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        start();
    });
});

if (IsMobile()) {
    observer.observe(document.documentElement, { attributeFilter: ["color-theme"] });
}

export default copySubject;
