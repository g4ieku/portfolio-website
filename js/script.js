function runTypingEffect() {
   const text = "I am Grzegorz Czekaj";
   const typingElement = document.getElementById("typing-text");
   const typingDelay = 150;

   typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
   for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
         typingElement.textContent += text.charAt(i);
      }, delay * i);
   }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
// AOS - scrolling animation
AOS.init({ duration: 1000, easing: "ease-in-out" });
