/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов. + 
  - Пароль не должен состоять из одних пробелов +
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/

function validatePassword(password: string) {
  let lowerCase = false;
  let upperCase = false;
  let number = false;
  password = password.trim();
  if (!password.length){
    return false;
  }else if (password.length < 8){
    return false;
  };

for (let el of password){
  if (el >= 'a' && el <= 'z'){
    lowerCase = true;
  } else if (el >= 'A' && el <= 'Z'){
    upperCase = true;
  } else if (el >= '0' && el <= '9'){
    number = true;
  };
}
return upperCase && lowerCase && number;
}

console.log(validatePassword(" qwe1adsaWE"));
