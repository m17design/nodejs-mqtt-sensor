var BME280 = require('node-bme280');
var mqtt = require('mqtt');

var barometer = new BME280({address: 0x76});

var client = mqtt.connect('mqtt://127.0.0.1:1883');


barometer.begin(function(err) {
    if (err) {
        console.info('error initializing barometer', err);
        return;
    }

    console.info('barometer running');

    setInterval(function() {
        barometer.readPressureAndTemparature(function(err, pressure, temperature, humidity) {
            console.info(
                'temp:',
                temperature.toFixed(2),
                '℃  pressure:',
                (pressure / 100).toFixed(1),
                '㍱  hum:',
                humidity.toFixed(1),
                '%'
            );
client.publish('/sensor/sensor_bme280_1_temperature', temperature.toFixed(2));
client.publish('/sensor/sensor_bme280_1_pressure', (pressure / 100).toFixed(1));
client.publish('/sensor/sensor_bme280_1_humidity',  humidity.toFixed(1));
        });

     
    }, 15000);
});
