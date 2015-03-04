function GroupView (group) {

    var groupNameEl = document.getElementById('groupName'),
        displayGroup = document.getElementById('displayGroup'),
        deleteButton = document.getElementById('deleteButton'),
        members = [];

    init();

    function init () {
        groupNameEl.innerHTML = group.toString();
    }

    this.printNewPerson = function () {
        var li;

        li = document.createElement('li');

        li.className = 'itemGroup';

        members.push(new GroupMemberView(group.getLastPerson(), li));
    };

    this.showMember = function (li) {
        displayGroup.appendChild(li);
    };

    this.deleteMember = function (li, id) {
        var i;

        li.parentNode.removeChild(li);

        for (i = 0; i < members.length; i++) {
            if (members[i] && members[i].getId() === id) {
                delete members[i];
            }
        }
    };

    return this;
}