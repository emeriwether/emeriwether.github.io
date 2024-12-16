document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-slide");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const dots = document.querySelectorAll(".carousel-dots span");

    // Capture all slides
    const slides = document.querySelectorAll(".carousel-slide > *");
    const totalSlides = slides.length;
    console.log("Total slides:", totalSlides);

    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = document.querySelector(".carousel-container").offsetWidth;
        slides.forEach((slide, index) => {
            const offset = (index - currentSlide) * slideWidth;
            slide.style.transform = `translateX(${offset}px)`;
            slide.style.transition = "transform 0.3s ease"; // Smooth transitions
            console.log(`Slide ${index} transform: ${slide.style.transform}`);
        });
    
        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    
        console.log(`Current slide: ${currentSlide}, slide width: ${slideWidth}`);
    }

    // Navigation logic
    nextButton.addEventListener("click", () => {
        console.log("Next button clicked");
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Wrap back to the first slide
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        console.log("Previous button clicked");
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Wrap to the last slide
        }
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel();
});
