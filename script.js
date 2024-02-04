document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active-slide", i === index);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
      currentSlide++;
    } else if (e.key === "ArrowLeft" && currentSlide > 0) {
      currentSlide--;
    }
    showSlide(currentSlide);
  });

  document.addEventListener("click", function () {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});
