const imagesContainer = document.querySelector(".imagesContainer");

for (let i = 1; i < 13; i++) {
  imagesContainer.innerHTML += `<img class="image" src="assets/m (${i}).png" draggable=false alt="lubba image">`;
}

window.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelectorAll(".image");
  for (let i = 1; i < 12; i++) {
    let images = image[i]
    images.addEventListener("click", () => {
      image.style.width = "10px";
      console.log("asdasd");
    });
  }
});
