const pages = [...document.querySelectorAll(".page")];
const music = document.getElementById("invitationMusic");

function showPage(number) {
  pages.forEach(page => page.classList.toggle("active", page.id === `page-${number}`));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("openInvitation").addEventListener("click", async () => {
  try {
    await music.play();
  } catch (error) {
    console.warn("Add a valid music.mp3 file beside index.html to enable music.", error);
  }
  showPage(2);
});

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => showPage(Number(button.dataset.next)));
});

document.getElementById("restartInvitation").addEventListener("click", () => showPage(1));

const layer = document.querySelector(".sparkle-layer");
const count = matchMedia("(max-width:480px)").matches ? 42 : 72;
for (let i = 0; i < count; i++) {
  const dot = document.createElement("span");
  dot.className = "sparkle";
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
  dot.style.animationDelay = `${Math.random() * 5}s`;
  const size = 1.2 + Math.random() * 2.8;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  layer.appendChild(dot);
}
