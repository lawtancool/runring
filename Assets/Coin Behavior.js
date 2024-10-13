//global.behaviorSystem.addCustomTriggerResponse("collectCoin", callback)

script.api.callback = function () {
    print("callback")
    script.getSceneObject().destroy();
    global.behaviorSystem.sendCustomTrigger("collectCoin");
}

//function callback() {
//    print("callback")
//    script.getSceneObject().destroy();
//}

//const SIK = require('SpectaclesInteractionKit/SIK').SIK;
//const interactionManager = SIK.InteractionManager;
//const interactionConfiguration = SIK.InteractionConfiguration;
//
//function onAwake() {
//  // Wait for other components to initialize by deferring to OnStartEvent.
//  script.createEvent('OnStartEvent').bind(() => {
//    onStart();
//  });
//}
//
//function onStart() {
//  // This script assumes that an Interactable (and Collider) component have already been instantiated on the SceneObject.
//  var interactableTypename =
//    interactionConfiguration.requireType('Interactable');
//  var interactable = script.sceneObject.getComponent(interactableTypename);
//
//  // You could also retrieve the Interactable component like this:
//  interactable = interactionManager.getInteractableBySceneObject(
//    script.sceneObject
//  );
//
//  // Define the desired callback logic for the relevant Interactable event.
//  var onTriggerStartCallback = (event) => {
//    print(
//      `The Interactable has been triggered by an Interactor with input type: ${event.interactor.inputType} at position: ${event.interactor.targetHitInfo.hit.position}`
//    );
//  };
//
//  interactable.onInteractorTriggerStart(onTriggerStartCallback);
//}
//
//onAwake();