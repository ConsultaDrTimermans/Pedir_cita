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

function copiarEmail() {
    const email = "admongabinete@fundacionquerer.org";
    const btn = document.getElementById('btnCopiar');
    const icon = document.getElementById('iconCopiar');
    const tooltip = document.getElementById('miTooltip');

    const ejecutarCopiado = () => {
        // Mostrar mensaje flotante
        tooltip.classList.add('show');
        btn.classList.add('success');
        if(icon) icon.classList.replace('fa-copy', 'fa-check');

        // Ocultar mensaje después de 1.5 segundos
        setTimeout(() => {
            tooltip.classList.remove('show');
            btn.classList.remove('success');
            if(icon) icon.classList.replace('fa-check', 'fa-copy');
        }, 1500);
    };

    // Intento con API moderna
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(ejecutarCopiado);
    } else {
        // Fallback para móviles/HTTP
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            ejecutarCopiado();
        } catch (err) {
            console.error('Error al copiar', err);
        }
        document.body.removeChild(textArea);
    }
}