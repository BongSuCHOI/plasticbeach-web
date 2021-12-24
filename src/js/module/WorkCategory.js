import { gsap } from "gsap";

// workListCategory
let height;

function workCategory() {
    const list = document.querySelectorAll('.work_list .list');
    list.forEach((elem, i, arr) => {
        if (elem.clientHeight !== 0) height = elem.offsetHeight;

        const listCategory = elem.getAttribute('category');
        const tl = gsap.timeline();
        const arrs = [...arr];
        const check = (elem) => elem.classList.contains("open");

        if (this.id == 'all') { // 전체
            tl
            .to(elem, {
                duration: 0,
                display: "flex"
            })
            .to(elem, {
                duration: 0.3,
                height: height,
            }, "<")
            .to(elem, {
                duration: 0,
                autoAlpha: 1,
                borderWidth: 2,
            })
        } else if (listCategory == this.id) { // 선택한 카테고리에 맞는 것
            if (arrs.some(check)) { // 상세가(카테고리 상관없이 전체) 열려 있다면
                tl
                .to(elem, {
                    duration: 0,
                    display: "flex"
                })
                .to(elem, {
                    duration: 0.3,
                    height: height,
                })
                .to(elem, {
                    duration: 0,
                    autoAlpha: 1,
                    borderWidth: 2,
                })
            } else { // 상세가(카테고리 상관없이 전체) 닫혀 있다면
                tl
                .to(elem, {
                    duration: 0,
                    display: "flex"
                })
                .to(elem, {
                    duration: 0.3,
                    height: height,
                })
                .to(elem, {
                    duration: 0,
                    autoAlpha: 1,
                    borderWidth: 2,
                })
            }
        } else { // 선택한 카테고리에 맞지 않은 것
            if (arrs.some(check)) { // 상세가(카테고리 상관없이 전체) 열려 있다면
                if (elem.nextElementSibling.clientHeight == 0) { // 선택한 카테고리에 맞지 않은 리스트의 상세가 열려있지 않다면
                    tl
                    .to(elem, {
                        duration: 0.3,
                        height: 0,
                        borderWidth: 0,
                    })
                    .to(elem, {
                        duration: 0,
                        display: "none"
                    }, ">");
                }
                tl
                .to(elem, {
                    duration: 0.5,
                    "--width": "0%",
                    ease: "expo.in"
                })
                .to(elem.nextElementSibling, {
                    duration: 0.4,
                    height: 0,
                    borderWidth: 0,
                    ease: "power4.inOut"
                }, "<")
                .to(elem, {
                    duration: 0.3,
                    height: 0,
                    borderWidth: 0,
                }, "-=0.1")
                .to(elem, {
                    duration: 0,
                    display: "none"
                }, ">");

                elem.classList.remove("open")
                elem.nextElementSibling.classList.remove("open")
            } else { // 상세가(카테고리 상관없이 전체) 닫혀 있다면
                tl
                .to(elem, {
                    duration: 0.3,
                    height: 0,
                    borderWidth: 0,
                })
                .to(elem, {
                    duration: 0,
                    display: "none"
                }, ">");
            }
        }
    })
}

export default workCategory;