// Vorher-Nachher Slider
const slider = document.querySelector(".slider");
const afterImg = document.querySelector(".slider-after");
if (slider && afterImg) {
  slider.addEventListener("input", () => {
    afterImg.style.clipPath = `inset(0 ${100 - slider.value}% 0 0)`;
  });
}
// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImgs = document.querySelectorAll(".lightbox-img");
galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
