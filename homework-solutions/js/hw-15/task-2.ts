// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object>(obj: T, item: unknown) : keyof T | undefined {
   const keys = Object.keys(obj) as (keyof T)[];
   return keys.find((key) => obj[key] === item);
}

console.log(getKeyByValue({
    name: "Tom",
    salary: 100
}, "Tom"));

console.log(getKeyByValue({
    name: "Anna",
    salary: 100
}, "Tom"));