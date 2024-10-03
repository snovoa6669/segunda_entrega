window.onload = function() {
    var modal = document.getElementById("modal-registro");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function irACategoria(categoria) {
    window.location.href = `categoria.html?categoria=${categoria}`;
}
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image"); // Selecciona todas las imágenes del carrusel
    const prevBtn = document.querySelector(".prev-btn");         // Selecciona el botón de retroceso
    const nextBtn = document.querySelector(".next-btn");         // Selecciona el botón de avance
    let currentIndex = 0;                                        // Índice de la imagen actual

    // Función para actualizar el carrusel
    function updateCarousel() {
        images.forEach((img, index) => {
            img.style.display = (index === currentIndex) ? 'block' : 'none'; // Muestra solo la imagen actual
        });
    }

    // Evento para avanzar a la siguiente imagen
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;        // Mueve al siguiente índice
        updateCarousel();                                         // Actualiza el carrusel
    });

    // Evento para retroceder a la imagen anterior
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Mueve al índice anterior
        updateCarousel();                                                  // Actualiza el carrusel
    });

    // Inicializa el carrusel mostrando la primera imagen
    updateCarousel();
});

document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('click', (e) => {
        const estrellas = rating.querySelectorAll('.star');
        const valor = e.target.dataset.value;

        estrellas.forEach(star => {
            star.classList.remove('selected');
            if (star.dataset.value <= valor) {
                star.classList.add('selected');
            }
        });

        // Guarda el valor de la puntuación si es necesario
        rating.setAttribute('data-rating', valor);
        console.log(`Puntuación seleccionada: ${valor}`);
    });
});
// Simulación de inicio de sesión
function iniciarSesion() {
    // Lógica para iniciar sesión (esto debe incluir validación)
    
    // Una vez que el usuario inicia sesión, oculta los botones
    document.getElementById("loginBtn").style.visibility = "hidden"; // Ocultar botón de iniciar sesión
    document.getElementById("registerBtn").style.visibility = "hidden"; // Ocultar botón de registro
    document.getElementById("usuarioActivo").style.visibility = "visible"; // Hacer visible el nombre del usuario

    // Aquí puedes asignar el nombre del usuario, por ejemplo:
    document.getElementById("usuarioActivo").innerHTML = "Usuario: Juan Pérez"; // Cambia esto según tu lógica
}

// Simulación de inicio de sesión al cargar la página
window.onload = function() {
    // Supongamos que el usuario ya está logueado
    var usuarioLogueado = true; // Cambia esto a la lógica real de tu aplicación
    if (usuarioLogueado) {
        iniciarSesion(); // Llama a la función para ocultar botones
    }
};
// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Aquí debes validar las credenciales del usuario (esto es solo un ejemplo)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lógica de validación (aquí es donde deberías verificar las credenciales en un servidor)
    if (username === "usuarioEjemplo" && password === "contraseñaEjemplo") { // Cambia esto a tu lógica real
        // Guardar el nombre de usuario en localStorage o sessionStorage
        localStorage.setItem("usuario", username);

        // Redirigir a la página de inicio
        window.location.href = "index.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});
