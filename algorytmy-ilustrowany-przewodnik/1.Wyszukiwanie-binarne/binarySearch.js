// 1. ALGORYTM WYSZUKIWANIA BINARNEGO - na wejście podaje się posortowaną listę elementów.
// Jeśli lista ta zawiera szukany element, algorytm zwraca informację o jego położeniu.
// W przeciwnym przypadku zwracana jest wartość null.
// Wyszukiwanie binarne polega na znajdowaniu środka listy elementów i eliminację połowy elementów,
// które na pewno nie posiadają szukanego elementu

function binarySearch(list, item) {
  let minIndex = 0;
  let maxIndex = list.length - 1;
  while (minIndex <= maxIndex) {
    let mid = Math.floor((maxIndex - minIndex) / 2);
    let guess = list[mid];
    console.log(
      `minIndex: ${minIndex}, maxIndex: ${maxIndex}, mid: ${mid}, guess: ${guess}`,
    );
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      maxIndex = mid - 1;
    } else {
      minIndex = mid - 1;
    }
  }
  return null;
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
