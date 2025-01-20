// Get modal elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');

// Add event listener to clickable images
document.querySelectorAll('.clickable').forEach((img) => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;

        // Clear existing caption content first
        captionText.innerHTML = '';

        // Find the nearest .two-column-layout parent
        const parentContainer = this.closest('.two-column-layout');
        let captionElement;

        // Check for a direct .caption or .carousel-container
        if (parentContainer) {
            captionElement = parentContainer.querySelector('.caption, .carousel-container');
        }

        // Append the content if it's found, ensuring no duplication
        if (captionElement) {
            const clone = captionElement.cloneNode(true); // Clone to preserve styles
            captionText.appendChild(clone); // Append to captionText
        }

        // Add carousel controls event listeners for the modal
        const modalPrevButton = modal.querySelector(".carousel-prev");
        const modalNextButton = modal.querySelector(".carousel-next");

        if (modalPrevButton && modalNextButton) {
            modalPrevButton.addEventListener("click", () => {
                console.log("Modal carousel-prev clicked");
                // Add any further logic for the carousel-prev here
            });

            modalNextButton.addEventListener("click", () => {
                console.log("Modal carousel-next clicked");
                // Add any further logic for the carousel-next here
            });
        }
    });
});

// Close the modal
closeModal.onclick = function () {
    modal.style.display = 'none';
    modalImg.src = ''; // Clear image source
    captionText.innerHTML = ''; // Clear caption content
};

// Close modal on outside click
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalImg.src = ''; // Clear image source
        captionText.innerHTML = ''; // Clear caption content
    }
};
