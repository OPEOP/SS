function View (groupJSON) {
    var nameGroupEl = document.getElementById('nameGroup'),
        showGroupEl = document.getElementById('showGroup'),
        li;

    this.init = function () {
        print();
    };

    function print () {
        var i;

        nameGroupEl.innerHTML = parseJSONGroupToArr()[0];

        for (i = 1; i < parseJSONGroupToArr().length; i++) {
            li = document.createElement('li');
            li.innerHTML = parseJSONGroupToArr()[i];
            showGroupEl.appendChild(li);
        }
    }

    function parseJSONGroupToArr () {
        var parameters = [],
            i = 1,
            item;

        parameters.push(groupJSON.nameGroup);

        for (item in groupJSON) {
            if (item !== 'nameGroup') {
                parameters.push(groupJSON[item].name);
                i++;
            }
        }

        return parameters;
    }

    return this;
}