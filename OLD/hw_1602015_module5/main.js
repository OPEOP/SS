window.addEventListener('load', function () {
    var nameGroupEl = document.getElementById('nameGroup'),
        showGroupEl = document.getElementById('showGroup'),
        group = new Group('Dp-070 UI'),
        li, i;

    nameGroupEl.innerHTML = group.getNameGroup();

    group.addStudents(['Egor', 'Olya', 'Bogdan', 'Kate', 'Sergey', 'Daniil']);

    for (i = 0; i < group.getStudents().length; i++) {
        li = document.createElement('li');
        li.innerHTML = group.getStudents()[i].getName();
        showGroupEl.appendChild(li);
    }

    group.removeStudent('Egor');

    group.clearGroup();

}, false);