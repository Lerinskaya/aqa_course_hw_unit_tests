/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique = [];
let resultNull;
let resultT1 = [];
let resultT2 = [];

const competitorPizzasLower = competitorPizzas.map(pizza => pizza.toLowerCase());

for (const pizza of myPizzasT1) {
  if (!competitorPizzasLower.includes(pizza.toLowerCase())) {
    resultT1.push(pizza);
  }
}

resultT1.length ? resultUnique = resultT1 : resultNull = null;

for (const pizza of myPizzasT2) {
  if (!competitorPizzasLower.includes(pizza.toLowerCase())) {
    resultT2.push(pizza);
  }
}

resultT2.length ? resultUnique = resultT1 : resultNull = null;

export { resultNull, resultUnique };
