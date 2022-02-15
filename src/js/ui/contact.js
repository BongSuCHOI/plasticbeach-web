// library import
import { gsap } from "gsap";

// custom input[type="file"](file-name bind)
function bindFileInput() {
    const elem = document.querySelector("#file");
    const bindTarget = document.querySelector(".file_name");

    elem.addEventListener("change", function () {
        let value = this.value;
        bindTarget.value = value;
    });
}

// set custom select box
function setCustomSelect() {
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
    const dropdownBtns = document.querySelectorAll("button.dropdown_btn");
    const lis = document.querySelectorAll("li.select_list");

    dropdownBtns.forEach((btn) => {
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

        const uls = document.querySelectorAll(".dropdown_list");
        uls.forEach((ul) => {
            ul.classList.remove("active");
            toggleAnimationCSB(ul);
        });
    });
}

// display custom select box
function displayCBS(target) {
    const targetParent = target.parentNode;
    const dropdownList = targetParent.querySelector("ul.dropdown_list");

    if (target.tagName == "LI") {
        const divBox = targetParent.parentNode;
        const selectElemClassName = divBox.querySelector("select").className;
        const dropdownBtn = divBox.querySelector("button.dropdown_btn");
        const liValue = target.getAttribute("data-value");
        const liDataName = target.getAttribute("data-name");

        targetParent.classList.toggle("active");
        dropdownBtn.setAttribute("data-value", liValue);
        dropdownBtn.setAttribute("copy", liDataName);
        dropdownBtn.textContent = target.textContent;

        toggleAnimationCSB(targetParent);
        setValueCBS(selectElemClassName, liValue);

        return;
    }

    dropdownList.classList.toggle("active");
    toggleAnimationCSB(dropdownList);
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
        gsap.timeline()
            .to(elem, {
                duration: 0,
                display: "block",
            })
            .to(
                elem,
                {
                    duration: 0.4,
                    height: "auto",
                    ease: "power4.inOut",
                },
                ">"
            );
    } else {
        gsap.timeline()
            .to(elem, {
                duration: 0.4,
                height: "0",
                ease: "power4.inOut",
            })
            .to(
                elem,
                {
                    duration: 0,
                    display: "none",
                },
                ">"
            );
    }
}

bindFileInput();

export default setCustomSelect;
