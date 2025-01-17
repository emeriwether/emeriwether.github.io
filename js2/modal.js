// Get modal elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');

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
