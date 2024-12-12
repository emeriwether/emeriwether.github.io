document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-slide');
    const captions = carousel.querySelectorAll('p');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    let index = 0;

    const updateCarousel = () => {
        // Move the carousel slide horizontally
        carousel.style.transform = `translateX(-${index * 100}%)`;

        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : captions.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < captions.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    // Event listeners for dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
    });

    // Initialize carousel position
    updateCarousel();
});
