let sliderRange = document.querySelector(".slider__range");
let value = 0;
sliderRange.addEventListener("input", () => {
  value = sliderRange.value
  document.querySelector(".slider__image-foreground").style.width = `${value}%`
});
