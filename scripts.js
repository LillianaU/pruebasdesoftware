const navLinks = document.querySelectorAll('nav a');  // Obtener todos los enlaces del menú
const contenido = document.querySelector('#contenido');  // Obtener el contenedor de contenido

// Función que se ejecuta al hacer clic en un enlace del menú
function cargarContenido(event) {
  event.preventDefault();  // Prevenir que el enlace cargue la página completa
  const url = this.getAttribute('href');  // Obtener la URL del enlace
  fetch(url)
    .then(response => response.text())  // Obtener el contenido de la página como texto
    .then(data => contenido.innerHTML = data)  // Insertar el contenido en el contenedor
    .catch(error => console.error(error));  // Manejar errores en caso de que la carga falle
}

// Asignar la función de carga de contenido a cada enlace del menú
navLinks.forEach(link => {
  link.addEventListener('click', cargarContenido);
});