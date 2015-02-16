window.onload = function () {

    var button_el = document.getElementById('buttonChange'),
        display_el = document.getElementById('display'),
        timer = new Timer(button_el, display_el);
        statistics = new Statistics(timer, button_el);
    
    timer.setListeners();
    statistics.setListener();    
};