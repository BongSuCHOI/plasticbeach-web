// library import
import { gsap } from "gsap";

// module
import IsMobile from "../utils/isMobile";

// set
const contactElem = document.getElementById("contact");
const archiveElem = document.getElementById("archive");
const contactMenuBtn = document.querySelector("button.to_contact");
const archiveMenuBtn = document.querySelector("button.to_archive");
const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power4.inOut", force3D: true } });

// mobile menu convert
function mobileMenuConvert() {
    contactMenuBtn.addEventListener("click", toContactAni);
    archiveMenuBtn.addEventListener("click", toArchiveAni);
}

// to contact menu
function toContactAni() {
    tl.to(archiveElem, {
        position: "fixed",
        duration: 0,
    })
        .to(archiveElem, {
            x: "0%",
            display: "none",
        })
        .to(
            contactElem,
            {
                x: "0%",
                display: "block",
            },
            "<"
        );

    archiveMenuBtn.classList.remove("on");
    contactMenuBtn.classList.add("on");

    return tl;
}

// to archive menu
function toArchiveAni() {
    tl.to(contactElem, {
        x: "-100%",
        display: "none",
    })
        .to(
            archiveElem,
            {
                display: "block",
                x: "-100%",
            },
            "<"
        )
        .to(archiveElem, {
            position: "relative",
            duration: 0,
        });

    contactMenuBtn.classList.remove("on");
    archiveMenuBtn.classList.add("on");

    return tl;
}

export default mobileMenuConvert;
