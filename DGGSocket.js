const WebSocket = require('ws');

class DGGSocket {

    constructor() {
        var ws = new WebSocket("wss://www.destiny.gg/ws");

        var hi = function hello() {
	        console.log("Hello");
        }

        ws.on('message', function incoming(data) {
	        var type = ""
	
	        var type = data.substr(0, data.indexOf(' '));
	        var message = data.substr(data.indexOf(' ') + 1);
	
	        console.log(type);
	        console.log(message);
	
	        if (type == "NAMES") {
		        console.log("HELLLLLLLLLLOOOOOOOOOO");
		    ws.send('MSG {"data":"Hello"}');
	        }

        });
    }
}

module.exports = {
    DGGSocket,
}