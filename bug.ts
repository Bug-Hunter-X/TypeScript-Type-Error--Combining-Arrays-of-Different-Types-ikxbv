function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const array1: number[] = [1, 2, 3];
const array2: (number | string)[] = [4, 5, "6"];

const combinedArray = combineArrays(array1, array2); // Type 'string' is not assignable to type 'number'.