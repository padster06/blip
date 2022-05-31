let canvas, display;
let section;
let blip;
let clicked = false;
let score = 0;

function init() {
  canvas = document.getElementById("canvas");
  display = canvas.getContext("2d");
  begin();
}

function begin() {
  display.fillStyle = "#676767";
  display.fillRect(0, 0, canvas.clientWidth, canvas.height);
  section = new Section(150);
  blip = new Blip(0.025, 150, canvas);
  document.body.addEventListener("click", (e) => {
    if (section.checkColision(blip.ang)) {
      section.reset();
      blip.speed += 0.002;
      score++;
    } else {
      section.reset();
      blip.speed = 0.025;
      score = 0;
    }
  });
  setInterval(loop, 1000 / 120);
}

function loop() {
  display.fillStyle = "#676767";
  display.fillRect(0, 0, canvas.clientWidth, canvas.height);

  display.beginPath();
  display.strokeStyle = "#454545";
  display.lineWidth = 40;
  display.arc(canvas.width / 2, canvas.height / 2, 150, 0, Math.PI * 2);
  display.stroke();

  section.update(display, canvas);

  blip.update(display, canvas);

  document.getElementById("score").innerHTML = score;

  clicked = false;
}

async function regSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
