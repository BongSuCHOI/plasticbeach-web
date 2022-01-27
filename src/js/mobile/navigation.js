// library import
import { gsap } from "gsap";

// set
const contactElem = document.querySelector("div.contact");
const archiveElem = document.querySelector("div.archive_box");
const contactMenuBtn = document.querySelector("button.to_contact");
const archiveMenuBtn = document.querySelector("button.to_archive");
const tl = gsap.timeline({ duration: 0.2, ease: "power4.inOut", force3D: true });

// mobile menu convert
function mobileMenuConvert() {
    contactMenuBtn.addEventListener("click", toContactAni);
    archiveMenuBtn.addEventListener("click", toArchiveAni);
}

// to contact menu
function toContactAni() {
    tl.to(contactElem, {
        x: 0,
    }).to(
        archiveElem,
        {
            x: 0,
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
    }).to(
        archiveElem,
        {
            x: "-100%",
        },
        "<"
    );

    contactMenuBtn.classList.remove("on");
    archiveMenuBtn.classList.add("on");

    return tl;
}

export default mobileMenuConvert;
