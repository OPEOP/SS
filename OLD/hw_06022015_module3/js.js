window.onload = function () {	
	var buttonTime = document.getElementById('buttonTime');
	var buttonDate = document.getElementById('buttonDate');
	var display = document.getElementById('display');
	var triggerTime = true;
	var triggerDate = true;
	var timer;

	buttonTime.onclick = function () {		
		if (triggerTime) {
			clearInterval(timer);			
			timer = setInterval(showTime(getShortTime), 500);
			triggerTime = false;
			triggerDate = true;
		} else {
			clearInterval(timer);			
			timer = setInterval(showTime(getFullTime), 500);
			triggerTime = true;
			triggerDate = true;
		}		
	}

	buttonDate.onclick = function () {
		if (triggerDate) {			
			clearInterval(timer);
			timer = setInterval(showTime(getDate), 500);
			triggerDate = false;
			triggerTime = true;			
		} else {			
			clearInterval(timer);			
			timer = setInterval(showTime(getShortTime), 500);
			triggerDate = true;	
			triggerTime = false;						
		}		
	}	

	function showTime (typeDisplayDate) {	
		return function () {
			display.innerHTML = typeDisplayDate();
		}		
	}
	
	function getShortTime () {
		var currentTime = new Date();

		var hours = recorrect(currentTime.getHours());
		var minutes = recorrect(currentTime.getMinutes());

		return hours + ':' + minutes;
	}

	function getFullTime () {
		var currentTime = new Date();

		var seconds = recorrect(currentTime.getSeconds());

		return getShortTime() + ':' + seconds;
	}

	function getDate () {
		var currentTime = new Date();			
		var day = recorrect(currentTime.getDate());
		var month = recorrect(currentTime.getMonth() + 1);
		var year = recorrect(currentTime.getFullYear() % 100);

		return day + '/' + month + '/' + year;
	}

	function recorrect (recorrectNum) {
		return (recorrectNum < 10) ? '0' + recorrectNum : recorrectNum;
	}		
};

