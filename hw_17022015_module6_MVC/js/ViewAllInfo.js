function ViewAllInfo (group) {
    var printButton = document.getElementById('printButton'),
        closeButton = document.getElementById('closeButton'),
        output = document.getElementById('view'),
        display = document.getElementById('display');

    this.init = function () {
        addEvent(printButton, 'click', print);
        addEvent(closeButton, 'click', close);
    };

    function addEvent (elm, typeEvent, fn) {
        elm.addEventListener(typeEvent, fn, false);
    }

    function print () {       
        var personData,
            li, key;

        personData = group.getLastPerson();

        for (key in personData) {
            li = document.createElement('li');
            li.innerHTML = '<dl><dt>' + key + ': </dt><dd>' + personData[key] + '</dd></dl>';
            output.appendChild(li);
        }

        printButton.setAttribute('disabled', 'disabled');
        display.style.display = 'block';        
    }

    function close () {
        var i;

        display.style.display = 'none';
        printButton.removeAttribute('disabled');

        output.innerHTML = ''; //clear list in html

        // for (i = output.childNodes.length - 1; i >= 0; i--) {    //clear list in html, begin with end list ul
        //     output.removeChild(output.childNodes[i]);
        // }
    }

    return this;
}