function Group (_nameGroup) {
    var nameGroup = _nameGroup,
        people = [];

    this.addPerson = function (person) {
        people.push(person);

        console.log('Person %s was added', person.toString());
    };

    this.getLastPerson = function () {
        var lastPerson;

        if (people.length > 0) {
            lastPerson = people[people.length - 1].toJSON();
        }

        return lastPerson;
    };

    this.getCountPeople = function () {
        return people.length;
    };

    this.toJSON = function () {
        var jsonObj = {},
            i;

        jsonObj.nameGroup = nameGroup;

        for (i = 0; i < people.length; i++) {
            jsonObj[people[i].toString()] = people[i].toJSON();
        }

        return jsonObj;
    };

    this.toString = function () {
        return nameGroup;
    };

    //this.addPeople = function (people) {
    //    var i;
    //
    //    for (i = 0; i < people.length; i++) {
    //        this.addPerson(people[i]);
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