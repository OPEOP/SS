function GroupMemberView (person, li, mediator) {
    var inputs = document.getElementsByClassName('form__input'),
        saveButton = document.getElementById('saveButton'),
        spanInLi = document.createElement('span'),
        editButton,
        deleteButton,
        previewButton;

    init();

    function init () {
        showMember();
    }

    function showMember () {
        spanInLi.innerHTML = person.toJSON().secondName + ' '
                            + (person.toJSON().firstName[0] || "") + ' '
                            + (person.toJSON().middleName[0] || "");

        li.appendChild(spanInLi);

        setButtons();
        addButtons();

        li.setAttribute('name', '' + person.toJSON().identifier);

        mediator.publish('showMember', li);

        setEventsOnButtons();
    }

    function setButtons () {
        previewButton = document.createElement('button');
        editButton = document.createElement('button');
        deleteButton = document.createElement('button');

        previewButton.setAttribute('type', 'button');
        editButton.setAttribute('type', 'button');
        deleteButton.setAttribute('type', 'reset');

        previewButton.setAttribute('class', 'memberButton btn btn-default');
        editButton.setAttribute('class', 'memberButton btn btn-default');
        deleteButton.setAttribute('class', 'memberButton btn btn-default');

        previewButton.innerHTML = 'preview';
        editButton.innerHTML = 'edit';
        deleteButton.innerHTML = 'delete';
    }

    function addButtons () {
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        li.appendChild(previewButton);
    }

    function setEventsOnButtons () {
        addEvent(previewButton, 'click', showPreview);
        addEvent(editButton, 'click', edit);
        addEvent(deleteButton, 'click', deletePerson);
    }

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    function showPreview () {
        //To previewView
        mediator.publish('showPreview', person.toJSON());
    }

    function edit () {
        setPersonDataInInputs();

        saveButton.style.display = 'block';

        addEvent(saveButton, 'click', savePersonData);
    }

    function setPersonDataInInputs () {
        var i;

        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].getAttribute('name') === 'sex') {
                inputs[i].checked = inputs[i].value === person.toJSON()[inputs[i].getAttribute('name')];

                continue;
            }

            inputs[i].value = person.toJSON()[inputs[i].getAttribute('name')];
        }
    }

    function savePersonData () {
        var newDataFromInputs = getDataFromInputs(inputs);

        person.setPersonData(newDataFromInputs);

        //reset name in display group
        spanInLi.innerHTML = person.toJSON().secondName + ' '
        + (person.toJSON().firstName[0] || "") + ' '
        + (person.toJSON().middleName[0] || "");

        saveButton.style.display = 'none';

        removeEvent(saveButton, 'click', savePersonData);
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

    function removeEvent (elm, typeEvent, fn) {
        elm.removeEventListener(typeEvent, fn, false);
    }

    function deletePerson () {
        // To groupView
        mediator.publish('deleteMember', person.getIdentifier());
    }

    return this;
}