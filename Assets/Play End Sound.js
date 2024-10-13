// @input Component.AudioComponent audio
// @input Component.AudioComponent gameplayAudio
// @input Component.AudioComponent beforeGameplayAudio

global.behaviorSystem.addCustomTriggerResponse("stopTimer", callback)

function callback() {
    print("play");
    script.audio.play(1);
    script.gameplayAudio.stop(true);
    script.beforeGameplayAudio.play(-1);
}