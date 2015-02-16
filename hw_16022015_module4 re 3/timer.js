function Timer (button_el, display_el) {

    var button_el = button_el,
        display_el = display_el,
        timerThis = this,
        shortT = 'shortTime',
        fullT = 'fullTime',
        dateT = 'date',
        showNow = fullT, // For start with short time
        timerId = 1,
        countLeftClick = 0,
        countRightClick = 0;

    this.setListeners = function () {
        button_el.addEventListener('contextmenu', this.triggerTimer('right'), false);
        button_el.addEventListener('click', this.triggerTimer('left'), false);
    };

    this.showTime = function (stringTime) {
        display_el.innerHTML = stringTime;
    };

    this.triggerTimer = function (buttonPressed) {
        return function () {
            if (buttonPressed === 'left') {
                countLeftClick++;
                if (showNow === fullT || showNow === dateT) {
                    showNow = shortT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        timerThis.showTime(timerThis.getShortTime());
                    }, 500);
                } else if (showNow === shortT) { // For explanations
                    showNow = fullT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        timerThis.showTime(timerThis.getFullTime());
                    }, 500);
                }
            } else {
                countRightClick++;
                if (showNow === shortT || showNow === fullT) {
                    showNow = dateT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        timerThis.showTime(timerThis.getDate());
                    }, 500);
                } else if (showNow === dateT) { // For explanations
                    showNow = shortT;
                    clearInterval(timerId);
                    timerId = setInterval(function () {
                        timerThis.showTime(timerThis.getShortTime());
                    }, 500);
                }
            }
        }
    };

    this.getShortTime = function () {
        var currentTime = new Date(),
            hours = timerThis.getCorrectNum(currentTime.getHours()),
            minutes = timerThis.getCorrectNum(currentTime.getMinutes());

        return hours + ':' + minutes;
    };

    this.getFullTime = function () {
        var currentTime = new Date(),
            seconds = timerThis.getCorrectNum(currentTime.getSeconds());

        return timerThis.getShortTime() + ':' + seconds;
    };

    this.getDate = function () {
        var currentTime = new Date(),
            day = timerThis.getCorrectNum(currentTime.getDate()),
            month = timerThis.getCorrectNum(currentTime.getMonth() + 1),
            year = timerThis.getCorrectNum(currentTime.getFullYear() % 100);

        return day + '/' + month + '/' + year;
    };

    this.getCorrectNum = function (recorrectNum) {
        return (recorrectNum < 10) ? '0' + recorrectNum : recorrectNum;
    };

    this.getCountLeftClick = function () {
        return countLeftClick;
    };

    this.getCountRightClick = function () {
        return countRightClick;
    };

    return this;    
}