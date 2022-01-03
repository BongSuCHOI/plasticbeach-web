import emailjs from 'emailjs-com';
import { _colorStringFilter } from 'gsap/gsap-core';
import { wrap } from 'gsap/gsap-core';

// Email Js Library
const EmailJs = () => {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_o7o9yvm', 'template_i90fmnx', this, 
        'user_VqHFKDuJ0yd1xOoOukLDG')
            .then(function() {
                console.log('SUCCESS!');
                window.location.reload();
            }, function(error) {
                console.log('FAILED...', error);
                alert('문의메일 전송에 실패하였습니다. 다시 시도해 주세요.')
            });
    });
}

// custom input[type="file"](file-name bind)
const bindFileInput = () => {
    const elem = document.querySelector("#file");
    const bindTarget = document.querySelector(".file_name");

    elem.addEventListener("change", function () {
        let value = this.value;
        bindTarget.value = value;
    });
};

// custom select box
const customSelect = {
    init: () => {
        const select = document.querySelectorAll("select");

        // 대체 selectBox 만들기
        select.forEach((elem, i) => {
            const div = document.createElement("div");
            const ul = document.createElement("ul");
            const button = document.createElement("button");
            const span = document.createElement("span");
            const spanText = document.createTextNode(elem.options[0].text);
            elem.style.display = "none";
            
            // ul
            elem.parentNode.insertBefore(div, elem);
            div.appendChild(elem);
            div.className = `select_dropdown sBox${i}`;
            button.className = `dropdown_btn sBtn${i}`;
            button.setAttribute("data-value", "");
            button.setAttribute("type", "button");
            span.className = `placeholder`;
            ul.className  = `dropdown_list`;

            div.appendChild(button);
            span.appendChild(spanText);
            button.appendChild(span);
            div.appendChild(ul);            
            
            // li
            for (let i = 0; i < elem.options.length; i++) {
                const li = document.createElement("li");
                const optionValue = elem.options[i].value;
                const optionText = document.createTextNode(elem.options[i].text);
                li.className = "select_list";
                li.setAttribute("data-value", optionValue);
                li.appendChild(optionText);
                ul.appendChild(li);
            }
        });

        customSelect.open();
    },

    open: () => {
        const btns = document.querySelectorAll("button.dropdown_btn");
        const lis = document.querySelectorAll("li.select_list");
        btns.forEach(btn => {
            btn.addEventListener("click", function() {
                customSelect.displayUl(this);
            }, false)
        });
        lis.forEach(li => {
            li.addEventListener("click", function() {
                customSelect.displayUl(this);
            }, false)
        });
    },

    displayUl: (target) => {
        const parent = target.parentNode;
        if (target.tagName == "BUTTON") {
            const dropdownList = parent.querySelector("ul.dropdown_list");
            dropdownList.classList.toggle("active");
        } else if (target.tagName == "LI") {
            const selectClass = parent.parentNode.querySelector("select").className;
            const divChildBtn = parent.parentNode.querySelector("button.dropdown_btn");
            const btnChildSpan = divChildBtn.querySelector("button.dropdown_btn span");
            const targetValue = target.getAttribute("data-value");
            parent.classList.toggle("active");
            divChildBtn.setAttribute("data-value", targetValue);
            btnChildSpan.textContent = target.textContent;

            customSelect.setSelect(selectClass, targetValue)
        }
    },

    setSelect: (className, valueToSelect) => {
        const target = document.querySelector(`.${className}`);
        target.value = valueToSelect;
        target.setAttribute("selected", "selected");
    }
}

// run
EmailJs();
bindFileInput();

export default customSelect;