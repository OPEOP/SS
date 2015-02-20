function Person () {
    var personData = {};

    // TODO: get not elements, but values from this elements
    // set all data from inputs viewTab
    this.setPersonData = function (inputElms) {
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
            i;

        for (i = 0; i < inputElms.length; i++) {    // If changed order in form
            options[inputElms[i].getAttribute('name')] = inputElms[i].value;
        }

        personData = options;
    };

    this.toJSON = function () {
        var cloneObj = {},
            key;

        for (key in personData) {
            cloneObj[key] = personData[key];
        }

        return cloneObj;
    };

    this.toString = function () {
        return personData.secondName;
    };

    return this;
}