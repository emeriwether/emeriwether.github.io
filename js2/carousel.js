document.addEventListener("DOMContentLoaded", () => {
    // Main page carousel selectors
    const mainCarousel = document.querySelector(".carousel-slide");
    const mainPrevButton = document.querySelector(".carousel-prev");
    const mainNextButton = document.querySelector(".carousel-next");
    const mainSlides = document.querySelectorAll(".carousel-slide > *");
    const mainDots = document.querySelectorAll(".carousel-dots .dot");

    let currentSlide = 0;

    function updateCarousel(slides, dots, containerWidth, currentIndex) {
        slides.forEach((slide, index) => {
            const offset = (index - currentIndex) * containerWidth;

            slide.style.transform = `translateX(${offset}px)`;
            slide.classList.toggle("active", index === currentIndex);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Initialize the main carousel
    if (mainCarousel) {
        const slideWidth = mainCarousel.offsetWidth;

        function updateMainCarousel() {
            updateCarousel(mainSlides, mainDots, slideWidth, currentSlide);
        }

        mainNextButton.addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % mainSlides.length;
            updateMainCarousel();
        });

        mainPrevButton.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + mainSlides.length) % mainSlides.length;
            updateMainCarousel();
        });

        updateMainCarousel();
    }

    // Modal carousel logic
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("caption");
    const closeModal = document.querySelector(".close");

    let modalSlides;
    let modalDots;
    let modalCurrentSlide = 0;

    document.querySelectorAll(".clickable").forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;

            // Setup modal-specific carousel
            const parentContainer = this.closest(".two-column-layout");
            if (parentContainer) {
                const modalCarousel = parentContainer.querySelector(".carousel-slide");
                modalSlides = modalCarousel.querySelectorAll(".slide-content");
                modalDots = modalCarousel.parentElement.querySelectorAll(".dot");
            }

            modalCurrentSlide = 0;
            updateModalCarousel();
        });
    });

    function updateModalCarousel() {
        if (modalSlides && modalDots) {
            const modalWidth = modalImg.offsetWidth;
            updateCarousel(modalSlides, modalDots, modalWidth, modalCurrentSlide);
        }
    }

    modal.querySelector(".carousel-next").addEventListener("click", () => {
        if (modalSlides) {
            modalCurrentSlide = (modalCurrentSlide + 1) % modalSlides.length;
            updateModalCarousel();
        }
    });

    modal.querySelector(".carousel-prev").addEventListener("click", () => {
        if (modalSlides) {
            modalCurrentSlide =
                (modalCurrentSlide - 1 + modalSlides.length) % modalSlides.length;
            updateModalCarousel();
        }
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modalImg.src = "";
        modalCaption.innerHTML = "";
        modalSlides = null;
        modalDots = null;
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            modalImg.src = "";
            modalCaption.innerHTML = "";
            modalSlides = null;
            modalDots = null;
        }
    });
});
