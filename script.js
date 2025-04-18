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
    floatButton.style.bottom = '40vh';
    floatButton.style.right = '50vw';
    floatButton.style.backgroundColor = 'red'; // Prueba visual
  }
  // Móvil vertical
  else if (width <= 767) {
    console.log('Móvil vertical');
    floatButton.style.bottom = '10vh';
    floatButton.style.right = '4.1vw';
  }
  // Tablet horizontal
  else if (width >= 768 && width <= 1024 && isLandscape) {
    console.log('Tablet horizontal');
    floatButton.style.bottom = '10vh';
    floatButton.style.right = '5vw';
  }
  // Tablet vertical
  else if (width >= 768 && width <= 1024) {
    console.log('Tablet vertical');
    floatButton.style.bottom = '7vh';
    floatButton.style.right = '8vw';
  }
  // Desktop
  else if (width >= 1025) {
    console.log('Desktop');
    floatButton.style.bottom = '9vh';
    floatButton.style.right = '5.3vw';
  }
}

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
    floatButton.style.bottom = '40vh';
    floatButton.style.right = '50vw';
    floatButton.style.backgroundColor = 'red'; // Prueba visual
  }
  // Móvil vertical
  else if (width <= 767) {
    console.log('Móvil vertical');
    floatButton.style.bottom = '10vh';
    floatButton.style.right = '4.1vw';
  }
  // Tablet horizontal
  else if (width >= 768 && width <= 1024 && isLandscape) {
    console.log('Tablet horizontal');
    floatButton.style.bottom = '10vh';
    floatButton.style.right = '5vw';
  }
  // Tablet vertical
  else if (width >= 768 && width <= 1024) {
    console.log('Tablet vertical');
    floatButton.style.bottom = '7vh';
    floatButton.style.right = '8vw';
  }
  // Desktop
  else if (width >= 1025) {
    console.log('Desktop');
    floatButton.style.bottom = '9vh';
    floatButton.style.right = '5.3vw';
  }
}

// Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', adjustWhatsAppButton);
window.addEventListener('resize', adjustWhatsAppButton);


