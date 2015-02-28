function Person () {
    var personData = {},
        identifier;

    setIdentifier();

    // set all data from inputs viewTab
    this.setPersonData = function (_options) {
        var options = {
                secondName: null,
                firstName: null,
                middleName: '',
                serPassport: null,
                numPassport: null,
                inn: '',
                sex: null,
                birthday: null
            },
            key;

        // Check data
        for (key in options) {
            options[key] = _options[key];
        }

        personData = options;
    };

    // Set unique num for Person
    function setIdentifier () {
        identifier = new Date().getTime();
    }

    this.getIdentifier = function () {
        return identifier;
    };

    this.toJSON = function () {
        var cloneObj = {},
            key;

        for (key in personData) {
            cloneObj[key] = personData[key];
        }

        cloneObj.identifier = identifier;

        return cloneObj;
    };

    this.toString = function () {
        return personData.secondName;
    };

    return this;
}