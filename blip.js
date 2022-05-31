class Blip {
  constructor(speed, radius, canvas) {
    this.r = radius;
    this.speed = speed;
    this.ang = 0;
    this.pos = {
      x: Math.cos(this.ang) * this.r + canvas.width / 2,
      y: Math.sin(this.ang) * this.r + canvas.height / 2,
    };
  }

  update(display, canvas) {
    this.ang += this.speed;
    this.ang %= Math.PI * 2;
    this.pos = {
      x: Math.cos(this.ang) * this.r + canvas.width / 2,
      y: Math.sin(this.ang) * this.r + canvas.height / 2,
    };
    display.fillStyle = "#1dd147";
    display.beginPath();
    display.arc(this.pos.x, this.pos.y, 20, 0, Math.PI * 2);
    display.fill();
  }
}
