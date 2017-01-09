//setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const skyColor = '#50BFE6';
let gameGoing = true;
let score = 0;
let transitioning = false;

const player = new Player()
const obstical = new Obstical()

//movment
document.addEventListener('keydown', function(event) {
  player.move(event.keyCode);
});

//interval
let ticker = 0;
let phase = 0;

function drawScore() {
  ctx.font="50px Arial"
  ctx.fillText(score,290,45)
}

function tick() {
  if(ticker < 100) {
    ticker += 1;
  } else {
    ticker = 0;
    player.resize();
    phase += 1
    if(phase == 3) {
      gameGoing = player.survived(obstical.holes)
      if(gameGoing == true) {
        score += 1
      }
    }
    if(phase == 4) {
      obstical.reset();
      obstical.genHoles();
      phase = 0;
      console.log(obstical.holeAmount)
    }
  }
}

//main draw
function draw() {
  if(gameGoing == true) {
    tick()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    obstical.draw(ctx);
    obstical.drawHoles(ctx);
    player.draw(ctx);
    drawScore()
  }
}


const loop = setInterval(draw, 10);
