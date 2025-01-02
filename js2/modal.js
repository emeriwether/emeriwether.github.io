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

        // Clone the caption on the page into the modal
        const parentCaption = this.closest('.imageWithCaption').querySelector('.caption');
        captionText.innerHTML = parentCaption.innerHTML;
    });
});

// Close the modal
closeModal.onclick = function () {
    modal.style.display = 'none';
};

// Close modal on outside click
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
