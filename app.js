const imagesContainer = document.querySelector(".imagesContainer");

for (let i = 1; i < 12; i++) {
  imagesContainer.innerHTML += `<img class="image" src="assets/m (${i}).png" draggable=false alt="lubba image">`;

}

const images = document.querySelectorAll(".image");
images.addEventListener("click", () => {
  image.style.width = "10px";
  console.log("asdasd");
});