function Options (inputElms) {
    var inputs = inputElms;


    this.getOptions = function () {
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
            i = 0,
            key;

        for (key in options) {
            options[key] = inputs[i].value;
            i++;
        }

        return options;
    }
}