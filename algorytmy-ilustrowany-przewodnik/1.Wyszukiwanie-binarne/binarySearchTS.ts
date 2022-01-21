function binarySearchTS(list: Array<number>, item: number): number {
  let minIndex: number = 0;
  let maxIndex: number = list.length - 1;
  while (minIndex <= maxIndex) {
    let mid: number = (minIndex + maxIndex) / 2;
    let guess: number = list[mid];
    console.log(
      `minIndex: ${minIndex}, maxIndex: ${maxIndex}, mid: ${mid}, guess: ${guess}`,
    );
    if (guess === item) return mid;
    else if (guess > item) {
      maxIndex = mid - 1;
    } else {
      minIndex = mid - 1;
    }
  }
  return null;
}

const myListTS: number[] = [1, 3, 5, 7, 9];

console.log(binarySearchTS(myListTS, 3));
