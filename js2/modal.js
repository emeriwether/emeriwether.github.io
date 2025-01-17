document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeModal = document.querySelector(".close");

  // Add event listener to clickable images
  document.querySelectorAll(".clickable").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;

      // Find the nearest .two-column-layout parent
      const parentContainer = this.closest(".two-column-layout");
      let captionElement;

      if (parentContainer) {
        captionElement = parentContainer.querySelector(".caption, .carousel-container");

        // Check if this modal should have a carousel
        const carousel = parentContainer.querySelector(".carousel-container");
        if (carousel) {
          const carouselClone = carousel.cloneNode(true);
          modal.querySelector(".left-column").appendChild(carouselClone);

          // Initialize the carousel
          initCarousel(carouselClone);
        }
      }

      captionText.innerHTML = captionElement ? captionElement.innerHTML : "";
    });
  });

  // Close modal and cleanup
  closeModal.onclick = function () {
    modal.style.display = "none";
    modalImg.src = "";
    captionText.innerHTML = "";

    // Remove any dynamically added carousel
    const dynamicCarousel = modal.querySelector(".carousel-container");
    if (dynamicCarousel) {
      dynamicCarousel.remove();
    }
  };
});

// Function to initialize carousel functionality
function initCarousel(carousel) {
  const slides = carousel.querySelectorAll(".slide-content");
  const prevButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");

  let currentSlide = 0;

  function updateCarousel() {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
  }

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });

  updateCarousel();
}
