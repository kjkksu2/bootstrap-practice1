function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

function runTypingEffect() {
  const text = "I am Markus.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
