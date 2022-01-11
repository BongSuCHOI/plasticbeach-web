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
    mouseOverTooltip(data);
    bind_detail.init(data)
}

// Mouse Over Tooltip
const mouseOverTooltip = (data) => {
    if (!platformCheck()) { return }
    
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
        obj.addEventListener("mouseenter", function() {
            gsap.to(".cursor", {
                duration: 0.1,
                scale: 1.8,
                mixBlendMode: "difference"
            })
            gsap.to(tooltipBox, {
                duration: 0.3,
                opacity: 1,
                display: "block",
            })
            iframe.src = `https://www.youtube.com/embed/${embedUrl[i]}?rel=0&autoplay=1&mute=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white"`;
        });
        
        obj.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            tooltipBox.style.left = mouseX + "px";
            tooltipBox.style.top = mouseY - tooltipBox.clientHeight + "px";

            if (tooltipBox.offsetTop < 0) {
                tooltipBox.style.top = mouseY + "px";
            }
        });

        obj.addEventListener("mouseleave", function() {
            gsap.to(".cursor", {
                duration: 0.1,
                scale: 1,
                mixBlendMode: "normal"
            })
            gsap.to(tooltipBox, {
                duration: 0.3,
                opacity: 0,
                display: "none",
            })
        });
    });
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
        bind_detail.bind(data, imgs)
        bind_detail.scroll();
    },

    bind: (data, imgs) => {
        const detailData = data.map(d => d.detail);
        const ul = document.querySelector(".work_list");
        const winHeight = window.innerHeight;
        const listHeight = document.querySelector(".disposable").clientHeight;
        const lengthMath = Math.floor(winHeight / listHeight);
        const listLength = lengthMath + Math.round(lengthMath / 2);
        let pageNum = 1;

        document.querySelector(".disposable").remove();

        const addList = () => {
            for (let i = (pageNum - 1) * listLength + 1; i <= pageNum * listLength; i++) {
                const li = document.createElement("li");
                const btn = document.createElement("button");
                const div = document.createElement("div");
                let I = i - 1;
                let detailHtml;

                if (I == data.length) break

                // list
                li.setAttribute("class", "list");
                li.setAttribute("name", data[I].name);
                li.setAttribute("category", data[I].category);
                btn.setAttribute("class", "Nefarious toggle_font");
                btn.setAttribute("data-content", data[I].title.en);
                btn.innerHTML = data[I].title.en;

                // detail(accordion menu)
                div.setAttribute("class", "detail");
                div.setAttribute("name", data[I].name);
                div.setAttribute("category", data[I].category);
                detailHtml = `
                    <div class="swiper img_slide">
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
                div.innerHTML = detailHtml;
                
                // append
                li.appendChild(btn);
                li.appendChild(div);
                ul.appendChild(li);
            }
        }

        const io = new IntersectionObserver(([entry], observer) => {
            if (!entry.isIntersecting) return
            addList(++pageNum);
            observer.unobserve(entry.target);
            ioReStart(observer);
            // 아코디언, 슬라이드 에러 발견
            accordion.open();
            slider();
        }, { threshold: 0.1 });

        const ioReStart = (intersectionObserver) => {
            const lists = document.querySelectorAll(".list");
            lists.forEach(list => {
                if (!list.nextSibling && pageNum < Math.ceil(data.length/listLength)) {
                    intersectionObserver.observe(list)
                } else if (pageNum >= Math.ceil(data.length/listLength)) {
                    intersectionObserver.disconnect()
                }
            })
        }

        addList();
        ioReStart(io);

        accordion.open();
        slider();
    },

    scroll: () => {
        const radios = document.querySelectorAll('[type=radio]');
        const lists = document.querySelectorAll('.list');
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

        // scrollTo
        lists.forEach(list => {
            const btn = list.querySelector('button');
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => scrollToHere = mutation.target.offsetTop);
            });
            let scrollToHere = list.offsetTop;
            
            observer.observe(list, {attributeFilter: ['style']});
            btn.addEventListener("click", () => bodyScrollBar.scrollTo(0, scrollToHere, 700))
        })
        
        // workListCategory
        radios.forEach(elem => elem.addEventListener('click', (e) => {
            bodyScrollBar.scrollTo(0, 0, 500);
            workCategory(e);
        }));
    }
}

// Accordion
const accordion = {
    open: () => {
        const lists = document.querySelectorAll('.list');
        lists.forEach(list => {
            const tooltip = document.querySelector('.tooltip_box');
            const btn = list.querySelector("button");
            const detail = list.querySelector(".detail");

            btn.addEventListener('click', () => {
                if (!detail.classList.contains("open")) {
                    accordion.clear();
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
                })
            });

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
        });
    },

    clear: () => {
        const lists = document.querySelectorAll('.list');
        lists.forEach(list => {
            const btn = list.querySelector("button");
            const detail = list.querySelector(".detail");
            
            if (!detail.classList.contains("open")) return;
    
            const tl = gsap.timeline();
            tl
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
    
            detail.classList.remove("open");
        });
    }
}

// detail slider
const slider = () => {
    return new Swiper('.img_slide', {
        modules: [
            Pagination,
            Navigation,
            Lazy
        ],
        speed: 500,
        // autoHeight: true,
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
        },
    });
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