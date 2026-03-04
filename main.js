document.getElementById("year").textContent = new Date().getFullYear();

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const cards = Array.from(document.querySelectorAll(".project"));
cards.forEach((el, i) => {
  setTimeout(() => {
    el.style.transition = "all .5s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, 120 + i * 120);
});