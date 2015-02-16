function Statistics () {

    this.showStatistics = function (countLeftClick, countRightClick) {
        console.log('Left clicks: ' + countLeftClick + '; Right clicks: ' + countRightClick + '.');
    }

    this.setListener = function () {
        button_el.addEventListener('dblclick', this.showStatistics('right'), false);
    };
}
