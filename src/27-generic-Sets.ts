// let mySet = new Set([1, 2, 3]);

// mySet.add(4);
// console.log(mySet.has(5));
// console.log(mySet);

// let mixedData: Set<string | number> = new Set(["Hi", 1]);
// let myArr: (string | number)[] = mixedData;
// let mySet2: Set<number> = [1, 2, 3];
// console.log(mixedData.size);

// let myArr: Array<string> = ["a", "b", "c"]
// let boolArray: Array<boolean> = [true, false];
// let myArr: Array<Array<string>> = [
//   ["a", "b"],
//   ["a", "b"],
// ];

// function someArr(): Array<Array<string>> {
//   let numArr = [];
//   numArr.push(["TS"]);
//   return numArr;
// }

// console.log(someArr());

// let someArr: Array<Array<Array<Array<string | number>>>> = [[[[1, 2], ["C#"]]]];

// function returnAr<T>(element: T): T {
//   return element;
// }

// returnAr<string>("HTML");
// returnAr<number>(115);
// returnAr<boolean>(false);

// function returnLength<T>(elements: T[]): number {
//   return elements.length;
// }

// returnLength<string>(["A", "B", "C"]);
// returnLength<number>([1, 2, 3]);
// returnLength<boolean>([true, false]);

// returnLength<string | number>(["A", "B", "C", 1, 2, 3]);
// returnLength<number>([1, 2, 3]);
// returnLength<boolean | number>([true, false, 1, 2]);

// function myStr<T>(elements: Array<T>): T {
//   return elements[0];
// }

// myStr<string>(["A", "B", "C", "D"]);

// function myStr<T>(element: Array<T>): T {
//   return element[element.length - 1];
// }

// console.log(myStr<string>(["Hi"]));
// console.log(myStr<number>([1]));
// console.log(myStr<boolean>([true]));

// type AirConditioner<T> = {
//   winter: T;
//   summer: T;
// };

// const myAc: AirConditioner<string> = {
//   winter: "Warm",
//   summer: "Cold",
// };

// type Smartphone<T1, T2, T3> = {
//   manufacture: T1;
//   model: T2;
//   rating: T3;
// };

// const myPhone: Smartphone<string, string, number> = {
//   manufacture: "Samsung",
//   model: "J6+",
//   rating: 3.5,
// };

// console.log(myPhone);
