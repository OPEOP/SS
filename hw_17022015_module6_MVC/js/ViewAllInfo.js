function ViewAllInfo () {
    var printButton = document.getElementById('printButton'),
        closeButton = document.getElementById('closeButton'),
        output = document.getElementById('view'),
        display = document.getElementById('display'),
        inputs = document.getElementsByClassName('form__input');

    init();

    function init () {
        addEvent(printButton, 'click', print);
        addEvent(closeButton, 'click', close);
    }

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    function print () {       
        var tempDataFromInputs = getDataFromInputs(inputs),
            li, key;

        for (key in tempDataFromInputs) {
            li = document.createElement('li');
            li.innerHTML = '<dl><dt>' + key + ': </dt><dd>' + tempDataFromInputs[key] + '</dd></dl>';
            output.appendChild(li);
        }

        printButton.setAttribute('disabled', 'disabled');
        display.style.display = 'block';        
    }

    function getDataFromInputs (_inputs) {
        var tempDataFromInputs = {},
            i;

        for (i = 0; i < inputs.length; i++) {
            if (_inputs[i].getAttribute('name') === 'sex') {
                if (_inputs[i].checked === true) {
                    tempDataFromInputs[_inputs[i].getAttribute('name')] = _inputs[i].value;
                }

                continue;
            }

            tempDataFromInputs[_inputs[i].getAttribute('name')] = _inputs[i].value;
        }

        return tempDataFromInputs;
    }

    function close () {
        display.style.display = 'none';
        printButton.removeAttribute('disabled');

        output.innerHTML = ''; //clear list in html
    }

    return this;
}