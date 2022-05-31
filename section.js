class Section {
  constructor(radius) {
    this.r = radius;
    this.start = Math.floor(Math.random() * 360);
    this.end = this.start + Math.floor(Math.random() * 40) + 30;
    this.vals = {
      start: (this.start * Math.PI) / 180,
      end: (this.end * Math.PI) / 180,
    };
  }

  update(display, canvas) {
    this.vals = {
      start: (this.start * Math.PI) / 180,
      end: (this.end * Math.PI) / 180,
    };
    display.strokeStyle = "#d335f2";
    display.fillStyle = "#d335f2";
    display.lineWidth = 40;
    display.beginPath();
    display.arc(
      canvas.width / 2,
      canvas.height / 2,
      this.r,
      this.vals.start,
      this.vals.end
    );
    display.stroke();
    display.beginPath();
    display.arc(
      Math.cos(this.vals.start) * this.r + canvas.width / 2,
      Math.sin(this.vals.start) * this.r + canvas.height / 2,
      20,
      0,
      Math.PI * 2
    );
    display.fill();
    display.beginPath();
    display.arc(
      Math.cos(this.vals.end) * this.r + canvas.width / 2,
      Math.sin(this.vals.end) * this.r + canvas.height / 2,
      20,
      0,
      Math.PI * 2
    );
    display.fill();
  }

  checkColision(ang) {
    if (ang >= this.vals.start - 0.2 && ang <= this.vals.end + 0.25) {
      return true;
    }
    return false;
  }

  reset() {
    this.start = Math.floor(Math.random() * 360);
    this.end = this.start + Math.floor(Math.random() * 40) + 30;
    this.vals = {
      start: (this.start * Math.PI) / 180,
      end: (this.end * Math.PI) / 180,
    };
  }
}
