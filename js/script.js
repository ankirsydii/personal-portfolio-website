console.log("Portfolio Loaded");

const roles = [
    "Web Developer",
    "Mobile Developer",
    "AR Enthusiast",
    "3D Modelling"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();