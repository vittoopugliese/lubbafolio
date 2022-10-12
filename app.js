const imagesContainer = document.querySelector(".imagesContainer");

for (let i = 0; i < 12; i++) {
  imagesContainer.innerHTML += `<img class="image" src="assets/m (${i + 1}).png" draggable=false alt="lubba image">`;
}

const html = document.querySelector("html");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modalBg");
const imageModal = document.querySelector(".imageModal");
const toRight = document.querySelector(".toRight");
const toLeft = document.querySelector(".toLeft");

window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");

  for (let i = 0; i < 12; i++) {
    images[i].addEventListener("click", () => {

      let p = 0;
      showModal();
      replaceImage(images, i, p);

      toRight.addEventListener("click", () => {
        p++;
        replaceImage(images, i, p);
      });

      toLeft.addEventListener("click", () => {
        p--;
        replaceImage(images, i, p);
      });

    });
  }
});

function replaceImage(images, i, p) {
  (i + p == 0) ? toLeft.style.display = 'none' : toLeft.style.display = 'flex';
  (i + p == 11) ? toRight.style.display = 'none' : toRight.style.display = 'flex';
  imageModal.innerHTML = `<img class="modalImage" draggable=false src="${images[i + p].getAttribute("src")}" >`;
}

function showModal() {
  modal.style.display = "flex";
  modalBg.style.display = "flex";
  setTimeout(() => {
    modal.style.opacity = "1";
    modalBg.style.opacity = "1";
    html.style.overflow = "hidden";
  }, 154);
}

function closeModal() {
  modal.style.opacity = "0";
  modalBg.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
    modalBg.style.display = "none";
    html.style.overflow = "auto";
  }, 200);
}

modalBg.addEventListener("click", closeModal);
