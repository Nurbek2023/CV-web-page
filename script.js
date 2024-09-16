
// Display contact information in an alert box
function displayContact() {
    alert("Email: nurbek.mamasaliev2023@gmail.com\nPhone: 0555290504 (Telegram, WhatsApp)");
}

// Adding dynamic interaction for contact info
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");

    // Email click event: show message
    emailElement.addEventListener("click", function() {
        emailElement.textContent = "nurbek.mamasaliev2023@gmail.com";
    });

    // Phone click event: show message
    phoneElement.addEventListener("click", function() {
        phoneElement.textContent = "0555290504 (Telegram, WhatsApp)";
    });
});

// Add smooth scrolling when clicking buttons or navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
