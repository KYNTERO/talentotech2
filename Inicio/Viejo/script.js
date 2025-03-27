
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function nextSlide() {
        // Ocultar el slide actual
        slides[currentIndex].style.transform = `translateX(-100%)`;

        // Incrementar el índice y hacer que el carrusel pase al siguiente slide
        currentIndex = (currentIndex + 1) % totalSlides;

        // Mostrar el siguiente slide
        slides[currentIndex].style.transform = `translateX(0)`;
    }

    // Configurar el carrusel para que pase automáticamente cada 3 segundos
    setInterval(nextSlide, 3000);
