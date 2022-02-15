let archiveData = [];
let textData = [];
let lang = "en";

// Prod Data
function prodData(data) {
    archiveData = data.archiveData;
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
        const isMarquee = target.classList.contains("marquee_text");
        const isTextInput = target.hasAttribute("placeholder");

        if (lang === "en") {
            target.innerHTML = val.en;
            if (isMarquee) target.innerHTML = val.en + val.en;
            if (isTextInput) target.setAttribute("placeholder", val.en);
        } else {
            target.innerHTML = val.ko;
            if (isMarquee) target.innerHTML = val.ko + val.ko;
            if (isTextInput) target.setAttribute("placeholder", val.ko);
        }
    });

    // archive
    archiveData.forEach((data, i) => {
        const lists = document.querySelectorAll(".list");
        const target = lists[i].querySelectorAll(".subject span");

        if (lang === "en") {
            target.forEach((elem) => {
                elem.innerHTML = data.title.en;
                elem.setAttribute("data-content", data.title.en);
            });
        } else {
            target.forEach((elem) => {
                elem.innerHTML = data.title.ko;
                elem.setAttribute("data-content", data.title.ko);
            });
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
