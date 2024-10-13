// @input Component.AudioComponent audio
// @input Component.AudioComponent gameplayAudio
// @input Component.AudioComponent beforeGameplayAudio

global.behaviorSystem.addCustomTriggerResponse("startTimer", callback)

function callback() {
    print("play");
    script.audio.play(1);
    script.gameplayAudio.play(-1);
    script.beforeGameplayAudio.stop(true);
}