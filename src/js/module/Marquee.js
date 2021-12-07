function Marquee(selector, speed) {
    const parentElem = document.querySelector(selector);
    const childElem = parentElem.children[0];
    const copyText = childElem.innerText;
    childElem.append(copyText)
    let i = 0;
    
    setInterval(function () {
        childElem.style.marginTop = `${i}px`;
        if (i > childElem.clientWidth/2) {
            i = 0;
        }
        i = i + speed;
    }, 0);
}

export default Marquee;