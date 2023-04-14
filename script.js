const hoursBlock = document.getElementById('hours'),
	minutesBlock = document.getElementById('minutes'),
	secondBlock = document.getElementById('second'),
	milisecondBlock = document.getElementById('milisecond'),
	containerBlock = document.getElementById('container'),
	btnStart = document.getElementById('btn-start'),
	btnStop = document.getElementById('btn-stop'),
	btnReset = document.getElementById('btn-reset')

if (window.confirm('Confirm pls >3')) {
	containerBlock.style.display = "block"
} else {
	window.close()
}

let interval
let hours = 0
let minutes = 0
let second = 0
let milisecond = 0

function startTimer() {
	milisecond += 1

	milisecondBlock.innerHTML = milisecond

	if (milisecond > 99) {
		second++
		secondBlock.innerHTML = '0' + second
		milisecond = 0
	}
	if (second > 9) {
		secondBlock.innerHTML = second
	}
	if (second > 59) {
		minutes++
		minutesBlock.innerHTML = '0' + minutes
		second = 0
	}
	if (minutes > 9) {
		minutesBlock.innerHTML = minutes
	}
	if (minutes > 59) {
		hours++
		hoursBlock.innerHTML = '0' + hours
		minutes = 0
	}
	if (hours > 9999) {
		containerBlock.style.width = '650px'
	}
}

function stopTimer() {
	clearInterval(interval)
}

function resetTimer() {
	clearInterval(interval)
	hours = 0
	minutes = 0
	second = 0
	milisecond = 0
	hoursBlock.innerHTML = '00'
	minutesBlock.innerHTML = '00'
	secondBlock.innerHTML = '00'
	milisecondBlock.innerHTML = '00'
}

btnStart.addEventListener('click', () => {
	clearInterval(interval)
	interval = setInterval(startTimer, 10)
})

btnStop.addEventListener('click', () => {
	stopTimer()
})

btnReset.addEventListener('click', () => {
	resetTimer()
})
