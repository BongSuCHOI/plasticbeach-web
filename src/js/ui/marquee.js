// module
import platformCheck from "../utils/platformCheck";

// options
let i = 0;
let speed = 0.9;

// set marquee
function setMarquee() {
    if (!platformCheck()) return;
    const parentElem = document.querySelector(".marquee");
    const childElem = parentElem.children[0];
    const copyText = childElem.innerText;
    childElem.append(copyText);

    moveMarquee();
}

// move marquee
function moveMarquee() {
    const target = document.querySelector(".marquee_text");
    target.style.marginTop = `${i}px`;

    if (i > target.clientWidth / 2) i = 0;
    i += speed;

    requestAnimationFrame(moveMarquee);
}

export default setMarquee;
