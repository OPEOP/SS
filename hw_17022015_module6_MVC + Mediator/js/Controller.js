function Controller () {

    start();

    function start () {
        var group = new Group('GroupName'),
            personView = new PersonView(group),
            previewView = new PreviewView(),
            groupView = new GroupView(group);

        mediator.subscribe('addPerson', group.addPerson);
        mediator.subscribe('printNewPerson', groupView.printNewPerson);
        mediator.subscribe('getPersonByIdentifier', group.getPersonByIdentifier);
        mediator.subscribe('showMember', groupView.showMember);
        mediator.subscribe('deleteMember', groupView.deleteMember);
        mediator.subscribe('closePreview', previewView.close);
        mediator.subscribe('showPreview', previewView.print);
    }

    return this;
}
