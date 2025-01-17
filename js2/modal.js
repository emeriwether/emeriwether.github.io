// Modal-specific logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Add event listener to clickable images
document.querySelectorAll(".clickable").forEach((img) => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;

        // Set the caption if available
        const parentContainer = this.closest(".two-column-layout");
        let captionElement = parentContainer?.querySelector(".caption");
        captionText.innerHTML = captionElement ? captionElement.innerHTML : ""; // Set caption or leave blank
    });
});

// Close the modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = ""; // Clear image source
    captionText.innerHTML = ""; // Clear caption content
});

// Close modal on outside click
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        modalImg.src = ""; // Clear image source
        captionText.innerHTML = ""; // Clear caption content
    }
});
