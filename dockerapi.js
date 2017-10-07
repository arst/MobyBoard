let Docker = require("dockerode");
let isWindows = process.platform === "win32";

let options = {};

if (isWindows) {
    options = {
        socketPath: '//./pipe/docker_engine'
    }
} else {
    options = {
        socketPath: '/var/run/docker.sock'
    }
}

module.exports = new Docker(options);