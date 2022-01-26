// library import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Swiper, { Pagination, Navigation, Lazy } from "swiper";
import "swiper/css/bundle";
gsap.registerPlugin(ScrollTrigger);

// module import
import platformCheck from "./module/platformCheck.js";

// Prod Data
function prodData(data) {
    bindDetail(data);
    listOverEvent(data);
}

// import archive detail img
function importImgs(r) {
    let images = {};
    r.keys().map((item) => (images[item.replace("./", "")] = r(item)));
    return images;
}

// bind archive detail (lazy-loading)
function bindDetail(data) {
    const detailData = data.map((d) => d.detail);
    const imgs = importImgs(require.context("../images/img", false, /\.(jpe?g|png|gif)$/));
    const lists = document.querySelectorAll(".list");

    // 처음 화면에 보여질 리스트 갯수 계산
    const winHeight = window.innerHeight;
    const listHeight = document.querySelector(".disposable").clientHeight;
    const lengthMath = Math.floor(winHeight / listHeight);
    const listLength = lengthMath + Math.round(lengthMath / 2);
    let pageNum = 1;

    // 계산 후 삭제 되는 일회성 element
    document.querySelector(".disposable").remove();

    // 계산 한 갯수의 리스트에만 상세내용 bind
    const addDetail = () => {
        for (let i = (pageNum - 1) * listLength + 1; i <= pageNum * listLength; i++) {
            let I = i - 1;
            if (I == data.length) break;
            const detail = lists[I].querySelector(".detail");

            detail.innerHTML = `
                <div class="swiper slide-${data[I].name}">
                    <div class="swiper-wrapper">
                        ${detailData[I].imgName
                            .map(
                                (name) => `
                            <div class="swiper-slide">
                                <img data-src="${imgs[name]}" alt="" class="swiper-lazy" />
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </div>
                        `
                            )
                            .join("")}
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="info_box">
                    <div class="left">
                        <p class="project_name">
                            <span class="year">${data[I].year}</span>
                            ${data[I].title.en.toUpperCase()}
                        </p>
                        <a class="link" href="https://www.youtube.com/watch?v=${data[I].url}" target="_blank">WATCH ON YOUTUBE</a>
                    </div>
                    <div class="right">
                        <p>VFX. ${detailData[I].vfx}</p>
                        <p>VFX Supervisor. ${detailData[I].sv}</p>
                        <p>VFX Assistant Supervisor. ${detailData[I].asv}</p>
                        <p>VFX Project Manager. ${detailData[I].pm}</p>
                        <p>VFX Producer. ${detailData[I].pd}</p>
                        <p>3D Artist. ${detailData[I].art3d}</p>
                        <p>2D Artist. ${detailData[I].art2d}</p>
                        <p>FX Artist. ${detailData[I].fx}</p>
                    </div>
                </div>
            `;

            // swiper(각 리스트마다)
            const swiper = new Swiper(`.slide-${data[I].name}`, {
                modules: [Pagination, Navigation, Lazy],
                speed: 500,
                pagination: {
                    el: ".swiper-pagination",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                },
            });
        }
    };

    // intersection observer
    const io = new IntersectionObserver(([entry], observer) => {
        if (!entry.isIntersecting) return;
        addDetail(++pageNum);
        observer.unobserve(entry.target);
        ioReStart(observer);
        listClickEvent();
    });

    // restart intersection observer
    const ioReStart = (intersectionObserver) => {
        const currentLoadSwiper = document.querySelectorAll(".swiper");
        const lastElem = currentLoadSwiper[currentLoadSwiper.length - 1];
        const currentLastLi = lastElem.parentElement.parentElement;
        const totalPageNum = Math.ceil(data.length / listLength);

        if (pageNum < totalPageNum) {
            intersectionObserver.observe(currentLastLi);
        } else if (pageNum >= totalPageNum) {
            intersectionObserver.disconnect();
        }
    };

    addDetail();
    ioReStart(io);
    smoothScroll();
    listClickEvent();
}

// smoothScroll
function smoothScroll() {
    const scroller = document.querySelector(".scroll_box");
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
        },
    });

    // update ScrollTrigger when scrollbar updates
    bodyScrollBar.addListener(ScrollTrigger.update);

    return bodyScrollBar;
}

// list mouse over event
function listOverEvent(data) {
    if (!platformCheck()) return;
    const embedUrl = data.map((d) => d.url);
    const hoverBox = document.querySelectorAll(".archive_list .list button");
    const tooltipBox = document.querySelector(".tooltip_box");
    const iframe = document.querySelector(".video_tooltip");

    // mouse enter/leave event
    const enterFuc = () => {
        return gsap.to(tooltipBox, {
            duration: 0.3,
            opacity: 1,
            display: "block",
        });
    };
    const leaveFuc = () => {
        return gsap.to(tooltipBox, {
            duration: 0.3,
            opacity: 0,
            display: "block",
        });
    };

    // eventlistener and embed url
    hoverBox.forEach((obj, i) => {
        // const src = `https://www.youtube.com/embed/${embedUrl[i]}?rel=0&autoplay=1&mute=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white"`;

        obj.addEventListener("mouseenter", () => {
            enterFuc();
            // iframe.src = src;
        });
        obj.addEventListener("mouseleave", leaveFuc);
    });
}

// list click event
function listClickEvent() {
    const bodyScrollBar = smoothScroll();
    const lists = document.querySelectorAll(".list");
    const tooltip = document.querySelector(".tooltip_box");
    const radios = document.querySelectorAll("[type=radio]");

    // click
    lists.forEach((list) => {
        const btn = list.querySelector("button");
        const detail = list.querySelector(".detail");

        // 카테고리 변경 할 때마다 각 리스트 offsetTop 재계산
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => (scrollToHere = mutation.target.offsetTop));
        });
        let scrollToHere = list.offsetTop;
        observer.observe(list, { attributeFilter: ["style"] });

        // accordion open
        const open = () => {
            const tl = gsap.timeline();
            tl.to(btn, {
                duration: 0.5,
                "--width": "100%",
                ease: "expo.in",
            }).to(
                detail,
                {
                    force3D: true,
                    duration: 0.4,
                    height: detail.scrollHeight + "px",
                    borderWidth: 2,
                    ease: "power4.inOut",
                },
                "<"
            );
            return tl;
        };

        // accordion close
        const close = () => {
            const tl = gsap.timeline();
            tl.to(btn, {
                duration: 0.5,
                "--width": "0%",
                ease: "expo.in",
            }).to(
                detail,
                {
                    duration: 0.4,
                    height: 0,
                    borderWidth: 0,
                    ease: "power4.inOut",
                },
                "<"
            );
            return tl;
        };

        // accordion clear(all close)
        const clear = (e) => {
            const target = e.currentTarget.parentElement;
            const siblings = [...target.parentElement.children].filter((sibling) => sibling != target);

            siblings.forEach((elem) => {
                const btnAll = elem.querySelector("button");
                const detailAll = elem.querySelector(".detail");
                const tl = gsap.timeline();
                tl.to(btnAll, {
                    duration: 0.5,
                    "--width": "0%",
                    ease: "expo.in",
                }).to(
                    detailAll,
                    {
                        duration: 0.4,
                        height: 0,
                        borderWidth: 0,
                        ease: "power4.inOut",
                    },
                    "<"
                );
                detailAll.classList.remove("open");
            });
        };

        // event
        btn.addEventListener("click", (e) => {
            bodyScrollBar.scrollTo(0, scrollToHere, 700);
            clear(e);
            open();

            if (detail.classList.contains("open")) {
                close();
                detail.classList.remove("open");
            }

            gsap.to(tooltip, {
                duration: 0.3,
                opacity: 0,
                display: "none",
            });

            detail.classList.add("open");
            e.stopImmediatePropagation();
        });
    });

    // category scroll
    radios.forEach((elem) =>
        elem.addEventListener("click", (e) => {
            bodyScrollBar.scrollTo(0, 0, 500);
            archiveCategory(e);
        })
    );
}

// archive List Category (조건식 리팩토링 할 수 있을거같음)
function archiveCategory(e) {
    const lists = document.querySelectorAll(".archive_list .list");
    const radioId = e.currentTarget.id;

    lists.forEach((elem) => {
        const listCategory = elem.getAttribute("category");
        const btn = elem.querySelector("button");
        const detail = elem.querySelector(".detail");
        const open = Boolean(elem.querySelector(".detail.open"));
        const tl = gsap.timeline();

        if (radioId == "all") {
            // 전체
            tl.to(elem, {
                duration: 0,
                display: "block",
            }).to(
                elem,
                {
                    duration: 0.3,
                    height: "auto",
                },
                "<"
            );
        } else if (listCategory == radioId) {
            // 선택한 카테고리에 맞는 것
            tl.to(elem, {
                duration: 0,
                display: "block",
            }).to(elem, {
                duration: 0.3,
                height: "auto",
            });
        } else {
            // 선택한 카테고리에 맞지 않은 것
            if (open) {
                // 상세가(카테고리 상관없이 전체) 열려 있다면
                if (detail.clientHeight == 0) {
                    // 선택한 카테고리에 맞지 않은 리스트의 상세가 열려있지 않다면
                    tl.to(elem, {
                        duration: 0.3,
                        height: 0,
                    }).to(
                        elem,
                        {
                            duration: 0,
                            display: "none",
                        },
                        ">"
                    );
                }
                tl.to(elem, {
                    duration: 0.3,
                    height: 0,
                })
                    .to(
                        elem,
                        {
                            duration: 0,
                            display: "none",
                        },
                        ">"
                    )
                    .to(
                        btn,
                        {
                            duration: 0,
                            "--width": "0%",
                        },
                        ">"
                    )
                    .to(
                        detail,
                        {
                            duration: 0,
                            height: 0,
                            borderWidth: 0,
                        },
                        "<"
                    );

                detail.classList.remove("open");
            } else {
                // 상세가(카테고리 상관없이 전체) 닫혀 있다면
                tl.to(elem, {
                    duration: 0.3,
                    height: 0,
                }).to(
                    elem,
                    {
                        duration: 0,
                        display: "none",
                    },
                    ">"
                );
            }
        }
    });
}

export default prodData;
