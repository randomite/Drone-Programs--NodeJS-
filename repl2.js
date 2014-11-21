var arDrone = require('ar-drone');
var client  = arDrone.createClient();

require('/Users/ravinsardal/node_modules/leapjs/template/entry');

//client.takeoff();

//client.after(5000, function() {
  //  client.stop();
  //  client.land();
  //});


var controller1 = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "circle":
              client.takeoff();
              console.log("Circle Gesture");
              break;
          case "screenTap":
              console.log("Screen Tap Gesture");
              //setTimeout(client.up(0.5), 2000);
              client.up(0.25);
              break;
          case "swipe":
              client.stop();
              client.land();
              console.log("Swipe Gesture");
              break;
        }
    });
  }
});





