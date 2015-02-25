function ViewTab (group) {

    var inputs = document.getElementsByClassName('form__input'),
        tabs = document.getElementsByClassName('tab'),
        tabsItems = document.getElementsByClassName('tabItem'),
        createButton = document.getElementById('createButton'),
        printButton = document.getElementById('printButton'),
        viewGroup;

    init();

    function init () {
        viewGroup = new ViewGroup(group, inputs);

        addEvent(createButton, 'click', setPersonData);
    }

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }
    
    function setPersonData () {        
        var person = new Person();

        person.setPersonData(getDataFromInputs(inputs));

        group.addPerson(person);

        viewGroup.printNewPerson();
    }

    function getDataFromInputs (_inputs) {
        var tempDataFromInputs = {},
            i;

        for (i = 0; i < inputs.length; i++) {
            tempDataFromInputs[_inputs[i].getAttribute('name')] = _inputs[i].value;
        }

        return tempDataFromInputs;
    }

    return this;
}