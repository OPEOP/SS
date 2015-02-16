function Statistics (ObjectTimer, _button_el) {
    var objectTimer = ObjectTimer,
        statisticsThis = this;
        el = _button_el;        

    this.showStatistics = function (objTimer) {        
        return function () {
            console.log('Left clicks: ' + (objTimer.getCountLeftClick() - 2) + '; Right clicks: ' + objTimer.getCountRightClick() + '.');          
        }     
    }

    this.setListener = function () {
        el.addEventListener('dblclick', statisticsThis.showStatistics(objectTimer), false);
    };

    return this;
}
