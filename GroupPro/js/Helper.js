function Helper () {

}

Helper.addClass = function (className, el) {
    var classesOfEl = el.className,
        reg = new RegExp( "\\s?\\b"+className+"\\b", "g" );

    if (!reg.test(classesOfEl)) {
        if (classesOfEl !== '') {
            el.className = classesOfEl + ' ' + className;
        } else {
            el.className = classesOfEl + className;
        }
    }
};

Helper.removeClass = function removeClassFromElements (className, el) {
    var classesOfEl, reg, i;

    if (el.length) {
        for (i = el.length - 1; i >= 0; i--) {
            removeClassFromElements(className, el[i]);
        }
    } else {
        classesOfEl = el.className;
        reg = new RegExp( "\\s?\\b" + className + "\\b", "g" );

        classesOfEl = classesOfEl.replace(reg, '');

        el.className = classesOfEl;
    }
};