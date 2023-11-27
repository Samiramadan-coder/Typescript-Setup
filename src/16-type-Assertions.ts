// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };

// const employee: Employee = {
//   id: 1,
//   name: "Sami",
//   department: "Design",
// };

// const hiredEmloyee = JSON.stringify(employee);

// function getEmployeeInfo(employeeObject: string) {
//   // return JSON.parse(employeeObject);

//   // Old Method
//   // return <Employee>JSON.parse(employeeObject);

//   // New Method
//   return JSON.parse(employeeObject) as Employee;
// }

// console.log(getEmployeeInfo(hiredEmloyee).id);
// console.log(getEmployeeInfo(hiredEmloyee).name);
// console.log(getEmployeeInfo(hiredEmloyee).department);
