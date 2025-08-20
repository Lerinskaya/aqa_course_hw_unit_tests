/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== "string") return false;

  const newWord = word.toLowerCase();
  return newWord.split('').reverse().join('') === newWord;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== "string" || !sentence.length) return [];

  const arr = sentence.split(' ');
  let maxLength = 0;

  arr.forEach(word => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });

  return arr.filter(word => word.length === maxLength);
}

export { isPalindrom, findLongestWords };
