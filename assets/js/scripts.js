document.getElementById("menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});

const swiper = new Swiper(".dAlcantarillados", {
    slidesPerView: 1, // Por defecto, en pantallas pequeñas muestra 1 tarjeta
    spaceBetween: 20, // Espacio entre cada tarjeta
    breakpoints: {
        640: {
            slidesPerView: 1, // En móviles pequeños muestra 1 tarjeta
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, // En pantallas medianas muestra 2 tarjetas
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3, // En pantallas grandes muestra 3 tarjetas
            spaceBetween: 30,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperFosas = new Swiper(".lFosas", {
    slidesPerView: 1, // Por defecto, en pantallas pequeñas muestra 1 tarjeta
    spaceBetween: 20, // Espacio entre cada tarjeta
    breakpoints: {
        640: {
            slidesPerView: 1, // En móviles pequeños muestra 1 tarjeta
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, // En pantallas medianas muestra 2 tarjetas
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3, // En pantallas grandes muestra 3 tarjetas
            spaceBetween: 30,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiperBombas = new Swiper(".bSumergibles", {
    slidesPerView: 1, // Por defecto, en pantallas pequeñas muestra 1 tarjeta
    spaceBetween: 20, // Espacio entre cada tarjeta
    breakpoints: {
        640: {
            slidesPerView: 1, // En móviles pequeños muestra 1 tarjeta
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, // En pantallas medianas muestra 2 tarjetas
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3, // En pantallas grandes muestra 3 tarjetas
            spaceBetween: 30,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});