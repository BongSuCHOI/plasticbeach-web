let workData = [];
let textData = [];
let lang = "en";

// Prod Data
function prodData(data) {
    workData = data.workData;
    textData = data.textData;
}

// language convert
function languageConvert() {
    const textArr = Object.entries(textData[0]);
    const budgietArr = Object.entries(textData[1]);
    const timelineArr = Object.entries(textData[2]);

    // select options
    const selectOptions = (variable) => {
        variable.forEach((data) => {
            const key = data[0];
            const val = data[1];
            const target = document.querySelector(`[data-name='${key}']`);
            const copyTarget = document.querySelector(`.select_dropdown button[copy='${key}']`);

            if (lang === "en") {
                target.innerHTML = val.en;
                if (!copyTarget) return;
                copyTarget.innerHTML = val.en;
            } else {
                target.innerHTML = val.ko;
                if (!copyTarget) return;
                copyTarget.innerHTML = val.ko;
            }
        });
    };

    // contents
    textArr.forEach((data) => {
        const key = data[0];
        const val = data[1];
        const target = document.querySelector(`[data-name='${key}']`);

        if (lang === "en") {
            target.innerHTML = val.en;
            // marquee text (굳이 이렇게 안써도 될 거 같음 // 리팩토링 필요)
            if (target.classList.contains("marquee_text")) {
                target.innerHTML = val.en + val.en;
            }
            // input placeholder (굳이 이렇게 안써도 될 거 같음 // 리팩토링 필요)
            if (target.hasAttribute("placeholder")) {
                target.setAttribute("placeholder", val.en);
            }
        } else {
            target.innerHTML = val.ko;
            // marquee text (굳이 이렇게 안써도 될 거 같음 // 리팩토링 필요)
            if (target.classList.contains("marquee_text")) {
                target.innerHTML = val.ko + val.ko;
            }
            // input placeholder (굳이 이렇게 안써도 될 거 같음 // 리팩토링 필요)
            if (target.hasAttribute("placeholder")) {
                target.setAttribute("placeholder", val.ko);
            }
        }
    });

    // work
    workData.forEach((data, i) => {
        const lists = document.querySelectorAll(".list");
        const target = lists[i].querySelector("button");

        if (lang === "en") {
            target.innerHTML = data.title.en;
            target.setAttribute("data-content", data.title.en);
        } else {
            target.innerHTML = data.title.ko;
            target.setAttribute("data-content", data.title.ko);
        }
    });

    selectOptions(budgietArr);
    selectOptions(timelineArr);
}

// change
function change() {
    const enFont = document.querySelectorAll(".toggle_font");
    const htmlElem = document.documentElement;
    const theme = htmlElem.getAttribute("color-theme");

    // change font
    enFont.forEach((elem) => {
        if (elem.classList.contains("Nefarious")) {
            elem.classList.remove("Nefarious");
        } else {
            elem.classList.add("Nefarious");
        }
    });

    // change language
    lang === "en" ? (lang = "ko") : (lang = "en");

    // change color theme
    theme === "white" ? htmlElem.setAttribute("color-theme", "blue") : htmlElem.setAttribute("color-theme", "white");

    languageConvert();
}

// run
document.querySelector(".reverse_color").addEventListener("click", change);

export default prodData;
