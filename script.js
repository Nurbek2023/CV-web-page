// Example script for interactive elements
function displayContact() {
    alert("Email: nurbek.mamasaliev2023@gmail.com\nPhone: 0555290504 (Telegram, WhatsApp)");
}

// Additional dynamic feature
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");

    // On click, dynamically show additional info
    emailElement.addEventListener("click", function() {
        emailElement.textContent = "nurbek.mamasaliev2023@gmail.com";
    });

    phoneElement.addEventListener("click", function() {
        phoneElement.textContent = "0555290504 (Telegram, WhatsApp)";
    });
});
