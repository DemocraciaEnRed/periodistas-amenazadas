export const showGlobo=(deck)=> {
  const globo = document.querySelector(".globo");
  deck.getCurrentSlide().className.includes("showGlobo")
    ? globo?.classList.remove("opacity-0")
    : globo?.classList.add("opacity-0");
}

export const highlightLink=(deck)=> {
  const horizontalSlideIndex = deck.getIndices().h;
  const verticalSlideIndex = deck.getIndices().v;

  window.location.hash =
    "/" + horizontalSlideIndex + "/" + verticalSlideIndex;

  const allLinks = document.querySelectorAll(".links-subnavbar");
  const active = allLinks[deck.getIndices().h];

  allLinks.forEach((el) => {
    el?.parentElement?.classList.remove("bg-primary-500");
    el?.parentElement?.classList.remove("text-white");
  });

  if (active) {
    active?.parentElement?.classList.add("bg-primary-500");
    active?.parentElement?.classList.add("text-white");
  }
}

export const observer = (element, init, destroy) => {
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          init()
        } else {
          destroy()
        }
      });
    },
    {
      root: null, // Usa el viewport como referencia
      threshold: 0.1, // El porcentaje visible requerido (10%)
    }
  ).observe(element);

}

