document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-slide");
    const leftArrow = document.querySelector(".carousel-left-arrow");
    const rightArrow = document.querySelector(".carousel-right-arrow");

    const totalSlides = document.querySelectorAll(".carousel-slide > div").length;

    console.log("Total slides:", document.querySelectorAll(".carousel-slide > div"));
    console.log("Total slide count:", totalSlides);

    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = document.querySelector(".carousel-container").offsetWidth;
        const slides = document.querySelectorAll(".carousel-slide > div");
        
        console.log("Current slide:", currentSlide);
        console.log("Slide width:", slideWidth);
        
        slides.forEach((slide, index) => {
            const offset = (index - currentSlide) * slideWidth;
            console.log(`Slide ${index} offset:`, offset);
            slide.style.transform = `translateX(${offset}px)`;
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

    rightArrow.addEventListener("click", () => {
        console.log("Before increment, currentSlide:", currentSlide);
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            console.log("Reached the last slide");
        }
        console.log("After increment, currentSlide:", currentSlide);
        updateCarousel();
    });
    
    leftArrow.addEventListener("click", () => {
        console.log("Before decrement, currentSlide:", currentSlide);
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            console.log("Reached the first slide");
        }
        console.log("After decrement, currentSlide:", currentSlide);
        updateCarousel();
    });
    
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => goToSlide(idx));
    });

    updateCarousel();

    window.addEventListener("resize", updateCarousel);
});
