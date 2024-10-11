window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');

let x = 0;
let y = 0;
const squareSize = 50;
const speed = 2

function drawSquare(){
context.clearRect(0,0, canvas.width,canvas.height);

context.fillStyle = '#F0000';
context.fillRect(x,y,squareSize,squareSize)


}
function updatePosition(){
    x += speed;

    if (x + squareSize > canvas.width) {
        x = 0;
    }
}
    function gameLoop(){
            updatePosition();
            drawSquare();
            requestAnimationFrame(gameLoop);

    }
gameLoop();


}