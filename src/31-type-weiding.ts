// // let product = "TS";
// // product = "JS";

// // let price = 10.99;
// // price = 9.99;

// // type Product = {
// //   name: "TS";
// //   price: number;
// // };

// // function courseName(course: Product) {
// //   return course.name;
// // }

// // const course = {
// //   name: "TS" as const,
// //   price: 10.99,
// // };

// // console.log(courseName(course));

// // function productView(arg: number | true): boolean {
// //   return (typeof arg === "number" && arg > 0) || arg === true;
// // }

// // function arrayOrItem<T>(elements: Array<T> | T): T {
// //   if (Array.isArray(elements)) {
// //     return elements[0];
// //   }
// //   return elements;
// // }

// // const arrayOrItem = <T>(elements: Array<T> | T): T =>
// //   Array.isArray(elements) ? elements[0] : elements;

// // type Employee = {
// //   name: string;
// // };

// // const myFunc = (
// //   employeeOrEmployees: Employee | Employee[]
// // ): string | number => {
// //   if (Array.isArray(employeeOrEmployees)) {
// //     return employeeOrEmployees.length;
// //   } else {
// //     return employeeOrEmployees.name;
// //   }
// // };

// type Employee = {
//   name: string;
//   positionTitle: string;
//   age: number;
//   hired: boolean;
// };

// const newHiring: Employee = {
//   name: "Sami",
//   positionTitle: "Sr. Developer",
//   age: 33,
//   hired: true,
// };

// type EmployeeName = {
//   name: string;
// };

// const employeeName: EmployeeName = newHiring;

// console.log(employeeName);
