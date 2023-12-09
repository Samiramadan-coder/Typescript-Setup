// interface Department {
//   department: string[];
// }

// interface Employee extends Department {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
//   employeeHobies(): string[];
// }

// function getEmployeeInfo(
//   id: number,
//   name: string,
//   hobbies: string[],
//   department: string[]
// ): Employee {
//   return {
//     id,
//     name,
//     hobbies,
//     employeeHobies: () => hobbies,
//     department,
//   };
// }

// let emplyee: Employee = {
//   id: 1,
//   name: "Sami",
//   hobbies: ["Reading", "Walking"],
//   employeeHobies: () => ["Reading", "Walking"],
//   department: ["HTML", "CSS"],
// };

// console.log(
//   getEmployeeInfo(emplyee.id, emplyee.name, emplyee.hobbies, emplyee.department)
// );
