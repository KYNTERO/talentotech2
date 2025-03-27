document.addEventListener("DOMContentLoaded", function () {
    let indexActual = 0;
    const slides = document.querySelectorAll(".slide");
    const puntos = document.querySelectorAll(".punto");

    function mostrarSlide(index) {
        if (index >= slides.length) indexActual = 0;
        else if (index < 0) indexActual = slides.length - 1;
        else indexActual = index;

        const desplazamiento = -indexActual * 100 + "%";
        document.querySelector(".carrusel-contenedor").style.transform = `translateX(${desplazamiento})`;

        puntos.forEach((punto, i) => {
            punto.classList.toggle("active", i === indexActual);
        });
    }

    function irASlide(index) {
        mostrarSlide(index);
    }

    setInterval(() => {
        mostrarSlide(indexActual + 1);
    }, 5000);

    puntos.forEach((punto, index) => {
        punto.addEventListener("click", () => irASlide(index));
    });

    mostrarSlide(indexActual);
});