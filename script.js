const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const need = document.getElementById("need").value.trim();

  if (!name || !mobile || !need) return;

  const message = [
    "Hello SJ Cranes Services,",
    "",
    `Name: ${name}`,
    `Mobile: ${mobile}`,
    `Crane / lifting requirement: ${need}`,
    "",
    "Please contact me regarding this enquiry."
  ].join("\\n");

  window.open("https://wa.me/919343712333?text=" + encodeURIComponent(message), "_blank", "noopener");
});
