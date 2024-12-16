let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselSlide = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-slide > div");
    const dots = document.querySelectorAll(".carousel-dots > span");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    const totalSlides = slides.length;

    // Function to update the carousel
    function updateCarousel() {
        const slideWidth = carouselContainer.offsetWidth;
        const translateX = -currentSlide * slideWidth;

        // Apply transform to move the slides
        carouselSlide.style.transform = `translateX(${translateX}px)`;

        // Update active dot
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentSlide);
        });
    }

    // Function to go to a specific slide
    function goToSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0; // Loop back to the first slide
        } else if (index < 0) {
            currentSlide = totalSlides - 1; // Loop to the last slide
        } else {
            currentSlide = index;
        }
        updateCarousel();
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener("click", () => goToSlide(currentSlide - 1));
    nextButton.addEventListener("click", () => goToSlide(currentSlide + 1));

    // Event listeners for dots
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => goToSlide(idx));
    });

    // Initial setup
    updateCarousel();

    // Responsive behavior: Recalculate positions on window resize
    window.addEventListener("resize", updateCarousel);
});
