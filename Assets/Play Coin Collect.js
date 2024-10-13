// @input Component.AudioComponent audio

global.behaviorSystem.addCustomTriggerResponse("collectCoin", callback)

function callback() {
    print("play");
    script.audio.play(1);
}