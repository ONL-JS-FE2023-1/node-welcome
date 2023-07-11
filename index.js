/*

Кожна функція у ноді буде представлена у 3-х варіантах:

1. звичайний readFile - він нам не підходить
2. readFileAsync - він теоретично нам підходить, але з ним не зручно
3. readFile на промісах - він нам підходить

*/


/*

1. readFile - читає вміст файлу
2. writeFile - записувати зміни у файл (файл перезаписується!!!)
3. appendFile - дописує зміни

*/

const fs = require('fs').promises;

const p = fs.readFile('./Folder/text.txt', 'utf-8'); // 1
p.then((data) => {
    const newData = `OLD data: ${data} and NEW data: 'Hello!!!!'`;
    //fs.writeFile('./newFile.txt', newData, 'utf-8'); // 2
    fs.appendFile('./newFile.txt', newData, 'utf-8');
})


// Задача: маємо декілька текстових файлів, потрібно об'єднати їх

fs.readFile('./file1.txt', 'utf-8')
.then((dataFromFile1) => { // дані з файлу 1
    fs.readFile('./file2.txt', 'utf-8')
    .then((dataFromFile2) => { //дані з файлу 2
        const content = `${dataFromFile1} ${dataFromFile2}`;
        fs.appendFile('./file3.txt', content, 'utf-8');
    })
})