var BH1750 = require('../bh1750');
var light = new BH1750();

var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://127.0.0.1:1883');

setInterval(function() {
    light.readLight(function(value){
    console.log("light value is: ", value, "lx");
    client.publish('/sensor/sensor_bh1750_1_illumination', value.toString());
});

        
 }, 60000); 