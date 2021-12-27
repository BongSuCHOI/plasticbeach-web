import { gsap } from "gsap";

// workListCategory
function workCategory() {
    const lists = document.querySelectorAll('.work_list .list');

    lists.forEach(elem => {
        const detail = elem.querySelector(".detail");
        const listCategory = elem.getAttribute('category');
        const open = Boolean(elem.querySelector(".detail.open"));
        const tl = gsap.timeline();

        if (this.id == 'all') { // 전체
            tl
            .to(elem, {
                duration: 0,
                display: "block"
            })
            .to(elem, {
                duration: 0.3,
                height: "auto",
            }, "<");
        } else if (listCategory == this.id) { // 선택한 카테고리에 맞는 것
            tl
            .to(elem, {
                duration: 0,
                display: "block"
            })
            .to(elem, {
                duration: 0.3,
                height: "auto",
            });
        } else { // 선택한 카테고리에 맞지 않은 것
            if (open) { // 상세가(카테고리 상관없이 전체) 열려 있다면
                if (detail.clientHeight == 0) { // 선택한 카테고리에 맞지 않은 리스트의 상세가 열려있지 않다면
                    tl
                    .to(elem, {
                        duration: 0.3,
                        height: 0,
                    })
                    .to(elem, {
                        duration: 0,
                        display: "none"
                    }, ">");
                }
                tl
                .to(elem, {
                    duration: 0.3,
                    height: 0,
                })
                .to(elem, {
                    duration: 0,
                    display: "none"
                }, ">")
                .to(elem, {
                    duration: 0,
                    "--width": "0%",
                }, ">")
                .to(detail, {
                    duration: 0,
                    height: 0,
                    borderWidth: 0,
                }, "<");

                detail.classList.remove("open")
            } else { // 상세가(카테고리 상관없이 전체) 닫혀 있다면
                tl
                .to(elem, {
                    duration: 0.3,
                    height: 0,
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