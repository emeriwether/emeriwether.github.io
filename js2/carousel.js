document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-slide");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    const slides = document.querySelectorAll(".carousel-slide > p");
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = carousel.offsetWidth; // Get carousel width
        console.log(`Current Slide Index: ${currentSlide}, Slide Width: ${slideWidth}`);
    
        slides.forEach((slide, index) => {
            const offset = (index - currentSlide) * carousel.offsetWidth;
        
            slide.style.transform = `translateX(${offset}px)`;
        
            // Make only the current slide visible
            if (index === currentSlide) {
                slide.style.opacity = "1";
                slide.style.zIndex = "1";
            } else {
                slide.style.opacity = "0";
                slide.style.zIndex = "0";
            }
        });
    }

    // Right arrow click
    nextButton.addEventListener("click", () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Loop back to first slide
        }
        updateCarousel();
    });

    // Left arrow click
    prevButton.addEventListener("click", () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1; // Loop back to last slide
        }
        updateCarousel();
    });

    updateCarousel(); // Initialize carousel position
});
