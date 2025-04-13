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

interface IPerson {
  name: string,
  surname: string,
  experienceYears: number
  getDetaild(): string
}

abstract class Employee implements IPerson{
  protected salary: number = 0
  protected abstract calculateSalary(): void 
  constructor(public name: string, public surname: string, public experienceYears: number){
    this.calculateSalary()
  }
  abstract getDetaild(): string
};

class Manager extends Employee {
  constructor(name:string, surname:string,experinceYears: number, public prefered: 'kanban' | 'scrum' ){
    super(name, surname, experinceYears)
    this.calculateSalary()
  }
  getDetaild(): string {
    return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary.`
  }
  protected calculateSalary(): void {
    this.salary = this.experienceYears * 500
  }
}
 class Developer extends Employee{
  constructor(name: string, surname: string,experinceYears: number, public programingLanguage: 'js' | 'ts' | 'pythin' | 'java'){
    super(name, surname, experinceYears)
    this.calculateSalary()
  }
  getDetaild(): string {
    return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.programingLanguage} and ${this.salary}$ salary.`
  }
  protected calculateSalary(): void {
    this.salary = this.experienceYears * 1000
  }
 }

 const manager = new Manager ('Sasha', 'Zhuk', 10, 'kanban')
 const dev = new Developer('Sasha', 'Zhuk', 5, 'ts')
 console.log(dev.getDetaild())
 console.log(manager.getDetaild())