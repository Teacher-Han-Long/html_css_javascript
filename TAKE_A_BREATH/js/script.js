const container = document.querySelector(".container");
const text = document.querySelector("#text");

// time used for each breathe
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// constantly running method
function breatheAnimation() {
  text.innerHTML = "Breathe in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold it";

    setTimeout(() => {
      text.innerText = "Exhale";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breatheAnimation, totalTime);
