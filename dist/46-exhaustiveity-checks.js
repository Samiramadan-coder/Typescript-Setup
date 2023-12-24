"use strict";
var Products;
(function (Products) {
    Products[Products["TS Bootcamp"] = 1] = "TS Bootcamp";
    Products[Products["JS Bootcamp"] = 2] = "JS Bootcamp";
    Products[Products["Python Bootcamp"] = 3] = "Python Bootcamp";
    Products[Products["CSS Layout"] = 4] = "CSS Layout";
    Products[Products["Flexbox Grid"] = 5] = "Flexbox Grid";
})(Products || (Products = {}));
function setCoursePrice(course) {
    switch (course) {
        case Products["TS Bootcamp"]:
            return "$10.99";
        case Products["JS Bootcamp"]:
            return "$9.99";
        case Products["Python Bootcamp"]:
            return "$11.99";
        case Products["CSS Layout"]:
            return "$12.99";
        case Products["Flexbox Grid"]:
            return "$13.99";
        default:
            courseWarning(course);
    }
}
function courseWarning(_course) {
    throw new Error("-------");
}
console.log(setCoursePrice(Products["CSS Layout"]));
