import { gsap } from "gsap";
import platformCheck from './PlatformCheck.js';

function mouseOverTooltip(embedData) {
    if (!platformCheck()) { return }
    
    const tooltipBox = document.querySelector(".tooltip_box");
    const iframe = document.createElement("iframe");
    const hoverBox = document.querySelectorAll(".work_list .list button");
    
    iframe.setAttribute("class", "video_tooltip");
    iframe.setAttribute("name", "work");
    iframe.setAttribute("frameborder", "0");
    iframe.width = "560";
    iframe.height = "315";
    tooltipBox.appendChild(iframe);

    hoverBox.forEach((obj, i) => {
        obj.addEventListener("mouseenter", function() {
            gsap.to(".cursor", {
                duration: 0.1,
                scale: 1.8,
                mixBlendMode: "difference"
            })
            gsap.to(tooltipBox, {
                duration: 0.3,
                opacity: 1,
                display: "block",
            })
            iframe.src = `https://www.youtube.com/embed/${embedData[i]}?rel=0&autoplay=1&mute=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white"`;
        });
        
        obj.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            tooltipBox.style.left = mouseX + "px";
            tooltipBox.style.top = mouseY - tooltipBox.clientHeight + "px";

            if (tooltipBox.offsetTop < 0) {
                tooltipBox.style.top = mouseY + "px";
            }
        });

        obj.addEventListener("mouseleave", function() {
            gsap.to(".cursor", {
                duration: 0.1,
                scale: 1,
                mixBlendMode: "normal"
            })
            gsap.to(tooltipBox, {
                duration: 0.3,
                opacity: 0,
                display: "none",
            })
        });
    });
}

export default mouseOverTooltip;
