function Group (_nameGroup) {
    var nameGroup = _nameGroup,
        persons = [];

    this.addPerson = function (person) {
        persons.push(person);

        console.log('Person %s was added', person.toString());
    };

    this.getLastPerson = function () {
        var lastPerson;

        if (persons.length > 0) {
            lastPerson = persons[persons.length - 1];
        }

        return lastPerson;
    };

    this.getPersonDataByIdentifier = function (identifier) {
        var foundPersonData,
            i;

        for (i = 0; i < persons.length; i++) {
            if ((persons[i].getIdentifier() + '') === identifier) {
                foundPersonData = persons[i].toJSON();
                break;
            }
        }

        return foundPersonData || 'not found';
    };

    this.getPersonByIdentifier = function (identifier) {
        var foundPerson,
            i;

        for (i = 0; i < persons.length; i++) {
            if ((persons[i].getIdentifier() + '') === identifier) {
                foundPerson = persons[i];
                break;
            }
        }

        return foundPerson || 'not found';
    };

    this.removePerson = function (identifier) {
        var deletedPerson, i;

        for (i = 0; i < persons.length; i++) {
            if ((persons[i].getIdentifier()) === identifier) {
                deletedPerson = persons.splice(i, 1);
                console.log('Person %s was deleted.', deletedPerson[0].getIdentifier());
                break;
            }
        }
    };

    this.toJSON = function () {
        var jsonObj = {},
            i;

        jsonObj.nameGroup = nameGroup;

        for (i = 0; i < persons.length; i++) {
            jsonObj[persons[i].toString()] = persons[i].toJSON();
        }

        return jsonObj;
    };

    this.toString = function () {
        return nameGroup;
    };

    return this;
}