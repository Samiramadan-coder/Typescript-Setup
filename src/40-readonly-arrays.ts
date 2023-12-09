// const numbers: number[] = [1, 4, 5, 3, 2];

// numbers.push(6);
// numbers.sort();

// const nums = numbers; // reference data type
// nums.push(7);

// console.log("Copy Array:", nums);
// console.log("Original Array:", numbers);

// Storing by value
// let myName = "Muslim";
// let newName = myName;
// myName = "John";

// console.log("Original Name", myName);
// console.log("New Name:", newName);

// Storing by reference

// const originalObj = { name: "TS" };

// const copyObj = originalObj;
// copyObj.name = "JS";

// console.log(originalObj);
// console.log(copyObj);

const numbers: ReadonlyArray<number> = [5, 2, 3, 1];
// numbers.sort();
// numbers.push();

console.log(numbers.indexOf(1));
console.log(numbers.length);

const strings: ReadonlyArray<string> = ["Hi", "Hey"];
