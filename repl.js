var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client

  .after(5000, function() {
    this.clockwise(0.5);
  })


  .after(10000, function() {
    this.stop();
    this.land();
  });
