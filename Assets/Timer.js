// @input Component.Text text
// @input Component.AudioComponent audio

global.behaviorSystem.addCustomTriggerResponse("startTimer", startTimer)
global.behaviorSystem.addCustomTriggerResponse("stopTimer", stopTimer)

var start;
function startTimer() {
    start = Date.now();
}

function stopTimer() {
    start = undefined;
    print("stop")
}

script.createEvent("UpdateEvent").bind(function () {
    if (start !== undefined) {
        var now = Date.now();
        d = now - start;
    
        script.text.text = millisToMinutesAndSeconds(d);
    }
})

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
