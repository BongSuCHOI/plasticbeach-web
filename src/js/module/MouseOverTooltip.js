import { gsap } from "gsap";
import platformCheck from './PlatformCheck.js';

function mouseOverTooltip(embedData) {
    if (!platformCheck()) { return }
    
    const tooltipBox = document.querySelector(".tooltip_box");
    const iframe = document.createElement("iframe");
    const hoverBox = document.querySelectorAll(".work_list .list");
    
    iframe.setAttribute("class", "video_tooltip");
    iframe.setAttribute("name", "work");
    iframe.setAttribute("frameborder", "0");
    iframe.width = "560";
    iframe.height = "315";
    tooltipBox.appendChild(iframe);

    // gif test
    const img = document.getElementById("gifTest");
    const importImg = (r) => {
        let images = {};
        r.keys().map(item => images[item.replace('./', '')] = r(item) );
        return images;
    };
    const imgs = importImg(require.context('../../images/img', false, /\.gif$/));
    const imgsUrl = Object.values(imgs);
    img.src = imgsUrl;
    img.style.width = "560px";
    img.style.height = "315px";
    img.style.position = "absolute";
    // gif test end

    hoverBox.forEach((obj, i) => {
        // gif & hover test
        obj.addEventListener("mouseenter", function() {
            if (obj.getAttribute("category") == "mv") {
                img.style.display = "block";
                gsap.to(obj, {
                    duration: 0.2,
                    borderWidth: 6
                })
                iframe.style.display = "none;"
            } else {
                iframe.style.display = "block;"
                gsap.to(obj.children, {
                    duration: 0.2,
                    opacity: 0.3,
                })
                iframe.src = `https://www.youtube.com/embed/${embedData[i]}?rel=0&autoplay=1&mute=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white"`;
                img.style.display = "none";
            }
            gsap.to(tooltipBox, {
                duration: 0.3,
                opacity: 1,
                display: "block",
            })
        });
        // gif & hover test end

        // obj.addEventListener("mouseenter", function() {
        //     gsap.to(obj.children, {
        //         duration: 0.2,
        //         opacity: 0.3,
        //     })
        //     gsap.to(tooltipBox, {
        //         duration: 0.3,
        //         opacity: 1,
        //         display: "block",
        //     })
        //     iframe.src = `https://www.youtube.com/embed/${embedData[i]}?rel=0&autoplay=1&mute=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white"`;
        // });
        
        obj.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            tooltipBox.style.left = mouseX + "px";
            tooltipBox.style.top = mouseY - tooltipBox.clientHeight + "px";

            if (tooltipBox.offsetTop < 0) {
                tooltipBox.style.top = mouseY + "px";
            }
        });

        // gif & hover test
        obj.addEventListener("mouseleave", function() {
            if (obj.getAttribute("category") == "mv") {
                gsap.to(obj, {
                    duration: 0.2,
                    borderWidth: 1
                })
            } else {
                gsap.to(obj.children, {
                    duration: 0.2,
                    opacity: 1,
                })
            }
            gsap.to(tooltipBox, {
                duration: 0.3,
                opacity: 0,
                display: "none",
            })
        });
        // gif & hover test end

        // obj.addEventListener("mouseleave", function() {
        //     gsap.to(obj.children, {
        //         duration: 0.2,
        //         opacity: 1,
        //     })
        //     gsap.to(tooltipBox, {
        //         duration: 0.3,
        //         opacity: 0,
        //         display: "none",
        //     })
        // });
    });
}

export default mouseOverTooltip;
