const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const dots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;

// Update slide positions
function updateCarousel() {
    const slideHeight = document.querySelector(".carousel").offsetHeight;
    slides[0].style.transform = `translateY(-${currentSlide * slideHeight}px)`;
}

// Handle next button
nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    updateCarousel();
});

// Handle prev button
prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop back to last slide
    updateCarousel();
});

// Dots navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Initial update
updateCarousel();
