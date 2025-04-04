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
        
        // Reset modal layout to default (assume caption is present)
        document.querySelector('#imageModal .right-column').style.display = 'block';
        document.querySelector('#imageModal .left-column').style.width = '';
            
        // Clear existing caption content first
        captionText.innerHTML = '';

        // Find the nearest .two-column-layout parent
        const parentContainer = this.closest('.single-image') || this.closest('.listItemContent') || this.closest('.carousel-wrapper');
        let captionElement;

        // Check for a direct .caption or .carousel-container
        if (parentContainer) {
            captionElement = parentContainer.querySelector('.caption, .carousel-container');
        }

        // Append the content if it's found, ensuring no duplication
        if (captionElement) {
            const clone = captionElement.cloneNode(true); // Clone to preserve styles
            captionText.appendChild(clone); // Append to captionText
        
            // Hide left column if a carousel is present in the cloned content.
            if (clone.querySelector('.carousel-container')) {
                document.querySelector('#imageModal .left-column').style.display = 'none';
            } else {
                document.querySelector('#imageModal .left-column').style.display = 'block';
            }
        
            // Reinitialize the carousel inside the modal, if it exists.
            const modalCarousel = captionText.querySelector('.carousel-container');
            if (modalCarousel && window.initializeCarousel) {
                window.initializeCarousel(modalCarousel);
            }
        } else {
            // No caption found: hide right column and let image be full width.
            document.querySelector('#imageModal .right-column').style.display = 'none';
            document.querySelector('#imageModal .left-column').style.width = '100%';
        }

        // Add carousel controls event listeners for the modal
        const modalPrevButton = modal.querySelector(".carousel-prev");
        const modalNextButton = modal.querySelector(".carousel-next");

        if (modalPrevButton && modalNextButton) {
            modalPrevButton.addEventListener("click", () => {
                console.log("Modal carousel-prev clicked");
            });

            modalNextButton.addEventListener("click", () => {
                console.log("Modal carousel-next clicked");
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
