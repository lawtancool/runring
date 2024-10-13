//Physics.getRootWorldSettings().gravity = new vec3(0.0, 1.0, 0.0);

var obj = script.getSceneObject();

//var body = obj.getComponent('Physics.ColliderComponent');

var body = obj.createComponent('Physics.BodyComponent');

// The default shape for a collider/body is a sphere. Change it to a box (using the default size).
body.shape = Shape.createSphereShape();
body.shape.radius = 150.0;

print(body.shape)

//// The default shape for a collider/body is a sphere. Change it to a box (using the default size).
//body.shape = Shape.createBoxShape();

// Print collision events.
// The event 'collider' is some other body/collider component that hit this one.
body.onCollisionEnter.add(function (e) {
  var collision = e.collision;
  print('CollisionEnter(' + collision.id + '): ---> ' + collision.collider);

    script.getSceneObject().getParent().destroy();
    global.behaviorSystem.sendCustomTrigger("startTimer");
});
