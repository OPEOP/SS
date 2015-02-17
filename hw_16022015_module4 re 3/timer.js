function Timer (_buttonEl, _displayEl) {

    var buttonEl= _buttonEl,
        displayEl = _displayEl,
        shortT = 'shortTime',
        fullT = 'fullTime',
        dateT = 'date',
        showNow = fullT, // For start with short time
        timerId = 1;

    this.start = function () {
        buttonEl.addEventListener('contextmenu', triggerTimer('right'), false);
        buttonEl.addEventListener('click', triggerTimer('left'), false);
    };

    function showTime (stringTime) {
        displayEl.innerHTML = stringTime;
    }

    function triggerTimer (buttonPressed) {
        return function () {
            if (buttonPressed === 'left') {
                if (showNow === fullT || showNow === dateT) {
                    showNow = shortT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        showTime(getShortTime());
                    }, 500);
                } else if (showNow === shortT) { // For explanations
                    showNow = fullT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        showTime(getFullTime());
                    }, 500);
                }
            } else {
                if (showNow === shortT || showNow === fullT) {
                    showNow = dateT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        showTime(getDate());
                    }, 500);
                } else if (showNow === dateT) { // For explanations
                    showNow = shortT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        showTime(getShortTime());
                    }, 500);
                }
            }
        }
    }

    function getShortTime () {
        var currentTime = new Date(),
            hours = getCorrectNum(currentTime.getHours()),
            minutes = getCorrectNum(currentTime.getMinutes());

        return hours + ':' + minutes;
    }

    function getFullTime () {
        var currentTime = new Date(),
            seconds = getCorrectNum(currentTime.getSeconds());

        return getShortTime() + ':' + seconds;
    }

     function getDate () {
        var currentTime = new Date(),
            day = getCorrectNum(currentTime.getDate()),
            month = getCorrectNum(currentTime.getMonth() + 1),
            year = getCorrectNum(currentTime.getFullYear() % 100);

        return day + '/' + month + '/' + year;
    }

    function getCorrectNum (recorrectNum) {
        return (recorrectNum < 10) ? '0' + recorrectNum : recorrectNum;
    }

    return this;    
}