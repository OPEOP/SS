function PersonView () {

    var inputs = document.getElementsByClassName('form__input'),
        createButton = document.getElementById('createButton'),
        printButton = document.getElementById('printButton');

    init();

    function init () {
        addEvent(createButton, 'click', setPersonData);
    }

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }
    
    function setPersonData () {        
        var person = new Person();

        person.setPersonData(getDataFromInputs(inputs));

        //To group
        mediator.publish('addPerson', person);
        //To groupView
        mediator.publish('printNewPerson');
        //To Helper
        mediator.publish('restoreTabs');
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

    return this;
}