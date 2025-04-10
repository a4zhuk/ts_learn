"use strict";
/*
Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson, и конкретные классы Manager и Developer.
  - Интерфейс IPerson должен содержать:
      Стринговые поля: name, surname
      Намберовые поля: experienceYears
      Метод, возвращающий строку: getDetails().

  - Абстрактный класс Employee должен:
      Имплементировать интерфейс IPerson.
      Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
      Содержать защищенный (protected) абстрактный метод: calculateSalary().,
        который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
      Метод calculateSalary() должен быть использован в конструкторе
  
  - Конкретные классы Manager и Developer должны:
      Наследоваться от Employee.
      Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
      Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
      Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
      Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
      Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
        'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
*/
class Employee {
    constructor(name, surname, experienceYears) {
        this.name = name;
        this.surname = surname;
        this.experienceYears = experienceYears;
        this.salary = 0;
        this.calculateSalary();
    }
}
;
class Manager extends Employee {
    constructor(name, surname, experinceYears, prefered) {
        super(name, surname, experinceYears);
        this.prefered = prefered;
        this.calculateSalary();
    }
    getDetaild() {
        return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary.`;
    }
    calculateSalary() {
        this.salary = this.experienceYears * 500;
    }
}
class Developer extends Employee {
    constructor(name, surname, experinceYears, programingLanguage) {
        super(name, surname, experinceYears);
        this.programingLanguage = programingLanguage;
        this.calculateSalary();
    }
    getDetaild() {
        return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.programingLanguage} and ${this.salary}$ salary.`;
    }
    calculateSalary() {
        this.salary = this.experienceYears * 1000;
    }
}
const manager = new Manager('Sasha', 'Zhuk', 10, 'kanban');
const dev = new Developer('Sasha', 'Zhuk', 5, 'ts');
console.log(dev.getDetaild());
console.log(manager.getDetaild());
