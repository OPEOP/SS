// Загрузка модуля fs
var fs = require('fs');

// Считывание содержимого файла в память
fs.readFile('log.txt', function (err, logData) {

    // Если произошла ошибка, то генерируем исключение,
    // и работа приложения завершится.
    if (err) throw err;

    // logData имеет тип Buffer, переводим в строку
    var text = logData.toString();

    var results = {};

    // Разбивка файла по строкам
    var lines = text.split('\n');

    lines.forEach(function(line) {
        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);

        if(!results[letter]) {
            results[letter] = 0;
        }

        results[letter] += parseInt(count);
    });

    console.log(results);
    // { A: 2, B: 14, C: 6 }
});