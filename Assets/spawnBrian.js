// -----JS CODE-----
//@input Asset.ObjectPrefab objectPrefab

//@input float spawnFrequency{"widget":"slider","min":0.1, "max":1, "step":0.02}
//@input float spawnRandomizer{"widget":"slider","min":0, "max":0.5, "step":0.02}
//@input float spawnRange {"widget":"slider","min":0, "max":1, "step":0.1}
//@input float fallingSpeedMin
//@input float fallingSpeedMax

var spawnFrequency =  script.spawnFrequency; //reverse spawnFrequency so higher number would produce more frequent result, not necessary for our game but easier to understand.
var spawnRange = script.spawnRange;
var spawnTimer = 0;
var materialIdx = 2;
var rotationSpeed = 4;
var bounceHeight = 4; // Maximum height of the bounce
var bounceSpeed = 2;     // Speed of the bounce

script.createEvent("OnStartEvent").bind(function() {
    for (let i = 0; i < 5; i++) {
        spawnObject(i);
    }
})


function spawnObject(idx){
    //creating a copy of the prefab   
    var newObjPosition = new vec3(0, 0, -50 * idx);
    var newObjScale = new vec3(0.06, 0.06, 0.06);
    var newObject = script.objectPrefab.instantiate(script.getSceneObject().getParent());
    print(newObject.getChild(2).getComponent("Component.BaseMeshVisual"));
    print(newObject.getChild(2).getComponent("Component.RenderMeshVisual"));
    print(newObject.getChild(2).getComponent("Component.MaterialMeshVisual"));
    newObject.getChild(2).getComponent("Component.BaseMeshVisual").mainMaterial.mainPass.baseColor = new vec4(1,1,0,1);
    var tf = newObject.getTransform();
    tf.setWorldPosition(newObjPosition);
    tf.setWorldScale(newObjScale);
//    attachCollider(newObject);
    startRotationAnimation(newObject);
}

// Function to start rotation animation for an object
function startRotationAnimation(object) {
    var transform = object.getTransform();
    
    // Create an update event for rotation
    var updateEvent = script.createEvent("UpdateEvent");
    
    // Store the current rotation
    var currentRotation = new vec3(0, 0, 0);
    
    var initialPosition = transform.getWorldPosition();
    
    updateEvent.bind(function(eventData) {
        var newY = initialPosition.y + Math.sin(getTime() * bounceSpeed) * bounceHeight;

        // Update the object's position
        transform.setWorldPosition(new vec3(initialPosition.x, newY, initialPosition.z));        
        
        // Calculate the amount to rotate this frame
        var deltaRotation = rotationSpeed * eventData.getDeltaTime(); // in degrees
      
        // Update the current rotation
        currentRotation.y += deltaRotation; // Rotate around Y-axis
        
        // Set the new rotation
        transform.setWorldRotation(quat.fromEulerAngles(currentRotation.x, currentRotation.y, currentRotation.z));
        

    });
}

function attachCollider(obj) {
    var body = obj.createComponent('Physics.BodyComponent');

    // The default shape for a collider/body is a sphere. Change it to a box (using the default size).
    body.shape = Shape.createSphereShape();
    body.shape.radius = 0.5;
    
    
    print(body.shape)
    
    //// The default shape for a collider/body is a sphere. Change it to a box (using the default size).
    //body.shape = Shape.createBoxShape();
    
    // Print collision events.
    // The event 'collider' is some other body/collider component that hit this one.
    body.onCollisionEnter.add(function (e) {
      var collision = e.collision;
      print('CollisionEnter(' + collision.id + '): ---> ' + collision.collider);
    
        obj.destroy();
        global.behaviorSystem.sendCustomTrigger("collectCoin");
        
    });
}

function getFallingSpeed(){
    return Math.random() * (script.fallingSpeedMax - script.fallingSpeedMin) + script.fallingSpeedMin;
}

script.api.getFallingSpeed = getFallingSpeed;