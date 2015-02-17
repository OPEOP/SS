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
            i,
            key;

        for (key in options) {
            for (i = 0; i < inputElms.length; i++) {    // If changed order in form
                if (inputElms[i].getAttribute('name') === key) {
                    options[key] = inputElms[i].value;
                }
            }
        }

        personData = options;
    };

    this.printPersonData = function (outputElm) {
        var li,
            key;

        for (key in personData) {
            li = document.createElement('li');
            li.innerHTML = '<dl><dt>' + key + ': </dt><dd>' + personData[key] + '</dd></dl>';
            outputElm.appendChild(li);
        }
    };

    this.getPersonData = function () {
        var key,
            cloneObj = {};

        for (key in personData) {
            cloneObj[key] = personData[key];
        }

        return cloneObj;
    };

    return this;
}