
var SerialPort = require('serialport');
var bindPhysical = require('../index').bindPhysical;
var mqtt = require('mqtt');
 
// setup the mqtt client with port, host, and optional credentials 
var client2 = mqtt.connect('mqtt://127.0.0.1:1883', {username: 'UART 2'});
var client3 = mqtt.connect('mqtt://127.0.0.1:1883', {username: 'UART 3'});
var client4 = mqtt.connect('mqtt://127.0.0.1:1883', {username: 'UART 4'});

// setup a connection to a physical serial port 
var serialPort2 = new SerialPort('/dev/ttyS2',{
    baudRate: 9600,
    bufferSize: 1
});
 
//connects the physical device to an mqtt server 
bindPhysical({
  serialPort: serialPort2,
  base64: true,
  client: client2,
  transmitTopic: '/sensor/uart2rx',
  receiveTopic: '/sensor/uart2tx'
});

var serialPort3 = new SerialPort('/dev/ttyS3',{
    baudRate: 9600,
    bufferSize: 1
});
 
bindPhysical({
  serialPort: serialPort3,
  base64: true,
  client: client2,
  transmitTopic: '/sensor/uart3rx',
  receiveTopic: '/sensor/uart3tx'
});

var serialPort4 = new SerialPort('/dev/ttyS4',{
    baudRate: 9600,
    bufferSize: 1
});
 
bindPhysical({
  serialPort: serialPort4,
  base64: true,
  client: client2,
  transmitTopic: '/sensor/uart4rx',
  receiveTopic: '/sensor/uart4tx'
});
