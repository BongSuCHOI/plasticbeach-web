import platformCheck from './PlatformCheck.js';

function mouseOverTooltip() {
    if (!platformCheck()) { return }
    
    const hoverBox = document.querySelectorAll(".work_list .list");
    hoverBox.forEach((obj) => {
        const tooltip = obj.querySelector(".video_tooltip");
        obj.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            tooltip.style.left = mouseX + "px";
            tooltip.style.top = mouseY - tooltip.clientHeight + "px";

            if (tooltip.offsetTop < 0) {
                tooltip.style.top = mouseY + "px";
            }
        });

        obj.addEventListener("mouseenter", () => {
            tooltip.contentWindow.postMessage('{"event":"command","func":"' + "playVideo" + '","args":""}', "*");
        });
        obj.addEventListener("mouseleave", () => {
            tooltip.contentWindow.postMessage('{"event":"command","func":"' + "pauseVideo" + '","args":""}', "*");
        });
    });
}

export default mouseOverTooltip;
