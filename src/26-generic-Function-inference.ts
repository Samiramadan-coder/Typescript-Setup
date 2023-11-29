type FuncType<T> = (elements: T[]) => number;

let getArrayLength: FuncType<number> = (elements) => {
  return elements.length;
};

// function getArrayLength<T>(elements: T[]): number {
//   return elements.length;
// }

// let testFunc: FuncType<number> = getArrayLength;

// let arrayLength = getArrayLength<number>([1, 2, 3]);
// console.log(arrayLength);
