enum Employee {
  Name = "John Smith",
  Job = "Frontend Developer",
}

// console.log(Employee);

function getEmployeeInfo(employee: Employee): Employee {
  return employee;
}

console.log(getEmployeeInfo(Employee.Name));
console.log(getEmployeeInfo(Employee.Job));
