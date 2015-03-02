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

    this.deleteMember = function (li) {
        li.parentNode.removeChild(li);
    };

    return this;
}