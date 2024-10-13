// @input Component.Text text
// @input Component.AudioComponent audio

global.behaviorSystem.addCustomTriggerResponse("startTimer", showText)
global.behaviorSystem.addCustomTriggerResponse("collectCoin", addScore)


 
var score = 0;

function showText() {
    script.text.text = "Score: " + score;
}

function addScore() {
    print("add score")
    score++;
    script.text.text = "Score: " + score;
    if (score == 8) {
        global.behaviorSystem.sendCustomTrigger("stopTimer");
    }
}