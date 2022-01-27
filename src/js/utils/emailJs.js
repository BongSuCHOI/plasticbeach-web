// library import
import emailjs from "emailjs-com";

// Email Js Library
const EmailJs = () => {
    const formElem = document.getElementById("contact-form");

    const sendEmail = async (e) => {
        const apiData = emailjs.sendForm("service_o7o9yvm", "template_i90fmnx", e, "user_VqHFKDuJ0yd1xOoOukLDG");

        // generate a five digit number for the contact_number variable
        e.contact_number.value = (Math.random() * 100000) | 0;

        // these IDs from the previous steps
        try {
            const res = await apiData;
            if (res.status === 200) window.location.reload();
        } catch (err) {
            console.log("FAILED : ", err);
            alert("문의메일 전송에 실패하였습니다. 다시 시도해 주세요.");
        }
    };

    formElem.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail(e.currentTarget);
    });
};

EmailJs();
