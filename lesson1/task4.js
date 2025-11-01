// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

let minutes = prompt("Введіть кількість хвилин:");

let hours = Math.floor(minutes / 60); 
let minutesLeft = minutes % 60;

let formattedHours = hours.toString().padStart(2, '0');
let formattedMinutes = minutesLeft.toString().padStart(2, '0');

console.log(`${formattedHours}:${formattedMinutes}`);