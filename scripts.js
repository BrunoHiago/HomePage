//==================================================Menu============================================//

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

function changeImage(direction) {
  divIndicators.children[idx].classList.remove("active");

  idx += direction;

  if (idx >= imagens.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = imagens.length - 1;
  }

  carousel.style.backgroundImage = `url(${imagens[idx]})`;

  divIndicators.children[idx].classList.add("active");
}

setInterval(() => changeImage(1), 5000);
leftArrow.addEventListener("click", () => changeImage(-1));
rightArrow.addEventListener("click", () => changeImage(1));

//============================================BestSellers 1============================================//

const categories = document.querySelector("#list-cat");
const arrowLeft = document.querySelector("#arrow-left-best1");
const arrowRight = document.querySelector("#arrow-right-best1");
const list1 = document.querySelector(".list1");
let index = 0;

Array.from(categories.children).forEach((category) => {
  category.addEventListener("click", () => {
    Array.from(categories.children).forEach((c) =>
      c.firstChild.classList.remove("active")
    );
    category.firstChild.classList.add("active");
    animationLoad1();
  });
});

arrowLeft.addEventListener("click", () => {
  if (index <= 0) {
    return;
  }
  categories.children[index].firstChild.classList.remove("active");
  index--;

  if (index <= 0) {
    arrowLeft.classList.add("disabled");
    index = 0;
  }
  arrowRight.classList.remove("disabled");
  categories.children[index].firstChild.classList.add("active");
  animationLoad1();
});

arrowRight.addEventListener("click", () => {
  if (index >= categories.children.length - 1) {
    return;
  }
  categories.children[index].firstChild.classList.remove("active");
  index++;

  if (index >= categories.children.length - 1) {
    arrowRight.classList.add("disabled");
    index = categories.children.length - 1;
  }
  arrowLeft.classList.remove("disabled");
  categories.children[index].firstChild.classList.add("active");
  animationLoad1();
});

const animationLoad1 = () => {
  const saveChildren = Array.from(list1.children);
  list1.innerHTML = "";

  setTimeout(() => {
    saveChildren.forEach((product) => {
      list1.appendChild(product);
    });
  }, 100);
};

//============================================BestSellers 2============================================//

const categories2 = document.querySelector("#list-cat2");
const arrowLeft2 = document.querySelector("#arrow-left-best2");
const arrowRight2 = document.querySelector("#arrow-right-best2");
const list2 = document.querySelector(".list2");
let index2 = 0;

Array.from(categories2.children).forEach((category) => {
  category.addEventListener("click", () => {
    Array.from(categories2.children).forEach((c) =>
      c.firstChild.classList.remove("active")
    );
    category.firstChild.classList.add("active");
    animationLoad();
  });
});

arrowLeft2.addEventListener("click", () => {
  if (index2 <= 0) {
    return;
  }
  categories2.children[index2].firstChild.classList.remove("active");
  index2--;

  if (index2 <= 0) {
    arrowLeft2.classList.add("disabled");
    index2 = 0;
  }
  arrowRight2.classList.remove("disabled");
  categories2.children[index2].firstChild.classList.add("active");
  animationLoad();
});

arrowRight2.addEventListener("click", () => {
  if (index2 >= categories2.children.length - 1) {
    return;
  }
  categories2.children[index2].firstChild.classList.remove("active");
  index2++;

  if (index2 >= categories2.children.length - 1) {
    arrowRight2.classList.add("disabled");
    index2 = categories2.children.length - 1;
  }
  arrowLeft2.classList.remove("disabled");
  categories2.children[index2].firstChild.classList.add("active");
  animationLoad();
});

const animationLoad = () => {
  const saveChildren = Array.from(list2.children);
  list2.innerHTML = "";

  setTimeout(() => {
    saveChildren.forEach((product) => {
      list2.appendChild(product);
    });
  }, 100);
};

//============================================Most Popular============================================//

const img = document.querySelector("#img-popular");
const seletorColor = document.querySelector(".selection-color");
const colors = ["#1337c5", "#e74040", "#23856d", "yellowgreen"];

Array.from(seletorColor.children).forEach((color, index) => {
  color.addEventListener("click", () => {
    Array.from(seletorColor.children).forEach((c) => {
      c.classList.remove("active");
      c.innerHTML = "";
      c.disabled = false;
      c.style.opacity = "1";
    });
    color.classList.add("active");
    color.innerHTML = "✔"; // Adiciona o check
    color.disabled = true;
    color.style.color = "black";
    color.style.transition = "0.5s";
    color.style.opacity = "0.8";
    img.style.backgroundColor = colors[index];
    img.style.padding = "20px 10px";
    img.style.border = "2px solid black";
    img.style.borderRadius = "10px";
    img.style.boxShadow = "2px 2px 2px black";
    img.style.transition = "0.5s";
    img.style.opacity = "0.8";
  });
});

//============================================Footer============================================//

const btnContact = document.querySelector("#btn-contact");

btnContact.addEventListener("click", () => {
  const email = "email@gmail.com";
  const subject = "Contato";
  const body = "Olá, gostaria de mais informações sobre seus serviços.";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});
