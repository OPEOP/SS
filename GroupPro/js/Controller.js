function Controller () {
    var group = new Group('GroupName'),
        personView = new PersonView(group),
        previewView = new PreviewView(),
        groupView = new GroupView(group);

    setSubscribers();

    function setSubscribers () {
        //From PersonView
        mediator.subscribe('addPerson', addPerson);
        //From PersonView
        mediator.subscribe('printNewPerson', printNewPerson);
        //From GroupMemberView
        mediator.subscribe('showMember', showMember);
        //From GroupMemberView
        mediator.subscribe('deleteMember', deleteMember);
        //From GroupMemberView
        mediator.subscribe('showPreview', showPreview);
        //From GroupMemberView
        mediator.subscribe('restoreTabs', restoreTabs);
    }

    function addPerson (person) {
        group.addPerson(person);
    }

    function printNewPerson () {
        groupView.printNewPerson();
    }

    function showMember (li) {
        groupView.showMember(li);
    }

    function deleteMember (person, li) {
        groupView.deleteMember(li, person.getId());
        group.removePerson(person.getId());
        document.getElementById('form').reset();
    }

    function showPreview (personData) {
        previewView.close();
        previewView.print(personData);
    }

    function restoreTabs () {
        Helper.removeClass('active', document.getElementsByClassName('active'));
        Helper.addClass('active', document.getElementById('FIO'));
        Helper.addClass('active', document.getElementById('nav-first-tab'));
    }

    return this;
}
