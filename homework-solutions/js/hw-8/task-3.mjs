/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const arrNew = [...numbers].sort((a, b) => a - b);
  let missedNum = arrNew.find((number, i) => arrNew[i + 1] - number > 1);

  switch(true) {
    case missedNum !== undefined:
      return missedNum + 1;
    case arrNew[0] !== 1:
      return 1;
    default:
      return arrNew[arrNew.length - 1] + 1;
  }
}

export { findMissingNumber };
