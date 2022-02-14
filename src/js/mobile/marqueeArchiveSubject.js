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

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        start();
    });
});

if (IsMobile()) {
    observer.observe(document.documentElement, { attributeFilter: ["color-theme"] });
}

export default copySubject;
