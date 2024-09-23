function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const titles = ["Software Developer", "Frontend Developer", "Backend Developer"];
let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const newTitleDelay = 1000; 

const typingElement = document.getElementById("typing-text");

function type() {
    const currentTitle = titles[currentTitleIndex];

    if (isDeleting) {
        typingElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length; 
            setTimeout(type, typingSpeed); 
        } else {
            setTimeout(type, erasingSpeed);
        }
    } else {
        typingElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, newTitleDelay);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, typingSpeed);
});
