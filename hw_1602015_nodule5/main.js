window.addEventListener('load', function () {
    var groupElm = document.getElementById('group'),
        group = new Group(),
        li,
        i;

    group.addStudents(['Egor', 'Olya', 'Bogdan', 'Kate', 'Sergey', 'Daniil']);

    for (i = 0; i < group.getStudents().length; i++) {
        li = document.createElement('li');
        li.innerHTML = group.getStudents()[i].getName();
        groupElm.appendChild(li);
    }

    group.removeStudent('Egor');

    group.clearGroup();

}, false);