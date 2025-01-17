document.addEventListener("DOMContentLoaded", () => {
    // General carousel logic
    function initializeCarousel(carousel) {
        const slides = carousel.querySelectorAll(".carousel-slide > *");
        const dots = carousel.querySelectorAll(".carousel-dots .dot");
        const prevButton = carousel.querySelector(".carousel-prev");
        const nextButton = carousel.querySelector(".carousel-next");
        let currentSlide = 0;

        // Update carousel state
        function updateCarousel() {
            const slideWidth = carousel.offsetWidth;
            slides.forEach((slide, index) => {
                const offset = (index - currentSlide) * slideWidth;
                slide.style.transform = `translateX(${offset}px)`;
                slide.classList.toggle("active", index === currentSlide);
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentSlide);
            });
        }

        // Add event listeners for navigation
        nextButton?.addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateCarousel();
        });

        prevButton?.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Initialize carousel
        updateCarousel();
    }

    // Initialize all carousels
    document.querySelectorAll(".carousel-container").forEach(initializeCarousel);
});
