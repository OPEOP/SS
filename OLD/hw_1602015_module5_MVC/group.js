function Group (_nameGroup) {
    var nameGroup = _nameGroup,
        students = [];

    this.getNameGroup = function () {
        return nameGroup;
    };

    this.addStudent = function (name) {
        students.push(new Student(name));

        console.log('Student %s was added', name);
    };

    this.addStudents = function (names) {
        var i;

        for (i = 0; i < names.length; i++) {
            this.addStudent(names[i]);
        }
    };

    this.toJSON = function () {
        var jsonObj = {},
            i;

        jsonObj.nameGroup = nameGroup;

        for (i = 0; i < students.length; i++) {
            jsonObj[students[i].toString()] = students[i].toJSON();
        }

        return jsonObj;
    };

    this.toString = function () {
        return nameGroup;
    };

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