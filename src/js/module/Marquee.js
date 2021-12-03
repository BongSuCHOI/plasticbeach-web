function Marquee(selector, speed) {
    const parentElem = document.querySelector(selector);
    const childElem = parentElem.innerHTML;
    parentElem.insertAdjacentHTML("beforeend", childElem);
    const connectElem = parentElem.children[0];
    const marqueeElem = parentElem.children[1];
    let i = 0;
    let interval = setInterval(function () {
        marqueeElem.style.marginBottom = `-${i}px`;
        if (i > connectElem.clientHeight) {
            i = 0;
        }
        i = i + speed;
    }, 0);
}

export default Marquee;