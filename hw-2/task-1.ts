/*
1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
*/
interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
};

const QA: IEmployee ={
  name: "Sasha",
  salary: 100500,
  isManager: false
};
/*
2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
*/
type EmployeeKeys = keyof IEmployee;
/*
3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
*/
type QaKeys = keyof typeof QA
/*
4. Создайте тип UserType из объекта QA (используйте typeof)
*/
type UserType = typeof QA
/*
5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
*/
type IPartialEmployee= Partial<IEmployee>
/*
6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
*/
type NameAndSalary = Pick<IEmployee, 'name' | 'salary' >
/*
7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
*/
type WithoutIsManager = Omit<IEmployee, "isManager" >
/*
8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
*/
type ReadonlyIEmployee= Readonly <IEmployee>
/*
9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
*/
type UsingRecord = Record <string, keyof typeof QA>
/*
10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
*/
    function wrapInArray <T>(value:T): T[]{
      const arr =[]
      arr.push(value)
      return arr
      // можно еще прописать просто return [value] и убрать 51-53 строки
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']
/*
11. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).
*/
    function getLastItem<T> (arr: T[]): T{
      if (arr.length = 0){
        throw new Error ('Empty array')
    };
      return (arr[arr.length - 1]);
    };

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'

