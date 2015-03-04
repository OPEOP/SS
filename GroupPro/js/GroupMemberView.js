function GroupMemberView (person, li) {
    var id = person.getId(),
        saveButton = document.getElementById('saveButton'),
        spanInLi = document.createElement('span'),
        tplHTML = (document.getElementById('tpl')).innerHTML,
        tabContent = document.getElementById('tab-cont'),
        inputs = tabContent.getElementsByClassName('form__input'),
        editButton,
        deleteButton,
        previewButton,
        tpl;

    init();

    function init () {
        showMember();
    }

    function showMember () {
        var personData = person.toJSON();

        spanInLi.innerHTML = personData.secondName + ' '
                            + (personData.firstName[0] || "") + ' '
                            + (personData.middleName[0] || "");

        li.appendChild(spanInLi);

        setButtons();
        addButtons();

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
        mediator.publish('closePreview');
        //To previewView
        mediator.publish('showPreview', person.toJSON());
    }

    function edit () {
        setPersonDataInInputs();

        Helper.removeClass('hide', saveButton);

        addEvent(saveButton, 'click', savePersonData);
    }

    function setPersonDataInInputs () {
        tpl = _.template(tplHTML);

        tabContent.innerHTML = tpl(person.toJSON());

        inputs = tabContent.getElementsByClassName('form__input');
    }

    function savePersonData () {
        var newDataFromInputs = getDataFromInputs(inputs),
            personData;

        person.setPersonData(newDataFromInputs);

        personData = person.toJSON();

        //reset name in display group
        spanInLi.innerHTML = personData.secondName + ' '
                            + (personData.firstName[0] || "") + ' '
                            + (personData.middleName[0] || "");

        Helper.addClass('hide', saveButton);

        // For reset inputs, because don`t working form.reset() or button reset after tpl sets
        tabContent.innerHTML = tpl({
            secondName: '',
            firstName: '',
            middleName: '',
            serPassport: '',
            numPassport: '',
            inn: '',
            sex: 'male',
            birthday: ''
        });

        //To Helper
        mediator.publish('restoreTabs');

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
        // To groupView and group
        mediator.publish('deleteMember', person, li);

        Helper.addClass('hide', saveButton);
    }

    this.getId = function () {
        return id;
    };

    return this;
}