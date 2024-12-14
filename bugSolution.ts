function combineArrays(arr1: number[], arr2: (number | string)[]): number[] {
  return [...arr1, ...arr2.map(item => Number(item))];
}

const array1: number[] = [1, 2, 3];
const array2: (number | string)[] = [4, 5, "6"];

const combinedArray = combineArrays(array1, array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]