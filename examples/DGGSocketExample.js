const DGGSocket = require("../DGGSocket.js");

var dgg = new DGGSocket.DGGSocket();

dgg.onMessage = function(message) {
    console.log(message.nick + message.nick);
}