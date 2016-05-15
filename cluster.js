
var cluster = require('cluster');

cluster.setupMaster({
	exec: "worker.js"
});

var cpus = require('os').cpus();

console.log("888888888")
for (var i = 0; i < cpus.length; i++) {
	cluster.fork();
}
