// library
import { gsap } from "gsap";

// module
import IsMobile from "../utils/isMobile";

// symbol Animation
function symbolAnimation() {
    const parentBtn = document.querySelector(".reverse_color");
    const target = parentBtn.querySelector(".circleText");
    const symbol = parentBtn.querySelector(".symbol");
    const tl = gsap.timeline();
    tl.to(target, {
        duration: 0.4,
        opacity: 0.3,
        ease: "circ.inOut",
    }).to(
        symbol,
        {
            duration: 0.4,
            opacity: 0.3,
            rotate: 360,
            ease: "circ.inOut",
        },
        "<"
    );
    tl.pause();

    gsap.from(target, {
        duration: 10,
        repeat: -1,
        rotate: -360,
        ease: "none",
    });

    if (IsMobile()) return;
    parentBtn.addEventListener("mouseenter", () => tl.play());
    parentBtn.addEventListener("mouseleave", () => tl.reverse());
}

symbolAnimation();
