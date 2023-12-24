// enum Courses {
//   TS,
//   JS,
//   // Python,
// }

// function setCoursePrice(course: Courses) {
//   switch (course) {
//     case Courses.TS:
//       return "$29.99";
//     case Courses.JS:
//       return "$25.99";
//     default:
//       courseWarning(course);
//     // throw new Error(`Course ${course} has not been priced`);
//   }
// }

// console.log(setCoursePrice(Courses.TS));
// console.log(setCoursePrice(Courses.JS));

// function courseWarning(course: never): never {
//   throw new Error(`Course ${course} has not been priced`);
// }

enum Products {
  "TS Bootcamp" = 1,
  "JS Bootcamp",
  "Python Bootcamp",
  "CSS Layout",
  "Flexbox Grid",
}

function setCoursePrice(course: Products) {
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

function courseWarning(_course: never): never {
  throw new Error("-------");
}

console.log(setCoursePrice(Products["CSS Layout"]));
