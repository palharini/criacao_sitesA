  //Carrossel portifólio sobre nós
  "use strict";
  
  const carousel = document.querySelector("#mainCarousel");
  const thumbWrapper = document.getElementById("thumbnailCarousel");
  const slides = carousel.querySelectorAll(".carousel-item");

  slides.forEach((slide, idx) => {
    const img = slide.querySelector("img");
    const thumb = document.createElement("img");
    thumb.src = img.src;
    thumb.alt = `Miniatura ${idx + 1}`;
    thumb.classList.add("thumb");
    if (idx === 0) thumb.classList.add("active");
    thumb.setAttribute("data-bs-target", "#mainCarousel");
    thumb.setAttribute("data-bs-slide-to", idx);
    thumbWrapper.appendChild(thumb);
  });

  carousel.addEventListener("slid.bs.carousel", e => {
    const thumbs = thumbWrapper.querySelectorAll("img.thumb");
    thumbs.forEach(t => t.classList.remove("active"));
    thumbs[e.to].classList.add("active");
  });

  // Fade-in suave ao carregar imagens
  document.querySelectorAll(".carousel-item img").forEach(img => {
    img.addEventListener("load", () => img.classList.add("fade-in"));
  });
