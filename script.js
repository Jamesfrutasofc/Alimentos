const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Inicializa z-index
pages.forEach((page, i) => {
  page.style.zIndex = pages.length - i;
});

// Evento de clique em cada página
pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    

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

// Corrige o empilhamento (z-index)
function updateZIndexes() {
  pages.forEach((page, i) => {
    const flipped = page.classList.contains("flipped");
    if (flipped) {
      page.style.zIndex = i; // vai para trás
    } else {
      page.style.zIndex = pages.length - i; // fica na frente
    }
  });
}