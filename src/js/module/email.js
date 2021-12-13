import emailjs from 'emailjs-com';

function EmailJs() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_o7o9yvm', 'template_i90fmnx', this, 
        'user_VqHFKDuJ0yd1xOoOukLDG')
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

export default EmailJs;