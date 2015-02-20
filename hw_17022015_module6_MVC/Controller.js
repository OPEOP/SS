function Controller () {

    this.start = function () {
        var group = new Group('Some_Group'),
            viewTab = new ViewTab(group),
            viewAllInfo = new ViewAllInfo(group);


        viewTab.init();
        viewAllInfo.init();
    };

    return this;
}
