function GroupView (group) {

    var groupNameEl = document.getElementById('groupName'),
        displayGroup = document.getElementById('displayGroup'),
        deleteButton = document.getElementById('deleteButton'),
        members = [],
        itemsGroup;

    init();

    function init () {
        groupNameEl.innerHTML = group.toString();
    }

    this.printNewPerson = function () {
        var li;

        li = document.createElement('li');

        li.className = 'itemGroup';

        members.push(new GroupMemberView(group.getLastPerson(), li, mediator));
    };

    this.showMember = function (li) {
        displayGroup.appendChild(li);

        itemsGroup = document.getElementsByClassName('itemGroup');
    };

    this.deleteMember = function (identifier) {
        var liFound = foundLi(identifier);

        group.removePerson(identifier);

        liFound.parentNode.removeChild(liFound);
    };

    function foundLi (identifier) {
        var liFound, i;
        for (i = 0; i < itemsGroup.length; i++) {
            if (itemsGroup[i].getAttribute('name') === ('' + identifier)) {
                liFound = itemsGroup[i];
                break;
            }
        }

        return liFound;
    }

    return this;
}