// Get modal elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');

// Add event listener to clickable images
document.querySelectorAll('.clickable').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;

        // Find the nearest .two-column-layout parent
        const parentContainer = this.closest('.two-column-layout'); 
        let captionElement;

        // Check for a direct .caption or .carousel-container
        if (parentContainer) {
            captionElement = parentContainer.querySelector('.caption, .carousel-container');
        }

        // Use the found caption or leave it blank
        captionText.innerHTML = captionElement ? captionElement.innerHTML : '';
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
