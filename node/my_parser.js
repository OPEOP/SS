// Подключение нового файла parser.js
var Parser = require('./parser');

// Загрузка модуля fs
var fs = require('fs');

// Считывание содержимого файла в память
fs.readFile('example_log.txt', function (err, logData) {

    // Если произошла ошибка, то генерируем исключение,
    // и работа приложения завершается.
    if (err) throw err;

    // logData имеет тип Buffer, переводим в строку
    var text = logData.toString();

    // Создаём экземпляр Parser
    var parser = new Parser();

    // вызываем функцию парсинга
    console.log(parser.parse(text));
    // { A: 2, B: 14, C: 6 }
});