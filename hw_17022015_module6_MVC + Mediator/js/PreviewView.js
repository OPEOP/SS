function PreviewView () {
    var previewButton = document.getElementById('previewButton'),
        closeButton = document.getElementById('closeButton'),
        output = document.getElementById('view'),
        display = document.getElementById('display'),
        inputs = document.getElementsByClassName('form__input');

    init();

    function init () {
        addEvent(previewButton, 'click', showPreview);
        addEvent(closeButton, 'click', close);
    }

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    function showPreview () {
        var tempDataFromInputs = getDataFromInputs(inputs);

        print(tempDataFromInputs);

        previewButton.setAttribute('disabled', 'disabled');
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

    function print (from) {
        var key, li;

        for (key in from) {
            li = document.createElement('li');
            li.innerHTML = '<dl><dt>' + key + ': </dt><dd>' + from[key] + '</dd></dl>';
            output.appendChild(li);
        }
    }

    function close () {
        display.style.display = 'none';
        previewButton.removeAttribute('disabled');

        output.innerHTML = ''; //clear list in html
    }

    this.print = function (from) {
        print(from);

        previewButton.setAttribute('disabled', 'disabled');
        display.style.display = 'block';
    };

    this.close = function () {
        close();
    };

    return this;
}