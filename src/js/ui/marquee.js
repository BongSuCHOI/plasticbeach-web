// module
import IsMobile from "../utils/isMobile";

// options
const speed = 0.9;
let distance = 0;

// set marquee
function setMarquee() {
    if (IsMobile()) return;
    const parentElem = document.querySelector(".marquee");
    const childElem = parentElem.children[0];
    const copyText = childElem.innerText;
    childElem.append(copyText);

    moveMarquee();
}

// move marquee
function moveMarquee() {
    const target = document.querySelector(".marquee_text");
    target.style.marginTop = `${distance}px`;

    if (distance > target.clientWidth / 2) distance = 0;
    distance += speed;

    requestAnimationFrame(moveMarquee);
}

export default setMarquee;
