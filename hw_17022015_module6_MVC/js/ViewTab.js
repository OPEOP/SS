function ViewTab (group) {

    var arrInputs = document.getElementsByClassName('form__input'),
        arrSelectedEls = document.getElementsByClassName('tabItem'),
        arrSelectors = document.getElementsByClassName('tab'),
        createButton = document.getElementById('createButton'),
        printButton = document.getElementById('printButton'),
        viewGroup;

    this.init = function () {
        var i;

        viewGroup = new ViewGroup(group);
        viewGroup.init();

        addEvent(createButton, 'click', setPersonData(group));

        for (i = 0; i < arrSelectors.length; i++) {
            addEvent(arrSelectors[i], 'click', select(i));
        }
    };

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    function setPersonData (_group) {

        return function () {
            var person = new Person();

            // TODO: Change arrInputs elements to arrValueInputs data
            person.setPersonData(arrInputs);

            _group.addPerson(person);

            viewGroup.printNewPerson();

            // Enabled button print after created first person
            if (_group.getCountPeople() === 1) {
                printButton.removeAttribute('disabled');
            }
        }
    }

    // show and hide selected menu
    function select (numClass) {
        return function () {
            var i;

            for (i = 0; i < arrSelectedEls.length; i++) {
                if (i === numClass) {
                    arrSelectedEls[i].style.display = 'block';
                } else {
                    arrSelectedEls[i].style.display = 'none';
                }
            }
        };
    }

    return this;
}