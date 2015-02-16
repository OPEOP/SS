function Student (nameStudent) {
    var name = nameStudent;

    this.getName = function () {
        return name;
    };

    return this;
}