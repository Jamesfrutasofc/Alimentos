const pages = document.querySelectorAll(".page");
const flipSound = document.getElementById("flip-sound");
let currentPage = 0;

pages.forEach((page, i) => {
  page.style.zIndex = pages.length - i;
});

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    flipSound.currentTime = 0;
    flipSound.play();

    if (index === currentPage) {
      page.classList.add("flipped");
      currentPage++;
    } else if (index === currentPage - 1) {
      page.classList.remove("flipped");
      currentPage--;
    }

    updateZIndexes();
  });
});

function updateZIndexes() {
  pages.forEach((page, i) => {
    if (page.classList.contains("flipped")) {
      // páginas viradas vão atrás da pilha
      page.style.zIndex = i;
    } else {
      // páginas à frente
      page.style.zIndex = pages.length - i;
    }
  });
}
