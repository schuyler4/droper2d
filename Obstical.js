class Obstical {
  constructor() {
    this.colors = ['#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FF9933',
                  '#FFCC33', '#FFFF66', '#FFFF66', '#CCFF00', '#66FF66',
                  '#AAF0D1', '#FF6EFF'];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)]

    this.rect1 = new Object();
    this.rect1.x = 0;
    this.rect1.y = 100;
    this.rect1.with = canvasWidth;
    this.rect1.height = canvasHeight - 200;

    this.rect2 = new Object();
    this.rect2.x = 150;
    this.rect2.y = 0;
    this.rect2.height = canvasHeight;
    this.rect2.width = 300;

    this.holeAmount = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    this.holeSize = 10;
    this.holes = []
    this.genHoles()
  }

  genHoles() {
    this.holes = []
    if(this.holeAmount === 0) {
      this.holeAmount = 1
    }
    for (let i = 0; i < this.holeAmount; i++) {
      let x = Math.floor(Math.random() * (45 - 15 + 1)) + 15;
      let y = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
      x = x * 10 - 10;
      y = y * 10 - 10;
      this.holes.push({x, y})
    }
  }

  drawHoles(ctx) {
    for(let i = 0; i < this.holes.length; i++) {
      //console.log(this.holes[i].x + ', ' + this.holes[i].y)
      ctx.beginPath()
      ctx.rect(this.holes[i].x, this.holes[i].y, this.holeSize, this.holeSize)
      ctx.fillStyle = skyColor;
      ctx.fill()
      ctx.closePath()
    }
  }

  reset() {
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.holeAmount = Math.floor(Math.random() * 10);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.rect1.x, this.rect1.y, this.rect1.with, this.rect1.height);
    ctx.rect(this.rect2.x, this.rect2.y, this.rect2.width, this.rect2.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
