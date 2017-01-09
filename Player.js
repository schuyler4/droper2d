const canvasWidth = 600;
const canvasHeight = 400;

class Player {
  constructor() {
    this.size = 40;
    this.x = canvasWidth / 2 - this.size / 2;
    this.y = canvasHeight / 2 - this.size / 2;
    this.color = 'black';
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  survived(holes) {
    let survived = false;

    for(let i = 0; i < holes.length; i++) {
      if(this.x == holes[i].x && this.y == holes[i].y) {
        survived = true
      }
    }

    return survived
  }

  move(keycode) {
    if(this.size !== 10) {
      switch(keycode) {
        case 65:
          this.x -= 10;
          break;
        case 68:
          this.x += 10;
          break;
        case 87:
          this.y -= 10;
          break;
        case 83:
          this.y += 10;
          break;
      }
    }
  }

  resize() {
    if(this.size > 10) {
      this.size -= 10;
    } else {
      this.size = 40
    }
  }
};
