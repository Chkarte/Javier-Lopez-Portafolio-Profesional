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
      floatButton.style.bottom = '20px';
      floatButton.style.right = '20px';
      floatButton.style.backgroundColor = 'red'; // Prueba visual
  }
  // Tablet horizontal
  else if (width >= 768 && width <= 1024 && isLandscape) {
      console.log('Tablet horizontal');
      floatButton.style.bottom = '30px';
      floatButton.style.right = '30px';
      floatButton.style.backgroundColor = 'blue'; // Prueba visual
  }
  // Otros casos
  else {
      console.log('Otras resoluciones');
      floatButton.style.bottom = '10px';
      floatButton.style.right = '10px';
      floatButton.style.backgroundColor = '#ffc20e'; // Color original
  }
}

// Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', adjustWhatsAppButton);
window.addEventListener('resize', adjustWhatsAppButton);
