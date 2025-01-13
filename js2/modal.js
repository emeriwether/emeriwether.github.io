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

        // Find the closest caption element associated with the image
        const parentCard = this.closest('.card'); // Adjust based on your current structure
        const captionElement = parentCard ? parentCard.querySelector('.caption') : null;

        if (captionElement) {
            captionText.innerHTML = captionElement.innerHTML; // Use the caption's content
        } else {
            captionText.innerHTML = ''; // Clear caption if no caption exists
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
