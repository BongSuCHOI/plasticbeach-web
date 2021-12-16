const accordion = {
    importImgs: function(r) {
        let images = {};
        r.keys().map(item => images[item.replace('./', '')] = r(item) );
        return images;
    },

    props: function(data) {
        const imgs = accordion.importImgs(require.context('../../images/img', false, /\.(jpe?g|png|gif)$/));
        const imgsUrl = Object.values(imgs);
        accordion.open(data, imgsUrl)
    },

    open: function(data, imgsUrl) {
        const targets = document.querySelectorAll('.list');

        targets.forEach((elem, i) => {
            const detail = elem.nextElementSibling;
            const html = `
                <div class="carousel">
                    <img src="${imgsUrl[i]}" alt="${data[i].name}" />
                </div>
                <div class="info_text">
                    <p>VFX. ${data[i].vfx}</p>
                    <p>VFX Supervisor. ${data[i].sv}</p>
                    <p>VFX Assistant Supervisor. ${data[i].asv}</p>
                    <p>VFX Project Manager. ${data[i].pm}</p>
                    <p>VFX Producer. ${data[i].pd}</p>
                    <p>3D Artist. ${data[i].art3d}</p>
                    <p>2D Artist. ${data[i].art2d}</p>
                    <p>FX Artist. ${data[i].fx}</p>
                </div>
            `;

            elem.addEventListener('click', () => {
                const tooltip = elem.querySelector('.video_tooltip');
                detail.innerHTML = html;

                setTimeout(() => {
                    if (detail.classList.contains("open")) {
                        detail.style.height = null;
                        detail.classList.remove("open");
                        elem.classList.remove("open");
                        return
                    }
    
                    accordion.clear();
                    detail.classList.add("open");
                    elem.classList.add("open");
                    detail.style.height = detail.scrollHeight + "px";
                    tooltip.style.display = "none";
                }, 10);
            });
        });
    },

    clear: function() {
        const details = document.querySelectorAll(".detail");
        details.forEach(elem => {
            elem.style.height = null;
            elem.classList.remove("open");
            elem.previousElementSibling.classList.remove("open");
        });
    }
}

export default accordion;