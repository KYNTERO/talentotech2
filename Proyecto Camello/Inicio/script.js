document.addEventListener("DOMContentLoaded", function () {
      const slides = document.querySelectorAll(".carrusel-slide");
      const totalSlides = slides.length;
      let currentIndex = 0;

      function moveCarousel() {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateCarousel();
      }

      function updateCarousel() {
          const container = document.querySelector(".carrusel-contenedor");
          container.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      // Cambia la imagen cada 3 segundos
      setInterval(moveCarousel, 3000);
  });
