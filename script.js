// Acordeón
const toggles = document.querySelectorAll(".accordion-toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    content.style.display =
      content.style.display === "none" ? "block" : "none";

    toggle.classList.toggle("active");
  });
});


// Toggle del menú hamburguesa
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
});
