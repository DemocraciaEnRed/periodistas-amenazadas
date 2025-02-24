import * as echarts from "echarts";


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

export const initChartOnScreen = (element, init) => {
  const chartDom = document.getElementById(element);

  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          init()
        } else {
          echarts.dispose(chartDom);
        }
      });
    },
    {
      root: null, // Usa el viewport como referencia
      threshold: 0.1, // El porcentaje visible requerido (10%)
    }
  ).observe(chartDom);

}


export const resizeChart = (chartId, chartContainerId, chartOption) => {
  const chartDom = document.getElementById(chartContainerId);
  const chart = echarts.init(chartDom);

  const section = document.getElementById(
    chartId
  );
  if (!chartDom) return;
  chartDom.style.width = section?.offsetWidth + "px";
  chartDom.style.height = section?.offsetHeight
    ? section.offsetHeight + "px"
    : "100vh";

  if (chartOption.title) {
    chartOption.title.textStyle = {
      fontWeight: "normal",
      color: "#000",
      fontSize: Math.max(section?.offsetWidth / 40)
    }
  }
  chart.resize();
  chart.setOption(chartOption);

  window.addEventListener("resize", () => {
    if (chartOption.title) {
      chartOption.title.textStyle.fontSize = Math.max(section?.offsetWidth / 40);

    }
    chart.setOption(chartOption);
    chart.resize({
      width: section?.offsetWidth,
      height: section?.offsetHeight
    });
  });
};

