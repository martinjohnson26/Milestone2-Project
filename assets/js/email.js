function sendMail(contactForm) {
    emailjs.send("gmail", "martin_johnson", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "your_message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}