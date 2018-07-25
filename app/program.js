var os = require('os');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/getOSinfo':
				var type = os.type();
				if(type === 'Darwin') {
				    type = 'OSX';
				} else if(type === 'Windows_NT') {
				    type = 'Windows';
				}
				var release = os.release();
				var cpu = os.cpus()[0].model;
				var uptime = os.uptime();
				var userInfo = os.userInfo();
				console.log('System:', type);
				console.log('Release:', release);
				console.log('CPU model:', cpu);
				console.log('Uptime:', (uptime / 60).toFixed(0), 'min');
				console.log('User name:', userInfo.username);
				console.log('Home dir', userInfo.homedir);
				break;
			case 'version':
				console.log(process.versions);
				break;
			case 'environment':
				console.log(process.env);
				break;
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			default:
				process.stdout.write('Wrong instruction!\n');
		}
	}
});

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('Uptime:', (uptime / 60).toFixed(0), 'min');
	console.log('User name:', userInfo.username);
	console.log('Home dir', userInfo.homedir);
}
