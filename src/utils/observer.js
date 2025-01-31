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

