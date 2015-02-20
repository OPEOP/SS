function ViewGroup (group) {

    var groupNameEl = document.getElementById('groupName'),
        displayGroup = document.getElementById('displayGroup');

    this.init = function () {
        groupNameEl.innerHTML = group.toString();
    };

    this.printNewPerson = function () {

        var li;

        li = document.createElement('li');
        li.innerHTML = group.getLastPerson().firstName;
        displayGroup.appendChild(li);

    };

    //function addEvent (elm, typeEvent, fn) {
    //    elm.addEventListener(typeEvent, fn, false);
    //}

    //function parseJSONGroupToArr () {
    //    var parameters = [],
    //        i = 1,
    //        item;
    //
    //    parameters.push(groupJSON.nameGroup);
    //
    //    for (item in groupJSON) {
    //        if (item !== 'nameGroup') {
    //            parameters.push(groupJSON[item].name);
    //            i++;
    //        }
    //    }
    //
    //    return parameters;
    //}

    return this;
}