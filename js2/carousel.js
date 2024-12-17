document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-slide");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    const slides = document.querySelectorAll(".carousel-slide > p");
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = carousel.offsetWidth;
    
        slides.forEach((slide, index) => {
            const offset = (index - currentSlide) * slideWidth;
    
            slide.style.transform = `translateX(${offset}px)`;
    
            // Add 'active' class to the current slide
            if (index === currentSlide) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    
        // Update dots
        const dots = document.querySelectorAll(".carousel-dots .dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    
        console.log(`Current Slide Index: ${currentSlide}`);
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
