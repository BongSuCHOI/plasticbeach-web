// library import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';
import Swiper, { Pagination, Navigation, Lazy } from 'swiper';
import 'swiper/css/bundle';
gsap.registerPlugin(ScrollTrigger);

// module import
import platformCheck from './module/PlatformCheck.js';

// Prod Data
const prodData = (data) => {
    bind_detail.init(data);
    listEvent.overEvent(data);
}

// detail bind
const bind_detail = {
    importImgs: (r) => {
        let images = {};
        r.keys().map(item => images[item.replace('./', '')] = r(item) );
        return images;
    },

    init: (data) => {
        const imgs = bind_detail.importImgs(require.context('../images/img', false, /\.(jpe?g|png|gif)$/));
        bind_detail.bind(data, imgs);
    },

    bind: (data, imgs) => {
        const detailData = data.map(d => d.detail);
        const lists = document.querySelectorAll(".list");
        const winHeight = window.innerHeight;
        const listHeight = document.querySelector(".disposable").clientHeight;
        const lengthMath = Math.floor(winHeight / listHeight);
        const listLength = lengthMath + Math.round(lengthMath / 2);
        let pageNum = 1;

        document.querySelector(".disposable").remove();

        const addList = () => {
            for (let i = (pageNum - 1) * listLength + 1; i <= pageNum * listLength; i++) {
                let I = i - 1;
                let detailHtml;

                if (I == data.length) break;

                const detail = lists[I].querySelector(".detail");
                // detail(accordion menu)
                detailHtml = `
                    <div class="swiper slide-${data[I].name}">
                        <div class="swiper-wrapper">
                            ${detailData[I].imgName.map(name => `
                                <div class="swiper-slide">
                                    <img data-src="${imgs[name]}" alt="" class="swiper-lazy" />
                                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </div>
                            `).join("")}
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
                detail.innerHTML = detailHtml;

                // swiper
                const swiper = new Swiper(`.slide-${data[I].name}`, {
                    modules: [
                        Pagination,
                        Navigation,
                        Lazy
                    ],
                    speed: 500,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    preloadImages: false,
                    lazy: {
                        loadPrevNext : true,
                    }
                });
            }
        }

        const io = new IntersectionObserver(([entry], observer) => {
            if (!entry.isIntersecting) return
            addList(++pageNum);
            observer.unobserve(entry.target);
            ioReStart(observer);
            listEvent.clickEvent();
        });

        const ioReStart = (intersectionObserver) => {
            const currentLoadSwiper = document.querySelectorAll(".swiper");
            const lastElem = currentLoadSwiper[currentLoadSwiper.length - 1];
            const currentLastLi = lastElem.parentElement.parentElement;
            if (pageNum < Math.ceil(data.length/listLength)) {
                intersectionObserver.observe(currentLastLi)
            } else if (pageNum >= Math.ceil(data.length/listLength)) {
                intersectionObserver.disconnect()
            }
        }

        addList();
        ioReStart(io);

        listEvent.smoothScroll();
        listEvent.clickEvent();
    },
}

// work list event
const listEvent = {
    smoothScroll: () => {
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
            }
        });
        // update ScrollTrigger when scrollbar updates
        bodyScrollBar.addListener(ScrollTrigger.update);

        return bodyScrollBar;
    },

    overEvent: (data) => {
        if (!platformCheck()) return;
    
        const embedUrl = data.map(d => d.url);
        const tooltipBox = document.querySelector(".tooltip_box");
        const iframe = document.createElement("iframe");
        const hoverBox = document.querySelectorAll(".work_list .list button");
    
        iframe.setAttribute("class", "video_tooltip");
        iframe.setAttribute("name", "work");
        iframe.setAttribute("frameborder", "0");
        iframe.width = "560";
        iframe.height = "315";
        tooltipBox.appendChild(iframe);
    
        hoverBox.forEach((obj, i) => {
            obj.addEventListener("mouseenter", function(e) {
                const tl = gsap.timeline();
                tl
                .to(".cursor", {
                    duration: 0.1,
                    scale: 1.8,
                    mixBlendMode: "difference",
                })
                .to(this, {
                    duration: 0.3,
                    letterSpacing: "3px",
                }, "<")
                .to(tooltipBox, {
                    duration: 0.3,
                    opacity: 1,
                    display: "block",
                }, "<");
                // iframe.src = `https://www.youtube.com/embed/${embedUrl[i]}?rel=0&autoplay=1&mute=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white"`;
                e.stopImmediatePropagation();
            });
    
            obj.addEventListener("mouseleave", function(e) {
                const tl = gsap.timeline();
                tl
                .to(".cursor", {
                    duration: 0.1,
                    scale: 1,
                    mixBlendMode: "normal",
                })
                .to(this, {
                    duration: 0.3,
                    "letter-spacing": "0",
                }, "<")
                .to(tooltipBox, {
                    duration: 0.3,
                    opacity: 0,
                    display: "none",
                }, "<");
                e.stopImmediatePropagation();
            });
            
            obj.addEventListener("mousemove", (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
    
                tooltipBox.style.left = mouseX + "px";
                tooltipBox.style.top = mouseY - tooltipBox.clientHeight + "px";
    
                if (tooltipBox.offsetTop < 0) tooltipBox.style.top = mouseY + "px";
            });
        });
    },

    clickEvent: () => {
        const bodyScrollBar = listEvent.smoothScroll();
        const lists = document.querySelectorAll('.list');
        const tooltip = document.querySelector('.tooltip_box');
        const radios = document.querySelectorAll('[type=radio]');
        
        // category
        radios.forEach(elem => elem.addEventListener('click', (e) => {
            bodyScrollBar.scrollTo(0, 0, 500);
            workCategory(e);
        }));

        lists.forEach(list => {
            const btn = list.querySelector('button');
            const detail = list.querySelector(".detail");
            
            // scrollTo
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => scrollToHere = mutation.target.offsetTop)
            });
            let scrollToHere = list.offsetTop;
            observer.observe(list, {attributeFilter: ['style']});

            // accordion
            const openD = () => {
                const tl = gsap.timeline();
                return tl
                .to(btn, {
                    duration: 0.5,
                    "--width": "100%",
                    ease: "expo.in",
                })
                .to(detail, {
                    force3D: true,
                    duration: 0.4,
                    height: detail.scrollHeight + "px",
                    borderWidth: 2,
                    ease: "power4.inOut",
                }, "<")
            }
            const closeD = () => {
                const tl = gsap.timeline();
                return tl
                .to(btn, {
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
            const clear = (e) => {
                const target = e.currentTarget.parentElement;
                const siblings = t => [...t.parentElement.children].filter(s => s != t)
                siblings(target).forEach(e => {
                    const btnAll = e.querySelector("button");
                    const detailAll = e.querySelector(".detail");
                    const tl = gsap.timeline();
                    tl
                    .to(btnAll, {
                        duration: 0.5,
                        "--width": "0%",
                        ease: "expo.in"
                    })
                    .to(detailAll, {
                        duration: 0.4,
                        height: 0,
                        borderWidth: 0,
                        ease: "power4.inOut"
                    }, "<");
                    detailAll.classList.remove("open");
                })
            }

            // event
            btn.addEventListener("click", (e) => {
                bodyScrollBar.scrollTo(0, scrollToHere, 700);
                if (!detail.classList.contains("open")) {
                    clear(e);
                    openD();
                    detail.classList.add("open");
                } else {
                    closeD();
                    detail.classList.remove("open");
                }
                gsap.to(tooltip, {
                    duration: 0.3,
                    opacity: 0,
                    display: "none"
                });
                e.stopImmediatePropagation();
            })
        })
    },
}

// Work List Category
const workCategory = (e) => {
    const lists = document.querySelectorAll('.work_list .list');
    const radioId = e.currentTarget.id;

    lists.forEach(elem => {
        const listCategory = elem.getAttribute('category');
        const btn = elem.querySelector("button");
        const detail = elem.querySelector(".detail");
        const open = Boolean(elem.querySelector(".detail.open"));
        const tl = gsap.timeline();

        if (radioId == 'all') { // 전체
            tl
            .to(elem, {
                duration: 0,
                display: "block"
            })
            .to(elem, {
                duration: 0.3,
                height: "auto",
            }, "<");
        } else if (listCategory == radioId) { // 선택한 카테고리에 맞는 것
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
                .to(btn, {
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

export default prodData;