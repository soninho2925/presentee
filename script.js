const btn = document.getElementById("showMessage");
const messageElement = document.getElementById("message");
const heartsContainer = document.getElementById("hearts-container");

const message = "Eu te amo muito sabia?\nEstou com sdds de vc! 💕";

btn.addEventListener("click", () => {
  btn.style.display = "none";
  typeWriter(message);
  launchHearts();
});

function typeWriter(text, i = 0) {
  messageElement.classList.remove("hidden");
  if (i < text.length) {
    messageElement.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 50);
  }
}

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.textContent = "❤️";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
