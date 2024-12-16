let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselSlide = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-slide > div");
    const dots = document.querySelectorAll(".carousel-dots > span");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    const totalSlides = slides.length;

    function updateCarousel() {
        const slideWidth = document.querySelector(".carousel-container").offsetWidth;
        const slides = document.querySelectorAll(".carousel-slide > div");
    
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        });
    
        // Debugging: Log the transform property of each slide
        slides.forEach((slide, index) => {
            console.log(`Slide ${index}: transform = ${slide.style.transform}`);
        });
    }

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

    prevButton.addEventListener("click", () => goToSlide(currentSlide - 1));
    nextButton.addEventListener("click", () => goToSlide(currentSlide + 1));

    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => goToSlide(idx));
    });

    updateCarousel();

    window.addEventListener("resize", updateCarousel);
});
