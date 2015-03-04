function Person () {
    var personData = {},
        id;

    setId();

    // set all data from inputs viewTab
    this.setPersonData = function (_options) {
        var options = {
                secondName: '',
                firstName: '',
                middleName: '',
                serPassport: '',
                numPassport: '',
                inn: '',
                sex: '',
                birthday: ''
            },
            key;

        // Check data
        for (key in options) {
            options[key] = _options[key];
        }

        personData = options;
    };

    // Set unique num for Person
    function setId () {
        id = new Date().getTime();
    }

    this.getId = function () {
        return id;
    };

    this.toJSON = function () {
        var cloneObj = {},
            key;

        for (key in personData) {
            cloneObj[key] = personData[key];
        }

        cloneObj.id = id;

        return cloneObj;
    };

    this.toString = function () {
        return personData.secondName;
    };

    return this;
}