
// =====================================
// 1. MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");

const navigationMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navigationMenu.classList.toggle("show-menu");

    const menuIsOpen =
        navigationMenu.classList.contains("show-menu");

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", menuIsOpen);

});


// Close menu after selecting a link

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationMenu.classList.remove("show-menu");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// 2. DARK MODE / LIGHT MODE
// =====================================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("website-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


function updateThemeButton() {

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️ Light";

    } else {

        themeToggle.textContent = "🌙 Dark";

    }

}

updateThemeButton();


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const currentTheme =
        document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("website-theme", currentTheme);

    updateThemeButton();

});


// =====================================
// 3. LIVE DIGITAL CLOCK
// =====================================

function updateClock() {

    const clock = document.getElementById("live-clock");

    const currentTime = new Date();

    clock.textContent =
        currentTime.toLocaleTimeString();

}

updateClock();

setInterval(updateClock, 1000);


// =====================================
// 4. WELCOME MESSAGE
// =====================================

const welcomeButton =
    document.getElementById("welcome-button");

const welcomeMessage =
    document.getElementById("welcome-message");


welcomeButton.addEventListener("click", function () {

    welcomeMessage.textContent =
        "Thank you for visiting my website! Welcome to my world of Physics and Education.";

});


// =====================================
// 5. CONTACT FORM
// =====================================

const contactForm =
    document.getElementById("contact-form");

const formStatus =
    document.getElementById("form-status");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formStatus.textContent =
            "Please complete all the fields.";

        return;

    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        formStatus.textContent =
            "Please enter a valid email address.";

        return;

    }


    // Replace this with your actual email address.

    const receiver = "your-email@example.com";


    const subject = encodeURIComponent(
        "Website Contact Message from " + name
    );


    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    const mailtoLink =
        "mailto:" + receiver +
        "?subject=" + subject +
        "&body=" + body;


    formStatus.textContent =
        "Opening your email application...";

    window.location.href = mailtoLink;

});


// =====================================
// 6. CONSOLE MESSAGE
// =====================================

console.log("Welcome to Bibek Pandey's website!");

console.log("JavaScript loaded successfully!");

