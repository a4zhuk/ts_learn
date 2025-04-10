"use strict";
;
const QA = {
    name: "Sasha",
    salary: 100500,
    isManager: false
};
/*
10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
*/
function wrapInArray(value) {
    const arr = [];
    arr.push(value);
    return arr;
    // можно еще прописать просто return [value] и убрать 51-53 строки
}
const numberArray = wrapInArray(5); // [5]
const stringArray = wrapInArray('Hello'); // ['Hello']
/*
11. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).
*/
function getLastItem(arr) {
    if (arr.length = 0) {
        throw new Error('Empty array');
    }
    ;
    return (arr[arr.length - 1]);
}
;
console.log(getLastItem([1, 2, 3, 4])); // 4
console.log(getLastItem(['a', 'b', 'c'])); // 'c'
