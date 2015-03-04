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

    this.getPersonDataByIdentifier = function (id) {
        return this.getPersonByIdentifier(id).toJSON();
    };

    this.getPersonByIdentifier = function (id) {
        var foundPerson,
            i;

        for (i = 0; i < persons.length; i++) {
            if ((persons[i].getId() + '') === id) {
                foundPerson = persons[i];
                break;
            }
        }

        return foundPerson || {};
    };

    this.removePerson = function (id) {
        var deletedPerson, i;

        for (i = 0; i < persons.length; i++) {
            if ((persons[i].getId()) === id) {
                deletedPerson = persons.splice(i, 1);
                console.log('Person %s was deleted.', deletedPerson[0].getId());
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