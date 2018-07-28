var os = require('os');

function formatTime(duration) {
	var sec = parseInt(duration % 60);
	var min = parseInt((duration / 60) % 60);
	var hours = parseInt((duration / 3600) % 24);
	return hours + 'hours ' + min + 'min ' + sec + 'sec';
}

exports.time = formatTime;