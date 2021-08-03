function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}



const captados = document.getElementById("captados");
animateValue(captados, 0, 30, 1000);


const anuncios = document.getElementById("anuncios");
animateValue(anuncios, 0, 300, 1000);

const faturado = document.getElementById("faturado");
animateValue(faturado, 0, 2, 1000);
