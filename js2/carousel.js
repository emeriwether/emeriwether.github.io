document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-slide');
  const captions = carousel.querySelectorAll('p');
  const dots = document.querySelectorAll('.dot');

  // Debug Logs
  console.log('Carousel:', carousel);
  console.log('Slides:', captions);
  console.log('Dots:', dots);
  console.log('Prev Button:', prevBtn);
  console.log('Next Button:', nextBtn);

  let index = 0;

  const updateCarousel = () => {
    carousel.style.transform = `translateY(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : captions.length - 1;
    updateCarousel();
  });

  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    index = (index < captions.length - 1) ? index + 1 : 0;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      updateCarousel();
    });
  });

  updateCarousel();
});
