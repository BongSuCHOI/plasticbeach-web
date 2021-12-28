import emailjs from 'emailjs-com';

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

// run
EmailJs();
bindFileInput();