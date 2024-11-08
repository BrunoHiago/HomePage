document.querySelector(".menu-toggle").addEventListener("click", function () {
  if (document.querySelector(".menu").classList.contains("active")) {
    document.querySelector(".menu").classList.remove("active");
  } else {
    document.querySelector(".menu").classList.add("active");
  }
});

//============================================Carousel============================================//
const carousel = document.querySelector("#carousel");
const leftArrow = document.querySelector("#carousel-left");
const rightArrow = document.querySelector("#carousel-right");
const divIndicators = document.querySelector(".carousel-indicators");
const imagens = [
  "public/images/carousel/1.png",
  "public/images/carousel/2.png",
  "public/images/carousel/3.png",
];
let idx = 0;

function changeImage() {
  divIndicators.children[idx].classList.remove("active");
  carousel.classList.add("fade-out");

  setTimeout(() => {
    idx++;

    if (idx >= imagens.length) {
      idx = 0;
    }

    // Muda a imagem e ativa o novo indicador
    carousel.style.backgroundImage = `url(${imagens[idx]})`;
    divIndicators.children[idx].classList.add("active");

    // Remove a classe 'fade-out' após a mudança de imagem para fazer o fade-in
    carousel.classList.remove("fade-out");
  }, 1000); // Ajuste o tempo conforme a duração do efeito de fade
}

setInterval(changeImage, 8000);

leftArrow.addEventListener("click", function () {
  divIndicators.children[idx].classList.remove("active");
  idx--;

  if (idx < 0) {
    idx = imagens.length - 1;
  }

  carousel.style.backgroundImage = `url(${imagens[idx]})`;

  divIndicators.children[idx].classList.add("active");
});

rightArrow.addEventListener("click", function () {
  divIndicators.children[idx].classList.remove("active");
  idx++;

  if (idx >= imagens.length) {
    idx = 0;
  }

  carousel.style.backgroundImage = `url(${imagens[idx]})`;

  divIndicators.children[idx].classList.add("active");
});
