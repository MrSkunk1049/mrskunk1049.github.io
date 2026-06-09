const speedhackSlider = document.getElementById("speedhack");
const speedhackOutput = document.getElementById("speedhackoutput");
speedhackSlider.addEventListener("input", function() {
    speedhackOutput.value = speedhackSlider.value;
});

const speedhackComments1 = document.getElementById("speedhackcomments1");
const speedhackComments2 = document.getElementById("speedhackcomments2");
speedhackSlider.addEventListener("input", function() {
    if (speedhackSlider.value > 1) {
        speedhackComments1.style.visibility = "visible";
    }else if(speedhackSlider.value <= 0.5){
        speedhackComments2.style.visibility = "visible";
    }else{
        speedhackComments1.style.visibility = "hidden";
        speedhackComments2.style.visibility = "hidden";
    }
});