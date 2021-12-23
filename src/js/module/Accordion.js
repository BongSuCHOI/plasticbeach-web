import { gsap } from "gsap";

const accordion = {
    importImgs: (r) => {
        let images = {};
        r.keys().map(item => images[item.replace('./', '')] = r(item) );
        return images;
    },

    props: (data) => {
        const imgs = accordion.importImgs(require.context('../../images/img', false, /\.(jpe?g|png|gif)$/));
        const imgsUrl = Object.values(imgs);
        accordion.open(data, imgsUrl)
    },

    open: (data, imgsUrl) => {
        const targets = document.querySelectorAll('.list');

        targets.forEach((elem, i) => {
            const tooltip = document.querySelector('.tooltip_box');
            const detail = elem.nextElementSibling;
            const html = `
                <div class="carousel">
                    <img src="${imgsUrl[i]}" alt="${data[i].name}" />
                </div>
                <div class="info_text">
                    <p>VFX. ${data[i].vfx}</p>
                    <p>VFX Supervisor. ${data[i].sv}</p>
                    <p>VFX Assistant Supervisor. ${data[i].asv}</p>
                    <p>VFX Project Manager. ${data[i].pm}</p>
                    <p>VFX Producer. ${data[i].pd}</p>
                    <p>3D Artist. ${data[i].art3d}</p>
                    <p>2D Artist. ${data[i].art2d}</p>
                    <p>FX Artist. ${data[i].fx}</p>
                </div>
            `;
            detail.innerHTML = html;
            
            elem.addEventListener('click', () => {
                if (!detail.classList.contains("open")) {
                    accordion.clear();
                    tooltip.style.display = "none";
                    openD();
                    elem.classList.add("open");
                    detail.classList.add("open");
                } else {
                    closeD();
                    elem.classList.remove("open");
                    detail.classList.remove("open");
                }
            });

            const openD = () => {
                const tl = gsap.timeline();
                return tl
                .to(elem, {
                    duration: 0.5,
                    "--width": "100%",
                    ease: "expo.in",
                    onComplete: accordion.scroll,
                    onCompleteParams: [elem, i]
                })
                .to(detail, {
                    duration: 0.3,
                    height: detail.scrollHeight + "px",
                    borderWidth: 2,
                    ease: "power4.inOut",
                }, "<")
            }

            const closeD = () => {
                const tl = gsap.timeline();
                return tl
                .to(elem, {
                    duration: 0.5,
                    "--width": "0%",
                    ease: "expo.in"
                })
                .to(detail, {
                    duration: 0.3,
                    height: 0,
                    borderWidth: 0,
                    ease: "power4.inOut"
                }, "<");
            }
        });
    },

    clear: () => {
        const details = document.querySelectorAll(".detail");
        details.forEach(detail => {
            if (!detail.classList.contains("open")) return;

            const tl = gsap.timeline();
            tl
            .to(detail.previousElementSibling, {
                duration: 0.5,
                "--width": "0%",
                ease: "expo.in"
            })
            .to(detail, {
                duration: 0.3,
                height: 0,
                borderWidth: 0,
                ease: "power4.inOut"
            });
            detail.classList.remove("open");
        });
    },

    scroll: (elem, i) => {
        elem.parentNode.scrollTo({
            left: 0,
            top: (elem.clientHeight + 2) * i,
            behavior: 'smooth'
        })
    }
}

export default accordion;