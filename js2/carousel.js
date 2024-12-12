document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".carousel-control.prev");
    const next = document.querySelector(".carousel-control.next");

    let index = 0;

    const updateCarousel = () => {
        // Move the carousel slide horizontally
        carousel.style.transform = `translateX(-${index * 100}%)`;

        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };
const showPrev = () => {
        index = (index - 1 + dots.length) % dots.length;
        updateCarousel();
    };

    const showNext = () => {
        index = (index + 1) % dots.length;
        updateCarousel();
    };

    prev.addEventListener("click", showPrev);
    next.addEventListener("click", showNext);
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            updateCarousel();
        });
    });

    updateCarousel();
});
