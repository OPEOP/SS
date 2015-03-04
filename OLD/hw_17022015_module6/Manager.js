function Manager () {
    var arrInputs = document.getElementsByClassName('form__input'),
        showButton = document.getElementById('buttonPrint'),
        closeButton = document.getElementById('close'),
        output = document.getElementById('view'),
        display = document.getElementById('display'),
        arrSelectors = document.getElementsByClassName('form__item'),
        arrSelectedEls = document.getElementsByClassName('form__information-window');

    this.start = function () {
        var i;

        addEvent(showButton, 'click', print);
        addEvent(closeButton, 'click', close);

        for (i = 0; i < arrSelectors.length; i++) {
            addEvent(arrSelectors[i], 'click', select(i));
        }
    };

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    function print () {
        var person = new Person(),
            personData,
            li, key;

        person.setPersonData(arrInputs);
        personData = person.getPersonData();

        for (key in personData) {
            li = document.createElement('li');
            li.innerHTML = '<dl><dt>' + key + ': </dt><dd>' + personData[key] + '</dd></dl>';
            output.appendChild(li);
        }

        showButton.setAttribute('disabled', 'disabled');
        display.style.display = 'block';
    }

    function close () {
        var i;

        display.style.display = 'none';
        showButton.removeAttribute('disabled');

        for (i = output.childNodes.length - 1; i >= 0; i--) {    //clear list in html, begin with end list ul
            output.removeChild(output.childNodes[i]);
        }
    }

    // show and hide selected menu
    function select (numClass) {
        return function () {
            var i,
                className = 'form__information-window',
                modifyClassName = className + ' hide';

            for (i = 0; i < arrSelectedEls.length; i++) {
                if (i === numClass) {
                    arrSelectedEls[i].className = className;
                } else {
                    arrSelectedEls[i].className = modifyClassName;
                }
            }
        };
    }

    return this;
}
