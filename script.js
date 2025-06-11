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

isGameRunning = true;
const canvas = document.getElementById("canvas1");
canvas.style.width = (screen.width * 0.75) + "px";
canvas.style.height = (screen.height * 0.70) + "px";

/*
Global variables
*/
let redGreenKey;
let guessingTime = false;


function startGame(){
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

    const redKey5 = document.getElementById("redKey5");
    let topPosition5 = 100;
    let bottomPosition5 = 35;
    redKey5.style.top = topPosition5 + "%";
    redKey5.style.left = bottomPosition5 + "%";
    redKey5.style.visibility = "visible";

    const redKey6 = document.getElementById("redKey6");
    let topPosition6 = 100;
    let bottomPosition6 = 55;
    redKey6.style.top = topPosition6 + "%";
    redKey6.style.left = bottomPosition6 + "%";
    redKey6.style.visibility = "visible";

    const redKey7 = document.getElementById("redKey7");
    let topPosition7 = 120;
    let bottomPosition7 = 35;
    redKey7.style.top = topPosition7 + "%";
    redKey7.style.left = bottomPosition7 + "%";
    redKey7.style.visibility = "visible";

    const redKey8 = document.getElementById("redKey8");
    let topPosition8 = 120;
    let bottomPosition8 = 55;
    redKey8.style.top = topPosition8 + "%";
    redKey8.style.left = bottomPosition8 + "%";
    redKey8.style.visibility = "visible";

    //Green key
    window.setTimeout(function(){
        const numToKey = new Map();
        numToKey.set(1, redKey1);
        numToKey.set(2, redKey2);
        numToKey.set(3, redKey3);
        numToKey.set(4, redKey4);
        numToKey.set(5, redKey5);
        numToKey.set(6, redKey6);
        numToKey.set(7, redKey7);
        numToKey.set(8, redKey8);
        
        let greenNum = Math.floor(8 * Math.random()) + 1;
        redGreenKey = numToKey.get(greenNum);
        const greenKey = document.getElementById("greenKey");
        greenKey.style.top = redGreenKey.style.top;
        greenKey.style.left = redGreenKey.style.left;
        greenKey.style.visibility = "visible";

        window.setTimeout(function(){
            greenKey.style.visibility = "hidden";
        }, 1000)
    }, 200);
    

    /*
    Array represents what key is currently in the i'th position

    Positions numbering:
    1 2
    3 4
    5 6
    7 8
    */
    const curPos = [redKey1, redKey2, redKey3, redKey4, redKey5, redKey6, redKey7, redKey8];

    //Start the movement
    window.setTimeout(function(){
        var audio = document.getElementById("myaudio");
        audio.volume = 0.05;
        audio.play();
        audio.currentTime = 0;

        let delay = 0;

        for(let i = 0; i < 26; i++){
            window.setTimeout(function(){
                let movementNum = Math.floor(11 * Math.random()) + 1;
                switch(movementNum){
                    case 1:
                        diagSwitch(curPos);
                        break;
                    case 2:
                        clockwiseClockwise(curPos);
                        break;
                    case 3:
                        clockwiseCClockwise(curPos);
                        break;
                    case 4:
                        cclockwiseClockwise(curPos);
                        break;
                    case 5:
                        cclockwiseCClockwise(curPos);
                        break;
                    case 6:
                        bigClockwise(curPos);
                        break;
                    case 7:
                        bigCClockwise(curPos);
                        break;
                    case 8:
                        swap(curPos);
                        break;
                    case 9:
                        shuffle1(curPos);
                        break;
                    case 10:
                        shuffle2(curPos);
                        break;
                    case 11:
                        topBottomSwap(curPos);
                        break;
                    default:
                }
            }, delay);
            delay += 300;
        }
    }, 1700);

    // //Find which key is the green key
    // window.setTimeout(function(){
    //     let greenTop = greenKey.style.top;
    //     let greenLeft = greenKey.style.left;
    //     let greenIndex;
    //     for(let i = 0; i < curPos.length; i++){
    //         if(curPos[i].style.top == greenTop && curPos[i].style.left == greenLeft){
    //             greenIndex = i;
    //         }
    //     }
    //     console.log(greenIndex);
    // }, 3499);

    //Arrange keys into circle
    window.setTimeout(function(){
        const redKey3Cur = curPos[2];
        const redKey4Cur = curPos[3];
        const redKey5Cur = curPos[4];
        const redKey6Cur = curPos[5];

        let i = 0;
        let interval = setInterval(function(){
            if(i >= 100){
                clearInterval(interval);
                return;
            }

            let leftPercent3 = parseFloat(redKey3Cur.style.left)
            let leftPercent4 = parseFloat(redKey4Cur.style.left)
            let leftPercent5 = parseFloat(redKey5Cur.style.left)
            let leftPercent6 = parseFloat(redKey6Cur.style.left)

            redKey3Cur.style.left = (leftPercent3 - 0.2) + "%";
            redKey4Cur.style.left = (leftPercent4 + 0.2) + "%";
            redKey5Cur.style.left = (leftPercent5 - 0.2) + "%";
            redKey6Cur.style.left = (leftPercent6 + 0.2) + "%";

            i++;
        }, 5);
    }, 9800) 

    /*
    Slowly rotate the keys

    Center is around top=90 left=45

    Label keys in clockwise order
     1  2
    8    3
    7    4
     6  5
    */
    window.setTimeout(function(){
        guessingTime = true;

        const redKey1Rotate = curPos[0];
        const redKey2Rotate = curPos[1];
        const redKey3Rotate = curPos[3];
        const redKey4Rotate = curPos[5];
        const redKey5Rotate = curPos[7];
        const redKey6Rotate = curPos[6];
        const redKey7Rotate = curPos[4];
        const redKey8Rotate = curPos[2];

        i = 0;
        interval = setInterval(function(){
            if(i >= 500){
                clearInterval(interval);
                return;
            }

            let leftPercent1 = parseFloat(redKey1Rotate.style.left);
            let topPercent1 = parseFloat(redKey1Rotate.style.top);
            let vector1 = [leftPercent1 - 45, 90 - topPercent1];
            let velocity1 = [vector1[1], -vector1[0]];
            normalize(velocity1);
            redKey1Rotate.style.left = (leftPercent1 + 0.2 * velocity1[0]) + "%";
            redKey1Rotate.style.top = (topPercent1 - 0.2 * velocity1[1]) + "%";

            let leftPercent2 = parseFloat(redKey2Rotate.style.left);
            let topPercent2 = parseFloat(redKey2Rotate.style.top);
            let vector2 = [leftPercent2 - 45, 90 - topPercent2];
            let velocity2 = [vector2[1], -vector2[0]];
            normalize(velocity2);
            redKey2Rotate.style.left = (leftPercent2 + 0.2 * velocity2[0]) + "%";
            redKey2Rotate.style.top = (topPercent2 - 0.2 * velocity2[1]) + "%";

            let leftPercent3 = parseFloat(redKey3Rotate.style.left);
            let topPercent3 = parseFloat(redKey3Rotate.style.top);
            let vector3 = [leftPercent3 - 45, 90 - topPercent3];
            let velocity3 = [vector3[1], -vector3[0]];
            normalize(velocity3);
            redKey3Rotate.style.left = (leftPercent3 + 0.2 * velocity3[0]) + "%";
            redKey3Rotate.style.top = (topPercent3 - 0.2 * velocity3[1]) + "%";

            let leftPercent4 = parseFloat(redKey4Rotate.style.left);
            let topPercent4 = parseFloat(redKey4Rotate.style.top);
            let vector4 = [leftPercent4 - 45, 90 - topPercent4];
            let velocity4 = [vector4[1], -vector4[0]];
            normalize(velocity4);
            redKey4Rotate.style.left = (leftPercent4 + 0.2 * velocity4[0]) + "%";
            redKey4Rotate.style.top = (topPercent4 - 0.2 * velocity4[1]) + "%";

            let leftPercent5 = parseFloat(redKey5Rotate.style.left);
            let topPercent5 = parseFloat(redKey5Rotate.style.top);
            let vector5 = [leftPercent5 - 45, 90 - topPercent5];
            let velocity5 = [vector5[1], -vector5[0]];
            normalize(velocity5);
            redKey5Rotate.style.left = (leftPercent5 + 0.2 * velocity5[0]) + "%";
            redKey5Rotate.style.top = (topPercent5 - 0.2 * velocity5[1]) + "%";

            let leftPercent6 = parseFloat(redKey6Rotate.style.left);
            let topPercent6 = parseFloat(redKey6Rotate.style.top);
            let vector6 = [leftPercent6 - 45, 90 - topPercent6];
            let velocity6 = [vector6[1], -vector6[0]];
            normalize(velocity6);
            redKey6Rotate.style.left = (leftPercent6 + 0.2 * velocity6[0]) + "%";
            redKey6Rotate.style.top = (topPercent6 - 0.2 * velocity6[1]) + "%";

            let leftPercent7 = parseFloat(redKey7Rotate.style.left);
            let topPercent7 = parseFloat(redKey7Rotate.style.top);
            let vector7 = [leftPercent7 - 45, 90 - topPercent7];
            let velocity7 = [vector7[1], -vector7[0]];
            normalize(velocity7);
            redKey7Rotate.style.left = (leftPercent7 + 0.2 * velocity7[0]) + "%";
            redKey7Rotate.style.top = (topPercent7 - 0.2 * velocity7[1]) + "%";

            let leftPercent8 = parseFloat(redKey8Rotate.style.left);
            let topPercent8 = parseFloat(redKey8Rotate.style.top);
            let vector8 = [leftPercent8 - 45, 90 - topPercent8];
            let velocity8 = [vector8[1], -vector8[0]];
            normalize(velocity8);
            redKey8Rotate.style.left = (leftPercent8 + 0.2 * velocity8[0]) + "%";
            redKey8Rotate.style.top = (topPercent8 - 0.2 * velocity8[1]) + "%";

            i++;
        }, 20);
    }, 10550);   
}

function restartGame(){
    isGameRunning = false;
    startGame();
}

/*
****************************************************************************************************************
MOVEMENT FUNCTIONS
****************************************************************************************************************

Note that distance between adjacent keys is 20 units.
*/

function diagSwitch(curPos) {
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(() => {
        if (i >= 50) {
            clearInterval(interval);
            return;
        }

        //First 4
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

        let topPercent5 = parseFloat(redKey5.style.top);
        let leftPercent5 = parseFloat(redKey5.style.left);
        redKey5.style.top = (topPercent5 + 0.4) + "%";
        redKey5.style.left = (leftPercent5 + 0.4) + "%";

        let topPercent6 = parseFloat(redKey6.style.top);
        let leftPercent6 = parseFloat(redKey6.style.left);
        redKey6.style.top = (topPercent6 + 0.4) + "%";
        redKey6.style.left = (leftPercent6 - 0.4) + "%";

        let topPercent7 = parseFloat(redKey7.style.top);
        let leftPercent7 = parseFloat(redKey7.style.left);
        redKey7.style.top = (topPercent7 - 0.4) + "%";
        redKey7.style.left = (leftPercent7 + 0.4) + "%";

        let topPercent8 = parseFloat(redKey8.style.top);
        let leftPercent8 = parseFloat(redKey8.style.left);
        redKey8.style.top = (topPercent8 - 0.4) + "%";
        redKey8.style.left = (leftPercent8 - 0.4) + "%";

        i++;
    }, 5); //Runs every 5ms, so full movement takes ~250ms

    //Update curPos
    curPos[0] = redKey4;
    curPos[1] = redKey3;
    curPos[2] = redKey2;
    curPos[3] = redKey1;

    curPos[4] = redKey8;
    curPos[5] = redKey7;
    curPos[6] = redKey6;
    curPos[7] = redKey5;
}

function clockwiseClockwise(curPos){
    topClockwise(curPos);
    bottomClockwise(curPos);
}

function clockwiseCClockwise(curPos){
    topClockwise(curPos);
    bottomCounterclockwise(curPos);
}

function cclockwiseClockwise(curPos){
    topCounterclockwise(curPos);
    bottomClockwise(curPos);
}

function cclockwiseCClockwise(curPos){
    topCounterclockwise(curPos);
    bottomCounterclockwise(curPos);
}

function bigClockwise(curPos){
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if(i >= 50){
            clearInterval(interval);
            return;
        }

        let leftPercent1 = parseFloat(redKey1.style.left);
        redKey1.style.left = (leftPercent1 + 0.4) + "%";

        let topPercent2 = parseFloat(redKey2.style.top);
        redKey2.style.top = (topPercent2 + 0.4) + "%";

        let topPercent3 = parseFloat(redKey3.style.top);
        redKey3.style.top = (topPercent3 - 0.4) + "%";

        let topPercent4 = parseFloat(redKey4.style.top);
        redKey4.style.top = (topPercent4 + 0.4) + "%";

        let topPercent5 = parseFloat(redKey5.style.top);
        redKey5.style.top = (topPercent5 - 0.4) + "%";

        let topPercent6 = parseFloat(redKey6.style.top);
        redKey6.style.top = (topPercent6 + 0.4) + "%";

        let topPercent7 = parseFloat(redKey7.style.top);
        redKey7.style.top = (topPercent7 - 0.4) + "%";

        let leftPercent8 = parseFloat(redKey8.style.left);
        redKey8.style.left = (leftPercent8 - 0.4) + "%";
        i++;
    }, 5);

    //Update curPos
    curPos[0] = redKey3;
    curPos[1] = redKey1;
    curPos[2] = redKey5;
    curPos[3] = redKey2;
    curPos[4] = redKey7;
    curPos[5] = redKey4;
    curPos[6] = redKey8;
    curPos[7] = redKey6;
}

function bigCClockwise(curPos){
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if(i >= 50){
            clearInterval(interval);
            return;
        }

        let topPercent1 = parseFloat(redKey1.style.top);
        redKey1.style.top = (topPercent1 + 0.4) + "%";

        let leftPercent2 = parseFloat(redKey2.style.left);
        redKey2.style.left = (leftPercent2 - 0.4) + "%";

        let topPercent3 = parseFloat(redKey3.style.top);
        redKey3.style.top = (topPercent3 + 0.4) + "%";

        let topPercent4 = parseFloat(redKey4.style.top);
        redKey4.style.top = (topPercent4 - 0.4) + "%";

        let topPercent5 = parseFloat(redKey5.style.top);
        redKey5.style.top = (topPercent5 + 0.4) + "%";

        let topPercent6 = parseFloat(redKey6.style.top);
        redKey6.style.top = (topPercent6 - 0.4) + "%";

        let leftPercent7 = parseFloat(redKey7.style.left);
        redKey7.style.left = (leftPercent7 + 0.4) + "%";

        let topPercent8 = parseFloat(redKey8.style.top);
        redKey8.style.top = (topPercent8 - 0.4) + "%";
        i++;
    }, 5);

    //Update curPos
    curPos[0] = redKey2;
    curPos[1] = redKey4;
    curPos[2] = redKey1;
    curPos[3] = redKey6;
    curPos[4] = redKey3;
    curPos[5] = redKey8;
    curPos[6] = redKey5;
    curPos[7] = redKey7;
}

function swap(curPos){
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if(i >= 50){
            clearInterval(interval);
            return;
        }

        let leftPercent1 = parseFloat(redKey1.style.left);
        redKey1.style.left = (leftPercent1 + 0.4) + "%";

        let leftPercent2 = parseFloat(redKey2.style.left);
        redKey2.style.left = (leftPercent2 - 0.4) + "%";

        let leftPercent3 = parseFloat(redKey3.style.left);
        redKey3.style.left = (leftPercent3 + 0.4) + "%";

        let leftPercent4 = parseFloat(redKey4.style.left);
        redKey4.style.left = (leftPercent4 - 0.4) + "%";

        let leftPercent5 = parseFloat(redKey5.style.left);
        redKey5.style.left = (leftPercent5 + 0.4) + "%";

        let leftPercent6 = parseFloat(redKey6.style.left);
        redKey6.style.left = (leftPercent6 - 0.4) + "%";

        let leftPercent7 = parseFloat(redKey7.style.left);
        redKey7.style.left = (leftPercent7 + 0.4) + "%";

        let leftPercent8 = parseFloat(redKey8.style.left);
        redKey8.style.left = (leftPercent8 - 0.4) + "%";
        
        i++;
    }, 5);

    //Update curPos
    curPos[0] = redKey2;
    curPos[1] = redKey1;
    curPos[2] = redKey4;
    curPos[3] = redKey3;
    curPos[4] = redKey6;
    curPos[5] = redKey5;
    curPos[6] = redKey8;
    curPos[7] = redKey7;
}

function shuffle1(curPos){
    //Retrieve keys from curPos
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if(i >= 50){
            clearInterval(interval);
            return;
        }

        let leftPercent2 = parseFloat(redKey2.style.left);
        let topPercent2 = parseFloat(redKey2.style.top);
        redKey2.style.left = (leftPercent2 - 0.4) + "%";
        redKey2.style.top = (topPercent2 + 0.4) + "%";

        let leftPercent3 = parseFloat(redKey3.style.left);
        let topPercent3 = parseFloat(redKey3.style.top);
        redKey3.style.left = (leftPercent3 + 0.4) + "%";
        redKey3.style.top = (topPercent3 - 0.4) + "%";

        let leftPercent4 = parseFloat(redKey4.style.left);
        let topPercent4 = parseFloat(redKey4.style.top);
        redKey4.style.left = (leftPercent4 - 0.4) + "%";
        redKey4.style.top = (topPercent4 + 0.4) + "%";

        let leftPercent5 = parseFloat(redKey5.style.left);
        let topPercent5 = parseFloat(redKey5.style.top);
        redKey5.style.left = (leftPercent5 + 0.4) + "%";
        redKey5.style.top = (topPercent5 - 0.4) + "%";

        let topPercent6 = parseFloat(redKey6.style.top);
        redKey6.style.top = (topPercent6 + 0.4) + "%";

        let leftPercent7 = parseFloat(redKey7.style.left);
        let topPercent7 = parseFloat(redKey7.style.top);
        redKey7.style.left = (leftPercent7 + 0.4) + "%";
        redKey7.style.top = (topPercent7 - 0.4) + "%";

        let leftPercent8 = parseFloat(redKey8.style.left);
        redKey8.style.left = (leftPercent8 - 0.4) + "%";
        
        i++;
    }, 5);

    //Update curPos
    curPos[1] = redKey3;
    curPos[2] = redKey2;
    curPos[3] = redKey5;
    curPos[4] = redKey4;
    curPos[5] = redKey7;
    curPos[6] = redKey8;
    curPos[7] = redKey6;
}

function shuffle2(curPos){
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if(i >= 50){
            clearInterval(interval);
            return;
        }

        let leftPercent1 = parseFloat(redKey1.style.left);
        redKey1.style.left = (leftPercent1 + 0.4) + "%";

        let topPercent2 = parseFloat(redKey2.style.top);
        redKey2.style.top = (topPercent2 + 0.4) + "%";

        let leftPercent3 = parseFloat(redKey3.style.left);
        let topPercent3 = parseFloat(redKey3.style.top);
        redKey3.style.left = (leftPercent3 + 0.4) + "%";
        redKey3.style.top = (topPercent3 + 0.4) + "%";

        let leftPercent4 = parseFloat(redKey4.style.left);
        let topPercent4 = parseFloat(redKey4.style.top);
        redKey4.style.left = (leftPercent4 - 0.4) + "%";
        redKey4.style.top = (topPercent4 - 0.4) + "%";

        let leftPercent5 = parseFloat(redKey5.style.left);
        let topPercent5 = parseFloat(redKey5.style.top);
        redKey5.style.left = (leftPercent5 + 0.4) + "%";
        redKey5.style.top = (topPercent5 + 0.4) + "%";

        let leftPercent6 = parseFloat(redKey6.style.left);
        let topPercent6 = parseFloat(redKey6.style.top);
        redKey6.style.left = (leftPercent6 - 0.4) + "%";
        redKey6.style.top = (topPercent6 - 0.4) + "%";

        let leftPercent8 = parseFloat(redKey8.style.left);
        let topPercent8 = parseFloat(redKey8.style.top);
        redKey8.style.left = (leftPercent8 - 0.4) + "%";
        redKey8.style.top = (topPercent8 - 0.4) + "%";
        
        i++;
    }, 5);

    //Update curPos
    curPos[0] = redKey4;
    curPos[1] = redKey1;
    curPos[2] = redKey6;
    curPos[3] = redKey2;
    curPos[4] = redKey8;
    curPos[5] = redKey3;
    curPos[7] = redKey5;
}

/*
this one was very annoying :(

Circular arc movement of key 1 and 2 is very wide, so center the rotation point
of key 1 at 90 top and -37 left and key 2 at 90 top and 127 left (this will
make the radius of the circle exactly 78).

Keys 1 and 2 will travel a distance of around 61.59 units, so if this movement
is done in 50 iterations, the normalized velocity vector will need to be
multiplied by around 1.232 each iteration.
*/
function topBottomSwap(curPos){
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if(i >= 50){
            clearInterval(interval);
            return;
        }

        let topPercent3 = parseFloat(redKey3.style.top);
        redKey3.style.top = (topPercent3 - 0.4) + "%";

        let topPercent4 = parseFloat(redKey4.style.top);
        redKey4.style.top = (topPercent4 - 0.4) + "%";

        let topPercent5 = parseFloat(redKey5.style.top);
        redKey5.style.top = (topPercent5 - 0.4) + "%";

        let topPercent6 = parseFloat(redKey6.style.top);
        redKey6.style.top = (topPercent6 - 0.4) + "%";
    
        let topPercent7 = parseFloat(redKey7.style.top);
        redKey7.style.top = (topPercent7 - 0.4) + "%";

        let topPercent8 = parseFloat(redKey8.style.top);
        redKey8.style.top = (topPercent8 - 0.4) + "%";

        let leftPercent1 = parseFloat(redKey1.style.left);
        let topPercent1 = parseFloat(redKey1.style.top);
        let vector1 = [leftPercent1 + 37, topPercent1 - 90];
        let velocity1 = [-vector1[1], vector1[0]];
        normalize(velocity1);
        velocity1[0] *= 1.232;
        velocity1[1] *= 1.232;
        redKey1.style.left = (leftPercent1 + velocity1[0]) + "%";
        redKey1.style.top = (topPercent1 + velocity1[1]) + "%";

        let leftPercent2 = parseFloat(redKey2.style.left);
        let topPercent2 = parseFloat(redKey2.style.top);
        let vector2 = [leftPercent2 - 127, topPercent2 - 90];
        let velocity2 = [vector2[1], -vector2[0]];
        normalize(velocity2);
        velocity2[0] *= 1.232;
        velocity2[1] *= 1.232;
        redKey2.style.left = (leftPercent2 + velocity2[0]) + "%";
        redKey2.style.top = (topPercent2 + velocity2[1]) + "%";
        
        i++;
    }, 5);

    //Update curPos
    curPos[0] = redKey3;
    curPos[1] = redKey4;
    curPos[2] = redKey5;
    curPos[3] = redKey6;
    curPos[4] = redKey7;
    curPos[5] = redKey8;
    curPos[6] = redKey1;
    curPos[7] = redKey2;
}

/*
************************************************************************************************
HELPER MOVEMENT FUNCTIONS
************************************************************************************************
*/

function topClockwise(curPos){
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if (i >= 50) {
            clearInterval(interval);
            return;
        }

        let topPercent1 = parseFloat(redKey1.style.top);
        let leftPercent1 = parseFloat(redKey1.style.left);
        redKey1.style.left = (leftPercent1 + 0.4) + "%";

        let topPercent2 = parseFloat(redKey2.style.top);
        let leftPercent2 = parseFloat(redKey2.style.left);
        redKey2.style.top = (topPercent2 + 0.4) + "%";

        let topPercent3 = parseFloat(redKey3.style.top);
        let leftPercent3 = parseFloat(redKey3.style.left);
        redKey3.style.top = (topPercent3 - 0.4) + "%";

        let topPercent4 = parseFloat(redKey4.style.top);
        let leftPercent4 = parseFloat(redKey4.style.left);
        redKey4.style.left = (leftPercent4 - 0.4) + "%";

        i++;
    }, 5);

    //Update curPos
    
    curPos[0] = redKey3;
    curPos[1] = redKey1;
    curPos[2] = redKey4;
    curPos[3] = redKey2;
}

function topCounterclockwise(curPos){
    //Retrieve keys from curPos
    const redKey1 = curPos[0];
    const redKey2 = curPos[1];
    const redKey3 = curPos[2];
    const redKey4 = curPos[3];

    //Update positions
    let i = 0;
    let interval = setInterval(function(){
        if (i >= 50) {
            clearInterval(interval);
            return;
        }

        let topPercent1 = parseFloat(redKey1.style.top);
        let leftPercent1 = parseFloat(redKey1.style.left);
        redKey1.style.top = (topPercent1 + 0.4) + "%";

        let topPercent2 = parseFloat(redKey2.style.top);
        let leftPercent2 = parseFloat(redKey2.style.left);
        redKey2.style.left = (leftPercent2 - 0.4) + "%";

        let topPercent3 = parseFloat(redKey3.style.top);
        let leftPercent3 = parseFloat(redKey3.style.left);
        redKey3.style.left = (leftPercent3 + 0.4) + "%";

        let topPercent4 = parseFloat(redKey4.style.top);
        let leftPercent4 = parseFloat(redKey4.style.left);
        redKey4.style.top = (topPercent4 - 0.4) + "%";

        i++;
    }, 5);

    //Update curPos
    curPos[0] = redKey2;
    curPos[1] = redKey4;
    curPos[2] = redKey1;
    curPos[3] = redKey3;
}

function bottomClockwise(curPos){
    //Retrieve keys from curPos
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update key positions
    let i = 0;
    let interval = setInterval(function(){
        if (i >= 50) {
            clearInterval(interval);
            return;
        }

        let topPercent5 = parseFloat(redKey5.style.top);
        let leftPercent5 = parseFloat(redKey5.style.left);
        redKey5.style.left = (leftPercent5 + 0.4) + "%";

        let topPercent6 = parseFloat(redKey6.style.top);
        let leftPercent6 = parseFloat(redKey6.style.left);
        redKey6.style.top = (topPercent6 + 0.4) + "%";

        let topPercent7 = parseFloat(redKey7.style.top);
        let leftPercent7 = parseFloat(redKey7.style.left);
        redKey7.style.top = (topPercent7 - 0.4) + "%";

        let topPercent8 = parseFloat(redKey8.style.top);
        let leftPercent8 = parseFloat(redKey8.style.left);
        redKey8.style.left = (leftPercent8 - 0.4) + "%";

        i++;
    }, 5);

    //Update curPos

    curPos[4] = redKey7;
    curPos[5] = redKey5;
    curPos[6] = redKey8;
    curPos[7] = redKey6;
}

function bottomCounterclockwise(curPos){
    //Retrieve keys from curPos
    const redKey5 = curPos[4];
    const redKey6 = curPos[5];
    const redKey7 = curPos[6];
    const redKey8 = curPos[7];

    //Update positions
    let i = 0;
    let interval = setInterval(function(){
        if (i >= 50) {
            clearInterval(interval);
            return;
        }

        let topPercent5 = parseFloat(redKey5.style.top);
        let leftPercent5 = parseFloat(redKey5.style.left);
        redKey5.style.top = (topPercent5 + 0.4) + "%";

        let topPercent6 = parseFloat(redKey6.style.top);
        let leftPercent6 = parseFloat(redKey6.style.left);
        redKey6.style.left = (leftPercent6 - 0.4) + "%";

        let topPercent7 = parseFloat(redKey7.style.top);
        let leftPercent7 = parseFloat(redKey7.style.left);
        redKey7.style.left = (leftPercent7 + 0.4) + "%";

        let topPercent8 = parseFloat(redKey8.style.top);
        let leftPercent8 = parseFloat(redKey8.style.left);
        redKey8.style.top = (topPercent8 - 0.4) + "%";

        i++;
    }, 5);

    //Update curPos
    curPos[4] = redKey6;
    curPos[5] = redKey8;
    curPos[6] = redKey5;
    curPos[7] = redKey7;
}

function normalize(arr){
    let magnitude = Math.sqrt(arr[0] * arr[0] + arr[1] * arr[1]);
    arr[0] /= magnitude;
    arr[1] /= magnitude;
}

/*
**********************************************************************************************************
GREEN KEY CHECKING FUNCTIONS
**********************************************************************************************************
*/

//Functions to check if the key that was clicked is correct
document.getElementById("redKey1").addEventListener("click", function() {
    if(guessingTime){
        if(redKey1.style.left == redGreenKey.style.left && redKey1.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

document.getElementById("redKey2").addEventListener("click", function() {
    if(guessingTime){
        if(redKey2.style.left == redGreenKey.style.left && redKey2.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

document.getElementById("redKey3").addEventListener("click", function() {
    if(guessingTime){
        if(redKey3.style.left == redGreenKey.style.left && redKey3.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

document.getElementById("redKey4").addEventListener("click", function() {
    if(guessingTime){
        if(redKey4.style.left == redGreenKey.style.left && redKey4.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

document.getElementById("redKey5").addEventListener("click", function() {
    if(guessingTime){
        if(redKey5.style.left == redGreenKey.style.left && redKey5.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

document.getElementById("redKey6").addEventListener("click", function() {
    if(guessingTime){
        if(redKey6.style.left == redGreenKey.style.left && redKey6.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

document.getElementById("redKey7").addEventListener("click", function() {
    if(guessingTime){
        if(redKey7.style.left == redGreenKey.style.left && redKey7.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

document.getElementById("redKey8").addEventListener("click", function() {
    if(guessingTime){
        if(redKey8.style.left == redGreenKey.style.left && redKey8.style.top == redGreenKey.style.top){
            correctMessage();
        }else{
            incorrectMessage();
        }
    }
});

function correctMessage(){
    const correctText = document.getElementById("correct");
    correctText.style.visibility = "visible";
}

function incorrectMessage(){
    const incorrectText = document.getElementById("incorrect");
    incorrectText.style.visibility = "visible";
}