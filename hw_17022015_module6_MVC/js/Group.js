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
            lastPerson = persons[persons.length - 1].toJSON();
        }

        return lastPerson;
    };

    this.getPersonDataByIdentifier = function (identifier) {
        var foundPersonData,
            i;

        for (i = 0; i < persons.length; i++) {
            if ((persons[i].getIndentifier() + '') === identifier) {
                foundPersonData = persons[i].toJSON();
                break;
            }
        }

        //persons.forEach(function (item) {
        //    if ((item.getIndentifier() + '') === identifier) {
        //        foundPersonData = item.toJSON();
        //    }
        //});

        return foundPersonData || 'not found';
    };

    this.getPersonByIdentifier = function (identifier) {
        var foundPerson,
            i;

        for (i = 0; i < persons.length; i++) {
            if ((persons[i].getIndentifier() + '') === identifier) {
                foundPerson = persons[i];
                break;
            }
        }

        return foundPerson || 'not found';
    };

    this.removePerson = function (identifier) {
        var deletedPerson, i;

        for (i = 0; i < persons.length; i++) {
            if (('' + persons[i].getIndentifier()) === identifier) {
                deletedPerson = persons.splice(i, 1);
                console.log('Student %s was deleted.', deletedPerson[0].getIndentifier());
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

    //this.getCountPersons = function () {
    //    return persons.length;
    //};

    //this.addPersons = function (persons) {
    //    var i;
    //
    //    for (i = 0; i < persons.length; i++) {
    //        this.addPerson(persons[i]);
    //    }
    //};

    //this.getPersons = function () {
    //    return students;
    //};

    //this.clearGroup = function () {
    //    students = [];
    //
    //    console.log('Group was cleaned.');
    //};

    return this;
}