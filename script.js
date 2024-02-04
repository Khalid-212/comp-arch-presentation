document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active-slide");
      } else {
        slide.classList.remove("active-slide");
      }
      if (i === index - 1 || (index === 0 && i === slides.length - 1)) {
        slide.classList.add("prev-slide");
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    } else if (e.key === "ArrowLeft") {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  });

  showSlide(currentSlide);
});
