// data
import archiveJson from "./data/archive.json";
import textJson from "./data/text.json";

// module
import Archive from "./Archive";
import Contact from "./contact";
import Convert from "./module/convert";
import CustomCursor from "./module/customCursor";
import SymbolAnimation from "./module/symbolAnimation";
import Marquee from "./module/marquee";

// css import
import styleCSS from "../css/scss/style.scss";

// get data
async function getData() {
    const archive = await (await fetch(archiveJson)).json();
    const text = await (await fetch(textJson)).json();
    const dataAll = await Promise.all([archive, text]);
    return {
        archiveData: dataAll[0],
        textData: dataAll[1],
    };
}

// bind dom
async function bindDom() {
    const { archiveData, textData } = await getData();
    const parent = document.querySelector(".archive_list");
    const textArr = Object.entries(textData[0]);
    const budgietArr = Object.entries(textData[1]);
    const timelineArr = Object.entries(textData[2]);

    // select options
    const selectOptions = (variable, name) => {
        variable.forEach((obj) => {
            const val = obj[1];
            const parent = document.querySelector(`select.${name}`);
            const html = document.createElement("option");
            html.innerHTML = val.en;
            parent.appendChild(html);
        });
    };

    // contents
    textArr.forEach((data) => {
        const key = data[0];
        const val = data[1];
        const target = document.querySelector(`[data-name='${key}']`);
        target.innerHTML = val.en;

        // marquee text (굳이 이렇게 안써도 될 거 같음 // 리팩토링 필요)
        if (target.classList.contains("marquee_text")) {
            target.innerHTML = val.en + val.en;
        }
        // input placeholder (굳이 이렇게 안써도 될 거 같음 // 리팩토링 필요)
        if (target.hasAttribute("placeholder")) {
            target.innerHTML = "";
            target.setAttribute("placeholder", val.en);
        }
    });

    // archive
    archiveData.forEach((data) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        const div = document.createElement("div");

        // make list
        li.setAttribute("class", "list");
        li.setAttribute("name", data.name);
        li.setAttribute("category", data.category);
        btn.setAttribute("class", "Nefarious toggle_font cursor_effect");
        btn.setAttribute("data-content", data.title.en);
        btn.innerHTML = data.title.en;

        // detail(accordion menu)
        div.setAttribute("class", "detail");
        div.setAttribute("name", data.name);
        div.setAttribute("category", data.category);

        // append
        li.appendChild(btn);
        li.appendChild(div);
        parent.appendChild(li);
    });

    selectOptions(budgietArr, "budgiet");
    selectOptions(timelineArr, "timeline");
    Archive(archiveData);
    Convert({ archiveData, textData });
}

// run
async function run() {
    await bindDom();
    Contact();
    CustomCursor();
    SymbolAnimation();
    Marquee(".marquee", 0.2);
}
run();

/**
 * 인트로는 MutationObserver으로 document에 변화를 감시하다가(load="ing"같은 attr)
 * 돔이 로드되고 난 후에(load이벤트 또는 기타 등등... [노마드 코더 리액트 예제에 있던 호출에 1초정도 걸리던 api가져와서 테스트해보면 좋을듯])
 * 인트로가 아직도 재생중이면, 인트로가 끝날때까지 기다리고 끝나면 감시하던 속성을 변경해서 인트로를 종료
 * 반대로 인트로가 끝났는데 아직도 돔이 로드되고 있으면, 로드가 끝날때까지 인트로 유지 후 로드가 끝나면 감시하던 속성을 변경해서 인트로를 종료
 * 감시하던 속성(attr같은) 제거 후
 * MutationObserver 종료 (일시정지 X)
 **/
