// library import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Swiper, { Pagination, Navigation, Lazy } from "swiper";
import "swiper/css/bundle";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// module import
import platformCheck from "../utils/platformCheck.js";
import { _colorStringFilter } from "gsap/gsap-core";

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
    const imgs = importImgs(require.context("../../images/img", false, /\.(jpe?g|png|gif)$/));
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
                    <div class="swiper-button-next cursor_pointer"></div>
                    <div class="swiper-button-prev cursor_pointer"></div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="info_box">
                    <div class="left">
                        <p class="project_name">
                            <span class="year">${data[I].year}</span>
                            ${data[I].title.en.toUpperCase()}
                        </p>
                        <a class="link cursor_pointer" href="https://www.youtube.com/watch?v=${data[I].url}" target="_blank">WATCH ON YOUTUBE</a>
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
    smoothScroll(".archive_list");
    listClickEvent();
}

// smoothScroll
// https://greensock.com/forums/topic/24923-smooth-scroll-to-whole-page-and-trigger-animations/
// 시간날때 위 링크에서 'akapowl' 답변 보고 한번 더 공부
// https://codepen.io/akapowl/pen/02d8f971d453644abcac268ea19ae726
function smoothScroll(content) {
    if (!platformCheck()) return;
    const scrollContainer = document.querySelector(".archive_list");
    let height;
    content = gsap.utils.toArray(content)[0];

    // set scroll content style
    gsap.set(content.parentNode, { overflow: "hidden", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
    gsap.set(content, { overflow: "visible", width: "100%" });

    // set(resize) height
    const onResize = () => {
        height = content.clientHeight;
        content.style.overflow = "visible";
        document.body.style.height = height + "px";
    };
    onResize();

    // ScrollTrigger 새로고침 시 애니메이션 튕김 방지
    const killScrub = (trigger) => {
        let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0];
        scrub && scrub.kill();
        trigger.animation.progress(trigger.progress);
    };

    // scrollTrigger
    ScrollTrigger.create({
        animation: gsap.to(content, {
            y: () => document.documentElement.clientHeight - height,
            ease: "none",
            onUpdate: ScrollTrigger.update,
        }),
        invalidateOnRefresh: true,
        start: 0,
        end: () => height - document.documentElement.clientHeight,
        scrub: 0.7,
        onRefresh: killScrub,
    });

    document.getElementById("contact").addEventListener("wheel", (e) => e.preventDefault());
    document.querySelector(".marquee").addEventListener("wheel", (e) => e.preventDefault());

    // scrollContainer height 변경 될 때 마다 ScrollTrigger 새로고침
    scrollContainer.addEventListener("transitionend", () => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);
    });

    ScrollTrigger.addEventListener("refreshInit", onResize);
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
    const lists = document.querySelectorAll(".list");
    const tooltip = document.querySelector(".tooltip_box");
    const radios = document.querySelectorAll("[type=radio]");

    // click
    lists.forEach((list) => {
        const btn = list.querySelector("button");
        const detail = list.querySelector(".detail");
        let scrollToHere = list.offsetTop;

        // 카테고리 변경 할 때마다 각 리스트 offsetTop 재계산
        let timer;
        const observer = new MutationObserver((mutations) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                mutations.forEach((mutation) => {
                    scrollToHere = mutation.target.offsetTop;
                });
            }, 300);
        });
        observer.observe(list, { attributeFilter: ["style"] });

        // accordion open
        const open = () => {
            return gsap
                .timeline()
                .to(btn, {
                    duration: 0.5,
                    "--width": "100%",
                    ease: "expo.in",
                })
                .to(
                    detail,
                    {
                        force3D: true,
                        duration: 0.4,
                        height: detail.scrollHeight + "px",
                        ease: "power4.inOut",
                    },
                    "<"
                );
        };

        // accordion close
        const close = () => {
            return gsap
                .timeline()
                .to(btn, {
                    duration: 0.5,
                    "--width": "0%",
                    ease: "expo.in",
                })
                .to(
                    detail,
                    {
                        duration: 0.4,
                        height: 0,
                        ease: "power4.inOut",
                    },
                    "<"
                );
        };

        // accordion clear(all close)
        const clear = (e) => {
            const target = e.currentTarget.parentElement;
            const siblings = [...target.parentElement.children].filter((sibling) => sibling != target);

            siblings.forEach((elem) => {
                const btnAll = elem.querySelector("button");
                const detailAll = elem.querySelector(".detail");
                gsap.timeline()
                    .to(btnAll, {
                        duration: 0.5,
                        "--width": "0%",
                        ease: "expo.in",
                    })
                    .to(
                        detailAll,
                        {
                            duration: 0.4,
                            height: 0,
                            ease: "power4.inOut",
                        },
                        "<"
                    );
                detailAll.classList.remove("open");
            });
        };

        // event
        btn.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            clear(e);
            open();

            if (detail.classList.contains("open")) {
                close();
                detail.classList.remove("open");
                return;
            }
            detail.classList.add("open");

            if (!platformCheck()) {
                const scrollOffsetY = document.querySelector(".category").offsetHeight;
                gsap.to(document.documentElement, {
                    duration: 0.3,
                    scrollTo: { y: scrollToHere, offsetY: scrollOffsetY },
                });
            } else {
                gsap.to(document.documentElement, {
                    duration: 0.1,
                    scrollTo: scrollToHere,
                });
            }

            gsap.to(tooltip, {
                duration: 0.3,
                opacity: 0,
                display: "none",
            });
        });
    });

    // category scroll
    radios.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            archiveCategory(e);

            gsap.to(document.documentElement, {
                duration: 0,
                scrollTo: 0,
            });

            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 300);
        });
    });
}

// archive List Category (조건식 리팩토링 할 수 있을거같음)
function archiveCategory(e) {
    const lists = document.querySelectorAll(".archive_list .list");
    const radioId = e.currentTarget.id;

    lists.forEach((list) => {
        const listCategory = list.getAttribute("category");
        const btn = list.querySelector("button");
        const detail = list.querySelector(".detail");
        const tl = gsap.timeline();

        if (radioId == "all") {
            // 전체
            tl.to(list, {
                duration: 0,
                display: "block",
            }).to(list, {
                duration: 0.3,
                height: "auto",
            });
        } else if (radioId === listCategory) {
            // 선택한 카테고리에 맞는 것
            tl.to(list, {
                duration: 0,
                display: "block",
            }).to(list, {
                duration: 0.3,
                height: "auto",
            });
        } else {
            // 맞지 않은 것
            tl.to(list, {
                duration: 0.3,
                height: 0,
            }).to(
                list,
                {
                    duration: 0,
                    display: "none",
                },
                ">"
            );
        }

        // 열려있는 모든 상세를 닫음
        if (detail.classList.contains("open")) {
            tl.to(
                btn,
                {
                    duration: 0.3,
                    "--width": "0%",
                },
                "-=0.3"
            ).to(
                detail,
                {
                    duration: 0.3,
                    height: 0,
                },
                "<"
            );

            detail.classList.remove("open");
        }
    });
}

export default prodData;
