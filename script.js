const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const redKey1 = new Image();
redKey1.src = "images/red_key1.png";

const redKey2 = new Image();
redKey2.src = "images/red_key2.png";

const redKey3 = new Image();
redKey3.src = "images/red_key3.png";

const redKey4 = new Image();
redKey4.src = "images/red_key4.png";

const redKey5 = new Image();
redKey5.src = "images/red_key5.png";

const redKey6 = new Image();
redKey6.src = "images/red_key6.png";

const redKey7 = new Image();
redKey7.src = "images/red_key7.png";

const redKey8 = new Image();
redKey8.src = "images/red_key8.png";

let frame = 0;
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(redKey1, 75, 15);
    ctx.drawImage(redKey2, 375, 15);
    ctx.drawImage(redKey3, 75, 165);
    ctx.drawImage(redKey4, 375, 165);
    ctx.drawImage(redKey5, 75, 315);
    ctx.drawImage(redKey6, 375, 315);
    ctx.drawImage(redKey7, 75, 465);
    ctx.drawImage(redKey8, 375, 465);
    requestAnimationFrame(animate);

    frame++;
    console.log(frame);
};
animate();