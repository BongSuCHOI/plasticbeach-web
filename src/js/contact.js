import { gsap } from "gsap";
import emailjs from "emailjs-com";

// Email Js Library
const EmailJs = () => {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_o7o9yvm", "template_i90fmnx", this, "user_VqHFKDuJ0yd1xOoOukLDG").then(
            function () {
                console.log("SUCCESS!");
                window.location.reload();
            },
            function (error) {
                console.log("FAILED...", error);
                alert("문의메일 전송에 실패하였습니다. 다시 시도해 주세요.");
            }
        );
    });
};

// custom input[type="file"](file-name bind)
function bindFileInput() {
    const elem = document.querySelector("#file");
    const bindTarget = document.querySelector(".file_name");

    elem.addEventListener("change", function () {
        let value = this.value;
        bindTarget.value = value;
    });
}

// init custom select box
function initCustomSelect() {
    const selects = document.querySelectorAll("select");

    // 대체 selectBox 생성
    selects.forEach((select, i) => {
        const div = document.createElement("div");
        const ul = document.createElement("ul");
        const button = document.createElement("button");
        const btnText = document.createTextNode(select.options[0].text);
        select.style.display = "none";

        // wrapper
        select.parentNode.insertBefore(div, select);
        div.setAttribute("class", `select_dropdown sBox${i}`);
        button.setAttribute("class", "dropdown_btn cursor_pointer");
        button.setAttribute("data-value", "");
        button.setAttribute("data-name", `${select.className}_default`);
        button.setAttribute("type", "button");
        ul.setAttribute("class", "dropdown_list");

        div.appendChild(select);
        div.appendChild(button);
        div.appendChild(ul);
        button.appendChild(btnText);

        // li
        for (let i = 1; i < select.options.length; i++) {
            const li = document.createElement("li");
            const optionValue = select.options[i].value;
            const optionText = document.createTextNode(select.options[i].text);
            li.setAttribute("class", "select_list cursor_pointer");
            li.setAttribute("data-value", optionValue);
            li.setAttribute("data-name", `${select.className}_option${i}`);
            li.appendChild(optionText);
            ul.appendChild(li);
        }
    });

    openCSB();
    closeCSB();
}

// open custom select box
function openCSB() {
    const btns = document.querySelectorAll("button.dropdown_btn");
    const lis = document.querySelectorAll("li.select_list");
    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            displayCBS(this);
        });
    });
    lis.forEach((li) => {
        li.addEventListener("click", function () {
            displayCBS(this);
        });
    });
}

// close custom select box
function closeCSB() {
    document.body.addEventListener("click", (e) => {
        // 클릭한 target이 아래 class를 가진 elements가 아니면 전부 닫음
        const target = e.target;
        if (target.classList.contains("dropdown_btn") || target.classList.contains("placeholder") || target.classList.contains("dropdown_list") || target.classList.contains("select_list")) return;

        const activeUl = document.querySelectorAll(".dropdown_list");
        activeUl.forEach((ul) => {
            ul.classList.remove("active");
            toggleAnimationCSB(ul);
        });
    });
}

// display custom select box
function displayCBS(target) {
    const parent = target.parentNode;
    if (target.tagName == "BUTTON") {
        const dropdownList = parent.querySelector("ul.dropdown_list");
        dropdownList.classList.toggle("active");
        toggleAnimationCSB(dropdownList);
    } else if (target.tagName == "LI") {
        const selectClass = parent.parentNode.querySelector("select").className;
        const divChildBtn = parent.parentNode.querySelector("button.dropdown_btn");
        const targetValue = target.getAttribute("data-value");
        const targetDataName = target.getAttribute("data-name");
        parent.classList.toggle("active");
        toggleAnimationCSB(parent);
        divChildBtn.setAttribute("data-value", targetValue);
        divChildBtn.setAttribute("copy", targetDataName);
        divChildBtn.textContent = target.textContent;

        setValueCBS(selectClass, targetValue);
    }
}

// set value custom select box
function setValueCBS(className, valueToSelect) {
    const target = document.querySelector(`.${className}`);
    target.value = valueToSelect;
    target.setAttribute("selected", "selected");
}

// toggle animation custom select box
function toggleAnimationCSB(elem) {
    if (elem.classList[1] == "active") {
        let tl = gsap.timeline();
        tl.to(elem, {
            duration: 0,
            display: "block",
        }).to(
            elem,
            {
                duration: 0.4,
                height: "auto",
                ease: "power4.inOut",
            },
            ">"
        );
    } else {
        let tl = gsap.timeline();
        tl.to(elem, {
            duration: 0.4,
            height: "0",
            ease: "power4.inOut",
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

// run
EmailJs();
bindFileInput();

export default initCustomSelect;
