const WebSocket = require('ws');


class DGGSocket {

    constructor() {
        var ws = new WebSocket("wss://www.destiny.gg/ws");

        var hi = function hello() {
	        console.log("Hello");
        }


        this.messageDispatcher = this.messageDispatcher.bind(this);

        ws.on('message', this.messageDispatcher);
    }
        
    onPing(ping) {
        console.log("Hello");

    }

    onPong(pong) {
        console.log("Hello");

    }

    onMessage(message) {
        console.log(message.nick + ": " + message.data);
    }

    onPrivMessage(privMessage) {
        console.log("Hello");

    }

    onMute(mute) {
        console.log("Hello");

    }

    onBan(ban) {
        console.log("Hello");

    }

    onUnban(unban) {
        console.log("Hello");

    }

    onMode(mode) {
        console.log("Hello");

    }

    onNames(names) {
        console.log("Names");
    }

    onJoin(join) {
        console.log("Someone has joined.");

    }

    onQuit(quit) {
        console.log("Someone has quit.");
    }

    onError(error) {
        console.log("Error");

    }

    onOpen(open) {
        console.log("Opened.");

    }

    onRefresh(refresh) {
        console.log("Refresh.");

    }

    onClose(close) {
        console.log("Closed.");

    }

    messageDispatcher(data) {
        // Finds the index of the end of first word in the data which is the message type.
        var endWord = data.indexOf(' ');    
        var messageType = data.substr(0, endWord);
        var message = data.substr(endWord + 1);
        const messageObj = JSON.parse(message);

        switch(messageType) {
            case "PING":
                this.onPing(messageObj);
                break;

            case "PONG":
                this.onPong(messageObj);
                break;
            
            case "MSG":
                this.onMessage(messageObj);
                break;

            case "PRIVMESSAGE":
                this.onPrivMessage(messageObj);
                break;

            case "MUTE":
                this.onMute(messageObj);
                break;

            case "UNMUTE":
                this.onUnmute(messageObj);
                break;

            case "MODE":
                this.onMode(messageObj);
                break;
    
            case "NAMES":
                this.onNames(messageObj);
                break;
            
            case "JOIN":
                this.onJoin(messageObj);
                break;
    
            case "QUIT":
                this.onQuit(messageObj);
                break;

            case "ERROR":
                this.onError(messageObj);
                break;
    
            case "REFRESH":
                this.onRefresh(messageObj);
                break;

            case "ERROR":
                this.onError(messageObj);
                break;
            
            case "REFRESH":
                this.onRefresh(messageObj);
                break;
        }
    }
}

module.exports = {
    DGGSocket,
}