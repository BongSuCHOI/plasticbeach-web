import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
gsap.registerPlugin(ScrollTrigger);

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
        const lists = document.querySelectorAll('.list');
        lists.forEach((list, i) => {
            const tooltip = document.querySelector('.tooltip_box');
            const detail = list.querySelector(".detail");
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
            
            list.addEventListener('click', () => {
                if (!detail.classList.contains("open")) {
                    accordion.clear();
                    openD();
                    detail.classList.add("open");
                    gsap.to(tooltip, {
                        duration: 0.3,
                        opacity: 0,
                        display: "none"
                    })
                } else {
                    closeD();
                    detail.classList.remove("open");
                }
            });

            const openD = () => {
                const tl = gsap.timeline();
                return tl
                .to(list, {
                    duration: 0.5,
                    "--width": "100%",
                    ease: "expo.in",
                    // onUpdate: function() {
                    //     document.querySelector(".work_list").scrollTo(0, 50);
                    //     console.log(1)
                    // }
                })
                .to(detail, {
                    duration: 0.4,
                    height: detail.scrollHeight + "px",
                    borderWidth: 2,
                    ease: "power4.inOut",
                }, "<")
            }

            const closeD = () => {
                const tl = gsap.timeline();
                return tl
                .to(list, {
                    duration: 0.5,
                    "--width": "0%",
                    ease: "expo.in"
                })
                .to(detail, {
                    duration: 0.4,
                    height: 0,
                    borderWidth: 0,
                    ease: "power4.inOut"
                }, "<");
            }
        });

        accordion.scroll();
    },

    clear: () => {
        const details = document.querySelectorAll(".detail");
        details.forEach(detail => {
            if (!detail.classList.contains("open")) return;

            const tl = gsap.timeline();
            tl
            .to(detail.parentElement, {
                duration: 0.5,
                "--width": "0%",
                ease: "expo.in"
            })
            .to(detail, {
                duration: 0.4,
                height: 0,
                borderWidth: 0,
                ease: "power4.inOut"
            }, "<");

            detail.classList.remove("open");
        });
    },

    scroll: () => {
        const radios = document.querySelectorAll('[type=radio]');
        const lists = document.querySelectorAll('.list');
        const scroller = document.querySelector(".work_list");
        const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1 });
        bodyScrollBar.track.yAxis.element.remove();
        bodyScrollBar.track.xAxis.element.remove();

        // to keep ScrollTrigger and Smooth Scrollbar in sync
        ScrollTrigger.scrollerProxy(scroller, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });

        // update ScrollTrigger when scrollbar updates
        bodyScrollBar.addListener(ScrollTrigger.update);

        // scrollTo
        lists.forEach(list => {
            let scrollToHere = list.offsetTop;
            list.addEventListener("click", () => bodyScrollBar.scrollTo(0, scrollToHere, 800))
        })

        // workListCategory
        radios.forEach(elem => elem.addEventListener('click', () => bodyScrollBar.scrollTo(0, 0, 500)));
    }
}

export default accordion;