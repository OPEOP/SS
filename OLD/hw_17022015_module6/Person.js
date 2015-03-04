function Person () {
    var personData = {};

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
            i, key;

        for (key in options) {
            for (i = 0; i < inputElms.length; i++) {    // If changed order in form
                if (inputElms[i].getAttribute('name') === key) {
                    options[key] = inputElms[i].value;
                }
            }
        }

        personData = options;
    };

    this.getPersonData = function () {
        var cloneObj = {},
            key;

        for (key in personData) {
            cloneObj[key] = personData[key];
        }

        return cloneObj;
    };

    return this;
}