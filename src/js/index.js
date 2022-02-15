// data
import archiveJson from "./data/archive.json";
import textJson from "./data/text.json";

// module
import IsMobile from "./utils/isMobile";
import Archive from "./ui/archive";
import Contact from "./ui/contact";
import EmailJs from "./utils/emailJs";
import Convert from "./ui/convert";
import CustomCursor from "./ui/customCursor";
import SymbolAnimation from "./ui/symbolAnimation";
import Marquee from "./ui/marquee";
import MobileNavigation from "./mobile/navigation";

// test
import MarqueeArchiveSubject from "./mobile/marqueeArchiveSubject";

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
        const isMarquee = target.classList.contains("marquee_text");
        const isTextInput = target.hasAttribute("placeholder");

        target.innerHTML = val.en;

        if (isMarquee) target.innerHTML = val.en + val.en;
        if (isTextInput) {
            target.innerHTML = "";
            target.setAttribute("placeholder", val.en);
        }
    });

    // archive
    archiveData.forEach((data) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        const p = document.createElement("p");
        const span = document.createElement("span");
        const div = document.createElement("div");

        // make list
        li.setAttribute("class", "list");
        li.setAttribute("name", data.name);
        li.setAttribute("category", data.category);
        btn.setAttribute("class", "subject Nefarious toggle_font cursor_effect cursor_pointer");
        span.setAttribute("data-content", data.title.en);
        span.innerHTML = data.title.en;

        // detail(accordion menu)
        div.setAttribute("class", "detail");
        div.setAttribute("name", data.name);
        div.setAttribute("category", data.category);

        // append
        p.appendChild(span);
        btn.appendChild(p);
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
    Marquee();
    MobileNavigation();
    setTimeout(MarqueeArchiveSubject);
    // 왜 setTimeout말고 그냥 실행하면 MarqueeArchiveSubject안에 offsetWidth가 이상하게 나오지?
    // MarqueeArchiveSubject();
}
run();

/**
 * 인트로는 MutationObserver으로 document에 변화를 감시하다가(load="ing"같은 attr)
 * 돔이 로드되고 난 후에(load이벤트 또는 기타 등등... [노마드 코더 리액트 예제에 있던 호출에 1초정도 걸리던 api가져와서 테스트해보면 좋을듯
 * 인트로가 아직도 재생중이면, 인트로가 끝날때까지 기다리고 끝나면 감시하던 속성을 변경해서 인트로를 종료
 * 반대로 인트로가 끝났는데 아직도 돔이 로드되고 있으면, 로드가 끝날때까지 인트로 유지 후 로드가 끝나면 감시하던 속성을 변경해서 인트로를 종료
 * 감시하던 속성(attr같은) 제거 후
 * MutationObserver 종료 (일시정지 X)
 *
 * 아니면 이터러블이였나 next로 순차적으로 비동기? 처리 가능한... 책에서 봤던거 같은데 그거 찾아보고 괜찮을거 같으면 그거로 데이터 패치, 돔 바인드 끝날때마다 프로그래스 퍼센트로 처리해서 해도 될거같기도 함
 **/
