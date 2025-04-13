"use strict";
/*
2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.
*/
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `The vehicle ${this.make} ${this.model} is starting`;
    }
}
/*
3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
*/
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getDetails() {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}
/*
4. Создайте объект класса Car и проверьте работоспособность
*/
const newCar = new Car('BMW', "X7", 2019);
console.log(newCar.start());
console.log(newCar.getDetails());
