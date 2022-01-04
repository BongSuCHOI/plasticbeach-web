// convert color & text
class Convert{
    constructor() {
        this.workData;
        this.textData;
        this.lang = "en";
    }

    setData(datas) {
        this.workData = datas[0]
        this.textData = datas[1]
    }

    changeText() {
        const workData = this.workData;
        const textData = this.textData;
        const textArr = Object.entries(textData[0]);
        const budgietArr = Object.entries(textData[1]);
        const timelineArr = Object.entries(textData[2]);
        let lang = this.lang;

        // contents
        function changeFuc(variable, name) {
            // 일반 content text 및 category select radio btn text
            if (name == 'content') {
                variable.forEach(data => {
                    const key = data[0];
                    const val = data[1];
                    const target = document.querySelector(`[data-name='${key}']`);
                    
                    if (lang === "en") {
                        target.innerHTML = val.en;
                        // marquee text
                        if (target.classList.contains("marquee_text")) {
                            target.innerHTML = val.en + val.en;
                        }
                        // contact input placeholder
                        if (target.hasAttribute('placeholder')) {
                            target.setAttribute('placeholder', val.en)
                        }
                    } else {
                        target.innerHTML = val.ko;
                        // marquee text
                        if (target.classList.contains("marquee_text")) {
                            target.innerHTML = val.ko + val.ko;
                        }
                        // contact input placeholder
                        if (target.hasAttribute('placeholder')) {
                            target.setAttribute('placeholder', val.ko)
                        }
                    }
                })
            }
            // 예산/일정 select box option text
            else if (name == 'budgiet' || name == 'timeline') {
                variable.forEach(data => {
                    const key = data[0];
                    const val = data[1];
                    const target = document.querySelector(`[data-name='${key}']`);
                    const copyTarget = document.querySelector(`.select_dropdown button[copy='${key}']`);

                    if (lang === "en") {
                        target.innerHTML = val.en;

                        if (!copyTarget) {return}
                        else if (copyTarget.getAttribute("copy") == key) {
                            copyTarget.innerHTML = val.en
                        }
                    } else {
                        target.innerHTML = val.ko;
                        
                        if (!copyTarget) return
                        else if (copyTarget.getAttribute("copy") == key) {
                            copyTarget.innerHTML = val.ko
                        }
                    }
                })
            }
        }

        // work
        workData.forEach((data, i) => {
            const lists = document.querySelectorAll(".list");
            const target = lists[i].querySelector("button");

            if (this.lang === "en") {
                target.innerHTML = data.title.en;
                target.setAttribute("data-content", data.title.en);
            } else {
                target.innerHTML = data.title.ko;
                target.setAttribute("data-content", data.title.ko);
            }
        })

        changeFuc(textArr, 'content');
        changeFuc(budgietArr, 'budgiet');
        changeFuc(timelineArr, 'timeline');

        this.reverseColorTheme();
    }

    reverseColorTheme() {
        const state = document.documentElement.getAttribute("color-theme");

        if (state === "white") {
            document.documentElement.setAttribute("color-theme", "blue");
        } else {
            document.documentElement.setAttribute("color-theme", "white");
        }
    }

    change() {
        const enFont = document.querySelectorAll(".toggle_font");

        convert.lang === "en" ? (convert.lang = "ko") : (convert.lang = "en");
        convert.changeText();

        enFont.forEach(elem => {
            if (elem.classList.contains("Nefarious")) {
                elem.classList.remove("Nefarious")
            } else {
                elem.classList.add("Nefarious")
            }
        })
    }
}

// instance
const convert = new Convert();

// run
document.querySelector(".reverse_color").addEventListener("click", convert.change);

export default convert;