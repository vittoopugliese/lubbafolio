const imagesContainer = document.querySelector(".imagesContainer");

for (let i = 0; i < 12; i++) {
  imagesContainer.innerHTML += `<img class="image" src="assets/m (${i + 1}).png" draggable=false alt="lubba image">`;
}

const html = document.querySelector("html");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modalBg");
const imageModal = document.querySelector(".imageModal");

window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  for (let i = 0; i < 12; i++) {
    images[i].addEventListener("click", () => {
      imageModal.innerHTML = `<img class="modalImage" draggable=false src="${images[i].getAttribute("src")}" >`;
      modal.style.display = "flex";
      modalBg.style.display = "flex";
      setTimeout(() => {
        modal.style.opacity = "1";
        modalBg.style.opacity = "1";
        html.style.overflow = "hidden";
      }, 154);
    });
  }
});

modalBg.addEventListener("click", closeModal);
function closeModal() {
  modal.style.opacity = "0";
  modalBg.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
    modalBg.style.display = "none";
    html.style.overflow = "auto";
  }, 200);
}
