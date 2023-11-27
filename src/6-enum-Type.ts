// // Numeric Enums
// const enum RollNumbers {
//   john = 1,
//   kelly,
//   sandra,
//   joseph,
//   samantha,
// }

// let studentRollNumber1: RollNumbers = RollNumbers.sandra;
// let studentRollNumber2: RollNumbers = RollNumbers.samantha;

// // console.log(studentRollNumber1, studentRollNumber2);

// const enum StudentDetails {
//   ID = 1,
//   Name = "John",
//   Major = "Arts",
// }

// let studentID: StudentDetails = StudentDetails.ID;
// let studentName: StudentDetails = StudentDetails.Name;
// let studentMajor: StudentDetails = StudentDetails.Major;
// console.log(studentName);

enum ProductNames {
  Product1 = "LapTop",
  Product2 = "Mouse",
  Product3 = "keyboard",
}

enum ProductIds {
  LapTop = 1,
  Mouse,
  keyboard,
}

enum FavouriteProduct {
  Name = ProductNames.Product1,
  ID = ProductIds.LapTop,
}

console.log(FavouriteProduct.Name);
console.log(FavouriteProduct.ID);
