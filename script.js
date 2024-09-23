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
const newTitleDelay = 1000; // Delay before starting to type the next title

const typingElement = document.getElementById("typing-text");

function type() {
    // Get the current title
    const currentTitle = titles[currentTitleIndex];

    if (isDeleting) {
        // Remove characters if deleting
        typingElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            // Move to the next title
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length; // Loop back to start after the last title
            setTimeout(type, typingSpeed); // Wait before starting to type next title
        } else {
            setTimeout(type, erasingSpeed);
        }
    } else {
        // Add characters if typing
        typingElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentTitle.length) {
            // All characters typed, start erasing after a delay
            isDeleting = true;
            setTimeout(type, newTitleDelay);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, typingSpeed);
});
