const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector("#userName");
    const emailInput = document.querySelector("#userEmail");
    const numberInput = document.querySelector("#phoneNumber");
    const messageInput = document.querySelector("#userMessage");
    const sendMessageButton = document.querySelector("#sendMessageButton");

    const serviceID = 'service_gf266ae';
    const templateID = 'template_zk1ss4l';
    const publicKey = 'xXQkGBdAaXMfKey39';

    emailjs.init(publicKey);

    sendMessageButton.addEventListener('click', () => {
       
        if (!nameInput.value || !emailInput.value || !numberInput.value || !messageInput.value) {
            alert('Please fill in all fields before submitting.');
            return; 
        }

        const inputData = {
            name: nameInput.value,
            email: emailInput.value,
            number: numberInput.value,
            message: messageInput.value,
        };

        emailjs.send(serviceID, templateID, inputData).then(
            () => {
           
                nameInput.value = '';
                emailInput.value = '';
                numberInput.value = '';
                messageInput.value = '';
                alert('Email sent successfully');
            },
            (error) => {
                alert('Failed to send email: ' + error);
            }
        );
    });
});
