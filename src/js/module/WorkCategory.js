import { gsap } from "gsap";

// workListCategory
let height;

function workCategory() {
    const list = document.querySelectorAll('.work_list .list');
    list.forEach(elem => {
        if (elem.clientHeight !== 0) height = elem.offsetHeight;

        const listCategory = elem.getAttribute('category');
        const tl = gsap.timeline();

        if (this.id == 'all') {
            tl
            .to(elem, {
                duration: 0.1,
                height: height,
            })
            .to(elem, {
                duration: 0,
                autoAlpha: 1,
                borderWidth: 2,
            })
        } else if (listCategory == this.id) {
            tl
            .to(elem, {
                duration: 0.1,
                height: height,
            })
            .to(elem, {
                duration: 0,
                autoAlpha: 1,
                borderWidth: 2,
            })
        } else {
            tl
            .to(elem, {
                duration: 0.1,
                height: 0
            })
            .to(elem, {
                duration: 0,
                autoAlpha: 0,
                borderWidth: 0,
            })
            .to(elem.nextElementSibling, {
                duration: 0,
                height: 0
            }, "<");
            elem.classList.remove("open")
            elem.nextElementSibling.classList.remove("open")
        }
    })
}

export default workCategory;