let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let miliseconds = document.getElementById('miliseconds')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')
let interval 
let t_minutes = 0
let t_seconds = 0
let t_miliseconds = 0

start.onclick = function () {
	interval = setInterval(startTimer, 10)

	stop.onclick = function () {
		clearInterval(interval)
	}
	
	reset.onclick = function () {
		console.log('reset')
		t_miliseconds = 0
		t_seconds = 0
		t_minutes = 0

		miliseconds.innerText = '0' + t_miliseconds
		seconds.innerText = '0' + t_seconds
		minutes.innerText = '0' + t_minutes
	}
}

function startTimer () {
	t_miliseconds++

	if (t_miliseconds < 10) {
		miliseconds.innerText = '0' + t_miliseconds
	} else {
		miliseconds.innerText = t_miliseconds
	}

	if (t_miliseconds >= 99) {
		t_miliseconds = 0
		t_seconds ++

		if (t_seconds < 10) {
			seconds.innerText = '0' + t_seconds
		} else {
			seconds.innerText = t_seconds
		}
	}

	if (t_seconds > 59) {
		t_minutes++
		t_seconds = 0
		seconds.innerText = '0' + t_seconds
		minutes.innerText = t_minutes

		if (t_minutes < 10) {
			minutes.innerText = '0' + t_minutes
		} else {
			minutes.innerText = t_minutes
		}
	}
}