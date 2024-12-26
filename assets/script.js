const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélections
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let currentSlide = 0; // Index de la diapositive actuelle

// Générer les points de navigation
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) {
    dot.classList.add("dot_selected"); // Activer le premier point
  }
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);

  // Clic sur un point
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide(currentSlide);
  });
});

// Mettre à jour le carrousel
function updateSlide(index) {
  const { image, tagLine } = slides[index];
  bannerImg.src = `./assets/images/slideshow/${image}`;
  bannerImg.alt = tagLine;
  bannerText.innerHTML = tagLine;

  // Mettre à jour les points
  document.querySelectorAll(".dot").forEach((dot, idx) => {
    dot.classList.toggle("dot_selected", idx === index);
  });
}

// Navigation avec les flèches
leftArrow.addEventListener("click", () => {
  currentSlide = currentSlide - 1;
  if (currentSlide < 0) {
    currentSlide = 3;
  }

  updateSlide(currentSlide);
});

rightArrow.addEventListener("click", () => {
  currentSlide = currentSlide + 1;
  if (currentSlide > 3) {
    currentSlide = 0;
  }

  updateSlide(currentSlide);
});

// Initialisation
updateSlide(currentSlide);
