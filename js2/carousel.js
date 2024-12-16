document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-slide");
    const prevButton = document.querySelector(".carousel-prev"); // Updated class
    const nextButton = document.querySelector(".carousel-next"); // Updated class

    // Total slides inside carousel
    const totalSlides = document.querySelectorAll(".carousel-slide > *").length;
    console.log("Total slides:", totalSlides);

    let currentSlide = 0;

    // Function to update carousel position
    function updateCarousel() {
        const slideWidth = document.querySelector(".carousel-container").offsetWidth;
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.transform = `translateX(0)`; // Center the current slide
                slide.style.opacity = "1"; // Make the current slide visible
                slide.style.zIndex = "1"; // Ensure it's on top
            } else if (index < currentSlide) {
                slide.style.transform = `translateX(-100%)`; // Move previous slides left
                slide.style.opacity = "0"; // Hide non-visible slides
                slide.style.zIndex = "0"; // Send it to the back
            } else {
                slide.style.transform = `translateX(100%)`; // Move next slides right
                slide.style.opacity = "0"; // Hide non-visible slides
                slide.style.zIndex = "0"; // Send it to the back
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
