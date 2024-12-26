// Завдання на змінні:

//1) Створіть дві змінні a  та b, присвойте їм довільні числові значення. Виведіть у консоль результат їх множення.
const a = 5;
const b = 12;
console.log('Result: ' + (a * b));

// 2) Створіть дві змінні c  та d, присвойте їм довільні числові значення. Виведіть у консоль результат ділення першого на друге.
const c = 1234;
const d = 22.3;
console.log('Result: ' + (c / d));

// 3) Створіть дві змінні e  та f, присвойте їм довільні значення. Виведіть у консоль результат їхньої суми
const e = 78;
const f = 22;
console.log('Result: ' + (e + f));

// 4) Визначте змінні зі значеннями 11, true, "java script", "100"  і виведіть їх в консоль
const numValue = 11;
const isBooleanValue = true;
const strValue = "java script :)";
const str2Value = '100';

console.log("Output:", numValue, isBooleanValue, strValue, str2Value);

// 5) Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num = num++; // ++num
num = num--; // --num


// Завдання на введення/виведення (вводити з допомогою prompt, виводити з допомогою alert):

// 1) Запитати число у користувача, піднести його до квадрату і вивести результат.
const inputNum = Number(prompt("Input the number"));
alert('Result: ' + Math.pow(inputNum, 2));

// 2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
const inpNum1 = +prompt("Input first number");
const inpNum2 = +prompt("Input second number");
const average = (inpNum1 + inpNum2) / 2;
alert('Average: ' + average);

// 3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача. 
const minutes = +prompt("Minutes?");
const seconds = minutes * 60;
alert('In ' + minutes + ' minutes ' + seconds + ' seconds');

// 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Alex!' (згадайте про конкатенацію)
const greeting = 'Hello';
const userName = prompt("What is your name?");
alert(greeting + ', ' + userName + '!');