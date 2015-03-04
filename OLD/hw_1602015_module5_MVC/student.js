function Student (nameStudent) {
    var name = nameStudent;

    this.toJSON = function () {
        return {
            name: name
        };
    };

    this.toString = function () {
        return name;
    };

    return this;
}