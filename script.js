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

function adjustWhatsAppButton() {
  const floatButton = document.querySelector('.float');

  if (!floatButton) return;

  const width = window.innerWidth;
  const orientation = window.orientation;

  // Móvil horizontal
  if (width <= 767 && (orientation === 90 || orientation === -90)) {
      floatButton.style.bottom = '40vh';
      floatButton.style.right = '50vw';
      floatButton.style.backgroundColor = 'red'; // Prueba visual
  }
  // Móvil vertical
  else if (width <= 767) {
      floatButton.style.bottom = '10vh';
      floatButton.style.right = '4.1vw';
  }
  // Tablet horizontal
  else if (width >= 768 && width <= 1024 && (orientation === 90 || orientation === -90)) {
      floatButton.style.bottom = '10vh';
      floatButton.style.right = '5vw';
  }
  // Tablet vertical
  else if (width >= 768 && width <= 1024) {
      floatButton.style.bottom = '7vh';
      floatButton.style.right = '8vw';
  }
  // Desktop
  else if (width >= 1068) {
      floatButton.style.bottom = '9vh';
      floatButton.style.right = '5.3vw';
  }
}

// Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', adjustWhatsAppButton);
window.addEventListener('resize', adjustWhatsAppButton);

function updateWhatsAppClass() {
  const floatButton = document.querySelector('.float');

  if (!floatButton) return;

  const width = window.innerWidth;
  const orientation = window.orientation;

  floatButton.className = 'float'; // Reinicia las clases

  if (width <= 767 && (orientation === 90 || orientation === -90)) {
      floatButton.classList.add('mobile-horizontal');
  } else if (width <= 767) {
      floatButton.classList.add('mobile-vertical');
  } else if (width >= 768 && width <= 1024 && (orientation === 90 || orientation === -90)) {
      floatButton.classList.add('tablet-horizontal');
  } else if (width >= 768 && width <= 1024) {
      floatButton.classList.add('tablet-vertical');
  } else if (width >= 1068) {
      floatButton.classList.add('desktop');
  }
}

window.addEventListener('load', updateWhatsAppClass);
window.addEventListener('resize', updateWhatsAppClass);

