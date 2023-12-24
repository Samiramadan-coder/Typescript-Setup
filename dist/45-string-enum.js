"use strict";
var Employee;
(function (Employee) {
    Employee["Name"] = "John Smith";
    Employee["Job"] = "Frontend Developer";
})(Employee || (Employee = {}));
function getEmployeeInfo(employee) {
    return employee;
}
console.log(getEmployeeInfo(Employee.Name));
console.log(getEmployeeInfo(Employee.Job));
