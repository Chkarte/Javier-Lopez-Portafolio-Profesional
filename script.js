// JavaScript Document


/* Open when someone clicks on the span element */

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("myNav1").style.height = "100%";

}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.height = "0%";
}

document.addEventListener('DOMContentLoaded', () => {
  adjustWhatsAppButton();
  window.addEventListener('resize', adjustWhatsAppButton);
});

function adjustWhatsAppButton() {
  const floatButton = document.querySelector('.float');

  if (!floatButton) {
    console.log('El botón .float no existe en el DOM.');
    return;
  }

  const width = window.innerWidth;
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;

  console.log(`Ancho: ${width}, Landscape: ${isLandscape}`);

  // Móvil horizontal
  if (width <= 767 && isLandscape) {
    console.log('Móvil horizontal');
    floatButton.style.setProperty('bottom', '120px', 'important');
    floatButton.style.setProperty('right', '20px', 'important');
    floatButton.style.setProperty('background-color', 'red', 'important'); // Prueba visual
  }
  // Tablet horizontal
  else if (width >= 768 && width <= 1024 && isLandscape) {
    console.log('Tablet horizontal');
    floatButton.style.setProperty('bottom', '30px', 'important');
    floatButton.style.setProperty('right', '30px', 'important');
    floatButton.style.setProperty('background-color', 'blue', 'important'); // Prueba visual
  }
  // Otros casos
  else {
    console.log('Otras resoluciones');
    floatButton.style.setProperty('bottom', '10px', 'important');
    floatButton.style.setProperty('right', '10px', 'important');
    floatButton.style.setProperty('background-color', '#ffc20e', 'important'); // Color original
  }
}

// Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', adjustWhatsAppButton);
window.addEventListener('resize', adjustWhatsAppButton);

const observer = new MutationObserver(() => {
  adjustWhatsAppButton();
});

const floatButton = document.querySelector('.float');
if (floatButton) {
  observer.observe(floatButton, { attributes: true, attributeFilter: ['style'] });
}