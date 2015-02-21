function ViewTab (group) {

    var inputs = document.getElementsByClassName('form__input'),
        tabs = document.getElementsByClassName('tab'),
        tabsItems = document.getElementsByClassName('tabItem'),
        createButton = document.getElementById('createButton'),
        printButton = document.getElementById('printButton'),
        viewGroup;

    init();

    function init () {
        var i;

        viewGroup = new ViewGroup(group, inputs);

        addEvent(createButton, 'click', setPersonData);

        for (i = 0; i < tabs.length; i++) {
            addEvent(tabs[i], 'click', select(i));
        }
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

    // show and hide selected menu
    function select (numClass) {
        return function () {
            var i;

            for (i = 0; i < tabsItems.length; i++) {
                if (i === numClass) {
                    tabsItems[i].style.display = 'block';
                } else {
                    tabsItems[i].style.display = 'none';
                }
            }
        };
    }

    return this;
}