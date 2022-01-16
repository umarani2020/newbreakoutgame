var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var b0 = createSprite(20,390, 25,230);



var b1 = createSprite(60,390, 25,270);
var b2 = createSprite(100,390, 25,380);
var b3 = createSprite(140,390, 25,180);
var b4 = createSprite(180,390, 25,180);
var b5 = createSprite(220,390, 25,180);
var b6 = createSprite(270,390, 25,230);
var b7 = createSprite(310,390, 25,380);
var b8 = createSprite(350,390, 25,130);
var b9 = createSprite(385,390, 25,390);

b0.shapeColor="blue";
b1.shapeColor="violet";
b2.shapeColor="indigo";
b3.shapeColor="blue";
b4.shapeColor="green";
b5.shapeColor="yellow";
b6.shapeColor="orange";
b7.shapeColor="red";
b8.shapeColor="deeppink";
b9.shapeColor="purple";



function draw() {
  background(0);

  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
