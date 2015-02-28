function Controller (mediator) {

    start();

    function start () {
        var group = new Group('GroupName'),
            personView = new PersonView(mediator, group),
            previewView = new PreviewView(),
            groupView = new GroupView(mediator, group);

        mediator.subscribe('addPerson', group.addPerson);
        mediator.subscribe('printNewPerson', groupView.printNewPerson);
        mediator.subscribe('getPersonByIdentifier', group.getPersonByIdentifier);
        mediator.subscribe('showMember', groupView.showMember);
        mediator.subscribe('deleteMember', groupView.deleteMember);
        mediator.subscribe('showPreview', previewView.print);
    }

    return this;
}
