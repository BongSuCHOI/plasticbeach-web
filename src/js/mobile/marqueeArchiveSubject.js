// library import
import { gsap } from "gsap";

// module import
import IsMobile from "../utils/isMobile";

// copy title
function copySubject() {
    if (!IsMobile()) return;
    const targets = document.querySelectorAll(".archive_list .subject span");

    targets.forEach((elem) => {
        const tParent = elem.parentNode;
        const marqueeBox = tParent.parentNode;
        const boxWidth = marqueeBox.offsetWidth;
        const cloneRatio = Math.round(boxWidth / elem.offsetWidth) + 1;
        const howManyClones = cloneRatio % 2 === 0 ? cloneRatio + 1 : cloneRatio;
        let i = 0;

        while (i < howManyClones) {
            const targetClone = elem.cloneNode(true);
            tParent.append(targetClone);
            i++;
        }
    });

    start();
}

// start
function start() {
    const subjectElem = document.querySelectorAll(".archive_list .subject");
    const speedRate = 25;

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

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        start();
    });
});

if (IsMobile()) {
    observer.observe(document.documentElement, { attributeFilter: ["color-theme"] });
}

export default copySubject;
