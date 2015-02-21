function ViewGroup (group, inputs) {

    var groupNameEl = document.getElementById('groupName'),
        displayGroup = document.getElementById('displayGroup'),
        saveButton = document.getElementById('saveButton'),
        deleteButton = document.getElementById('deleteButton'),
        currentNumLi = 0,
        itemsGroup,
        currentLi,
        liIdentifier;

    init();

    function init () {
        groupNameEl.innerHTML = group.toString();

        addEvent(saveButton, 'click', savePersonData);
        addEvent(deleteButton, 'click', deletePerson);
    }

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    function savePersonData () {
        var newDataFromInputs = getDataFromInputs(inputs),
            foundPerson;

        foundPerson = group.getPersonByIdentifier(liIdentifier);

        foundPerson.setPersonData(newDataFromInputs);

        //reset name in display group
        currentLi.innerHTML = foundPerson.toJSON().firstName + ' ' + foundPerson.toJSON().secondName;

        saveButton.style.display = 'none';
        deleteButton.style.display = 'none';
    }

    function getDataFromInputs (_inputs) {
        var tempDataFromInputs = {},
            i;

        for (i = 0; i < _inputs.length; i++) {
            tempDataFromInputs[_inputs[i].getAttribute('name')] = _inputs[i].value;
        }

        return tempDataFromInputs;
    }

    function deletePerson () {
        group.removePerson(liIdentifier);

        currentLi.style.display = 'none';
        saveButton.style.display = 'none';
        deleteButton.style.display = 'none';
    }

    function edit (_currentNumLi) {
        return function () {
            var editPerson;

            currentLi = itemsGroup[_currentNumLi];
            liIdentifier = currentLi.getAttribute('name');

            editPerson = foundPersonInGroup(liIdentifier);

            setPersonDataInInputs(editPerson);

            saveButton.style.display = 'block';
            deleteButton.style.display = 'block';
        };
    }

    function foundPersonInGroup (personIdentifier) {
        return group.getPersonDataByIdentifier(personIdentifier);
    }

    function setPersonDataInInputs (editPerson) {
        var i;

        for (i = 0; i < inputs.length; i++) {
            inputs[i].value = editPerson[inputs[i].getAttribute('name')];
        }
    }

    this.printNewPerson = function () {
        var li;

        li = document.createElement('li');
        li.innerHTML = group.getLastPerson().firstName + ' ' + group.getLastPerson().secondName;
        li.className = 'itemGroup';
        // Set 'li' element identifier for our new person, we could find his in DOM
        li.setAttribute('name', '' + group.getLastPerson().identifier);
        displayGroup.appendChild(li);

        itemsGroup = document.getElementsByClassName('itemGroup');

        addEvent(itemsGroup[itemsGroup.length - 1], 'click', edit(currentNumLi));
        currentNumLi++;
    };

    //function removeEvent (elm, typeEvent, fn) {
    //    elm.removeEventListener(typeEvent, fn, false);
    //}

    //function parseJSONGroupToArr () {
    //    var parameters = [],
    //        i = 1,
    //        item;
    //
    //    parameters.push(groupJSON.nameGroup);
    //
    //    for (item in groupJSON) {
    //        if (item !== 'nameGroup') {
    //            parameters.push(groupJSON[item].name);
    //            i++;
    //        }
    //    }
    //
    //    return parameters;
    //}

    return this;
}