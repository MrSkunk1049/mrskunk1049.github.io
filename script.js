let isGameRunning = false;
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
    if(!isGameRunning){
        startGame();
        startButton.innerText = "Restart Game";
    }else{
        restartGame();
    }
});

function startGame(){
    isGameRunning = true;
    const canvas = document.getElementById("canvas1");

    //Set up 8 keys
    const redKey1 = document.getElementById("redKey1");
    let topPosition1 = 60;
    let bottomPosition1 = 35;
    redKey1.style.top = topPosition1 + "%";
    redKey1.style.left = bottomPosition1 + "%";
    redKey1.style.visibility = "visible";

    const redKey2 = document.getElementById("redKey2");
    let topPosition2 = 60;
    let bottomPosition2 = 55;
    redKey2.style.top = topPosition2 + "%";
    redKey2.style.left = bottomPosition2 + "%";
    redKey2.style.visibility = "visible";

    const redKey3 = document.getElementById("redKey3");
    let topPosition3 = 80;
    let bottomPosition3 = 35;
    redKey3.style.top = topPosition3 + "%";
    redKey3.style.left = bottomPosition3 + "%";
    redKey3.style.visibility = "visible";

    const redKey4 = document.getElementById("redKey4");
    let topPosition4 = 80;
    let bottomPosition4 = 55;
    redKey4.style.top = topPosition4 + "%";
    redKey4.style.left = bottomPosition4 + "%";
    redKey4.style.visibility = "visible";

    //Green key
    window.setTimeout(function(){
        const numToKey = new Map();
        numToKey.set(1, redKey1);
        numToKey.set(2, redKey2);
        numToKey.set(3, redKey3);
        numToKey.set(4, redKey4);
        
        let greenNum = Math.floor(4 * Math.random()) + 1;
        const redGreenKey = numToKey.get(greenNum);
        const greenKey = document.getElementById("greenKey");
        greenKey.style.top = redGreenKey.style.top;
        greenKey.style.left = redGreenKey.style.left;
        greenKey.style.visibility = "visible";

        window.setTimeout(function(){
            greenKey.style.visibility = "hidden";
        }, 1000)
    }, 200);
    

    //Start the movement
    window.setTimeout(function(){
        var audio = document.getElementById("myaudio");
        audio.volume = 0;
        audio.play();
        diagSwitch(redKey1, redKey2, redKey3, redKey4);
    }, 1700);
    





    







    // const ctx = canvas.getContext("2d");
    // console.log(ctx);

    // const CANVAS_WIDTH = canvas.width = 600;
    // const CANVAS_HEIGHT = canvas.height = 600;

    // const redKey1 = new Image();
    // redKey1.src = "images/red_key1.png";

    // const redKey2 = new Image();
    // redKey2.src = "images/red_key2.png";

    // const redKey3 = new Image();
    // redKey3.src = "images/red_key3.png";

    // const redKey4 = new Image();
    // redKey4.src = "images/red_key4.png";

    // const redKey5 = new Image();
    // redKey5.src = "images/red_key5.png";

    // const redKey6 = new Image();
    // redKey6.src = "images/red_key6.png";

    // const redKey7 = new Image();
    // redKey7.src = "images/red_key7.png";

    // const redKey8 = new Image();
    // redKey8.src = "images/red_key8.png";

    // let frame = 0;
    // function animate(){
    //     // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //     // ctx.drawImage(redKey1, 75, 15);
    //     // ctx.drawImage(redKey2, 375, 15);
    //     // ctx.drawImage(redKey3, 75, 165);
    //     // ctx.drawImage(redKey4, 375, 165);
    //     // ctx.drawImage(redKey5, 75, 315);
    //     // ctx.drawImage(redKey6, 375, 315);
    //     // ctx.drawImage(redKey7, 75, 465);
    //     // ctx.drawImage(redKey8, 375, 465);
    //     requestAnimationFrame(animate);

    //     frame++;
    //     console.log(frame);
    // };
    // animate();
}

function restartGame(){
    isGameRunning = false;
    startGame();
}

/*
****************************************************************
MOVEMENT FUNCTIONS
****************************************************************
*/

function diagSwitch(redKey1, redKey2, redKey3, redKey4) {
    let i = 0;
    let interval = setInterval(() => { //runs every 1ms
        if (i >= 50) {
            clearInterval(interval);
            return;
        }

        let topPercent1 = parseFloat(redKey1.style.top);
        let leftPercent1 = parseFloat(redKey1.style.left);
        redKey1.style.top = (topPercent1 + 0.4) + "%";
        redKey1.style.left = (leftPercent1 + 0.4) + "%";

        let topPercent2 = parseFloat(redKey2.style.top);
        let leftPercent2 = parseFloat(redKey2.style.left);
        redKey2.style.top = (topPercent2 + 0.4) + "%";
        redKey2.style.left = (leftPercent2 - 0.4) + "%";

        let topPercent3 = parseFloat(redKey3.style.top);
        let leftPercent3 = parseFloat(redKey3.style.left);
        redKey3.style.top = (topPercent3 - 0.4) + "%";
        redKey3.style.left = (leftPercent3 + 0.4) + "%";

        let topPercent4 = parseFloat(redKey4.style.top);
        let leftPercent4 = parseFloat(redKey4.style.left);
        redKey4.style.top = (topPercent4 - 0.4) + "%";
        redKey4.style.left = (leftPercent4 - 0.4) + "%";

        i++;
    }, 3); // Runs every 1ms, so full movement takes ~200ms
}

function topClockwise(redKey1, redKey2, redKey3, redKey4){

}

function topCounterclockwise(redKey1, redKey2, redKey3, redKey4){

}

function bottomClockwise(){

}

function bottomCounterclockwise(){

}


