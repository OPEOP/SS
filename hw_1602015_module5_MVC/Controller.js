function Controller () {
    this.init = function () {
        var group = new Group('Dp-070 UI'),
            view;

        group.addStudents(['Egor', 'Olya', 'Bogdan', 'Kate', 'Sergey', 'Daniil']);

        view = new View(group.toJSON());
        view.init();
    };

    return this;
}