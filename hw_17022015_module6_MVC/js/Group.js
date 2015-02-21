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

    this.getCountPersons = function () {
        return persons.length;
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

    //this.addPersons = function (persons) {
    //    var i;
    //
    //    for (i = 0; i < persons.length; i++) {
    //        this.addPerson(persons[i]);
    //    }
    //};

    //this.getStudents = function () {
    //    return students;
    //};

    //this.removeStudent = function (name) {
    //    var deletedStudents,
    //        i;
    //
    //    for (i = 0; i < students.length; i++) {
    //        if (students[i].toJSON() === name) {
    //            deletedStudents = students.slice(i, 1);
    //            break;
    //        }
    //    }
    //
    //    console.log('Student %s was deleted.', deletedStudents[0].toJSON());
    //
    //    return deletedStudents[0].toJSON();
    //};

    //this.clearGroup = function () {
    //    students = [];
    //
    //    console.log('Group was cleaned.');
    //};

    return this;
}