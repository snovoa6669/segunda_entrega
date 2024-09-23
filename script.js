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

