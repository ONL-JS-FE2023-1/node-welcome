'use strict';

const {MyMath} = require('./MyMath.js');
const {Component} = require('./Component.js');

const sum2n2 = MyMath.sum(2, 2);
console.log(sum2n2);
const multy3n5 = MyMath.multy(3, 5);
console.log(multy3n5);

const component = new Component();
console.log(component.render());

/*
require(path)

HOW REQUIRE WORKS

resolving -> loading -> wrappening -> evaluation -> caching

resolving - шукає той файл, який ми вказали у шляху
loading - читання знайденого файлу
wrappening - огортання в нодівський контекст
evaluation - виконання коду
caching - зберігаємо результат роботи модулю

RESOLVING:
    1) Core modules
    2) File
        *.js || *.json
    3) Directory
        3.1) package.json -> "main"
        3.2) index.js || index.json
    4) node_modules
    5) throw new Error()

*/