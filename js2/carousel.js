let currentSlide = 0;
const totalSlides = document.querySelectorAll(".carousel-slide > div").length;


document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselSlide = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-slide > div");
    const dots = document.querySelectorAll(".carousel-dots > span");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

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

    nextButton.addEventListener("click", () => {
        console.log("Before increment, currentSlide:", currentSlide);
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            console.log("Reached the last slide");
        }
        console.log("After increment, currentSlide:", currentSlide);
        updateCarousel();
    });
    
    prevButton.addEventListener("click", () => {
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
