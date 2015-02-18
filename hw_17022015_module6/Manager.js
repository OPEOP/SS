function Manager () {
    var inputElms = document.getElementsByClassName('form__input'),
        buttonShowElm = document.getElementById('buttonPrint'),
        buttonCloseElm = document.getElementById('close'),
        outputElm = document.getElementById('view'),
        displayElm = document.getElementById('display'),
        selectElms = document.getElementsByClassName('form__item'),
        selectItemElms = document.getElementsByClassName('form__information-window');

    function print () {
        var person = new Person();

        person.setPersonData(inputElms);
        person.printPersonData(outputElm);

        buttonShowElm.setAttribute('disabled', 'disabled');
        displayElm.style.display = 'block';
    }

    function close () {
        var i;

        displayElm.style.display = 'none';
        buttonShowElm.removeAttribute('disabled');

        for (i = outputElm.childNodes.length - 1; i >= 0; i--) {    //clear list in html
            outputElm.removeChild(outputElm.childNodes[i]);
        }
    }

    // show and hide selected menu
    function select (numClass) {
        return function () {
            var i,
                className = 'form__information-window',
                modifyClassName = className + ' form_display_none';

            for (i = 0; i < selectItemElms.length; i++) {
                if (i === numClass) {
                    selectItemElms[i].className = className;
                } else {
                    selectItemElms[i].className = modifyClassName;
                }
            }
        };
    }

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    this.start = function () {
        var i;

        addEvent(buttonShowElm, 'click', print);
        addEvent(buttonCloseElm, 'click', close);

        for (i = 0; i < selectElms.length; i++) {
            addEvent(selectElms[i], 'click', select(i));
        }
    };

    return this;
}
