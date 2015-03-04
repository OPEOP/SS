function Statistics (buttonEl) {
    var countLeftClick = 0,
        countRightClick = 0,
        el = buttonEl;

    this.start = function () {
        el.addEventListener('dblclick', countingClicks('dLeft'), false);
        el.addEventListener('contextmenu', countingClicks('right'), false);
        el.addEventListener('click', countingClicks('left'), false);
    };

    function countingClicks (typeClick) {
        return function () {
            if (typeClick === 'dLeft') {
                countLeftClick = countLeftClick - 2; // delete double click out of statistics clicks
                showStatistics();
            } else if (typeClick === 'left') {
                countLeftClick++;
            } else if (typeClick === 'right') {
                countRightClick++;
            }
        }
    }

    function showStatistics () {
        console.log('Left clicks: ' + countLeftClick +
                    '; Right clicks: ' + countRightClick + '.');
    }

    return this;
}
