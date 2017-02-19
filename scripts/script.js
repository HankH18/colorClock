var clockNode = document.querySelector('#clock')

var backgroundNode = document.querySelector('#background')

var barNode = document.querySelector('#bar')

var bodyNode = document.querySelector('body')

clockNode.innerHTML = '00:00:00'

var dynamicClock = function() {
	var d = new Date()
	var hour = d.getHours()
	var minute = d.getMinutes()
	var second = d.getSeconds()
	var hex = {
		hour: (Math.floor((hour/24)*255)).toString(16),
		minute: (Math.floor((minute/60)*255)).toString(16),
		second: (Math.floor((second/60)*255)).toString(16),
	}
	barNode.style.width = (((second / 60) * 80) + 1) + '%'
	if (hour < 10) {
		hour = '0' + hour;
	}
	if (hour < 4) {
		hex.hour = '0' + hex.hour;
	}
	if (minute < 10) {
		minute = '0' + minute;
	}
	if (minute < 4) {
		hex.minute = '0' + hex.minute;
	}
	if (second < 10) {
		second = '0' + second;
	}
	if (second < 4) {
		hex.second = '0' + hex.second;
	}
	clockNode.innerHTML = hour + ':' + minute + ':' + second
	clockNode.addEventListener("mouseover", function() {
		clockNode.innerHTML = hex.hour + ':' + hex.minute + ':' + hex.second
	})
	backgroundNode.style.background = '#' + hex.hour + hex.minute + hex.second
}

setInterval(dynamicClock, 1000)

dynamicClock()
