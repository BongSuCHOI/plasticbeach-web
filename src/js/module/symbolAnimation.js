// library
import { gsap } from "gsap";

// symbol Animation
function symbolAnimation() {
    const parentBtn = document.querySelector(".reverse_color");
    const target = parentBtn.querySelector(".circleLogo");

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
    target.addEventListener("mouseleave", () => hover.pause());
}

export default symbolAnimation;
