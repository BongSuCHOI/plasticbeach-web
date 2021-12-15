import platformCheck from './PlatformCheck.js';

function mouseOverTooltip(embedData) {
    if (!platformCheck()) { return }
    
    const hoverBox = document.querySelectorAll(".work_list .list");
    hoverBox.forEach((obj, i) => {
        const iframe = document.createElement("iframe");
        let tooltip = null;

        iframe.setAttribute("class", "video_tooltip");
        iframe.setAttribute("name", "work");
        iframe.setAttribute("frameborder", "0");
        iframe.src = `https://www.youtube.com/embed/${embedData[i]}?rel=0&mute=1&autoplay=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white"`;
        iframe.width = "560";
        iframe.height = "315";
        
        obj.addEventListener("mouseenter", function() {
            this.nextElementSibling.appendChild(iframe);
            tooltip = this.nextElementSibling.querySelector(".video_tooltip");
            tooltip.style.display = 'block';
        });
        
        obj.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            tooltip.style.left = mouseX + "px";
            tooltip.style.top = mouseY - tooltip.clientHeight + "px";

            if (tooltip.offsetTop < 0) {
                tooltip.style.top = mouseY + "px";
            }
        });

        obj.addEventListener("mouseleave", () => {
            tooltip.style.display = 'none';
            tooltip = null;
        });
    });
}

export default mouseOverTooltip;
