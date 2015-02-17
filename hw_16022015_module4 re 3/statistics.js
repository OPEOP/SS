function Statistics (buttonEl) {
    var countLeftClick = 0,
        countRightClick = 0,
        el = buttonEl;

    function showStatistics () {
        console.log('Left clicks: ' + (countLeftClick - 2) +
                    '; Right clicks: ' + countRightClick + '.');
    }

    function countingClicks (typeClick) {
        return function () {
            if (typeClick === 'dLeft') {
                showStatistics();
            } else if (typeClick === 'left') {
                countLeftClick++;
            } else if (typeClick === 'right') {
                countRightClick++;
            }
        }
    }

    this.start = function () {
        el.addEventListener('dblclick', countingClicks('dLeft'), false);
        el.addEventListener('contextmenu', countingClicks('right'), false);
        el.addEventListener('click', countingClicks('left'), false);
    };

    return this;
}
