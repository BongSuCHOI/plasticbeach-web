// module
import platformCheck from "./platformCheck";

// Marquee
function marquee(selector, speed) {
    if (!platformCheck()) return;
    const parentElem = document.querySelector(selector);
    const childElem = parentElem.children[0];
    const copyText = childElem.innerText;
    let i = 0;

    childElem.append(copyText);

    setInterval(function () {
        childElem.style.marginTop = `${i}px`;
        if (i > childElem.clientWidth / 2) {
            i = 0;
        }
        i = i + speed;
    }, 0);
}

export default marquee;
