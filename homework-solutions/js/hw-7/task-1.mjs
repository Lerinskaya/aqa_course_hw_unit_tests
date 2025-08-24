/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...args) {
  return args.flat(Infinity);
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  const arr = sentence.trim().split(/\s+/);
  const result = [];

  arr.forEach( (word, i) => {
    if (i === 0) {
      result.push(word.toLowerCase());
    } else {
      let newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      result.push(newWord);
    }
  });

  return result.join('_');
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
 
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

export { mergeArrays, fibonacci, devideBy };
