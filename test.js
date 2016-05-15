var ws = require('nodejs-websocket');
setInterval(function(){
	var connect = 	ws.connect('ws://123.59.79.151:3009',{},function(){
		console.log(arguments);
		})
	connect.on('error',function(){
		console.log('error',arguments);
	});
},10);
