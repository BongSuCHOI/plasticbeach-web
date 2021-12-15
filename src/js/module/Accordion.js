function accordion() {
    const accordionElem = document.getElementsByClassName('accro_btn'); // dt(.list)

    let action = function() {
        for (var i=0; i < accordionElem.length ; i++) {
            accordionElem[i].addEventListener('click', change);
        }
    }

    let clear = function() {
        for (var i=0; i < accordionElem.length ; i++) {
            const accordionCon = accordionElem[i].nextElementSibling;
            
            accordionElem[i].classList.remove('open');
            accordionCon.style.maxHeight = null;
        }
    }

    let change = function(e) {
        const clickDt = e.currentTarget;
        const accordionCon = clickDt.nextElementSibling;
        
        if (clickDt.classList.contains('open')) {
            clickDt.classList.remove('open');
            accordionCon.style.maxHeight = null;
            return
        }

        clear();
        clickDt.classList.add('open');
        accordionCon.style.maxHeight = accordionCon.scrollHeight + "px";
    }

    action();
}
accordion()

export default accordion;