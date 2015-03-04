function Controller () {

    start();

    function start () {
        var group = new Group('Some_Group'),
            viewTab = new ViewTab(group),
            viewAllInfo = new ViewAllInfo();
    }

    return this;
}
