// let product = {
//   name: "TS",
//   price: 10.99,
// };

// let courseName = product.name;
// let courseName = product["name"];

// type Product = {
//   name: string;
//   price: number;
// };

// type CourseName = Product["name"];
// const courseName: CourseName = "TS";
// console.log(courseName);

// type Product = {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// };

// function promoteProduct(
//   name: string,
//   price: number,
//   moreInfo: Product["moreInfo"]
// ): Product {
//   return {
//     name,
//     price,
//     moreInfo,
//   };
// }

// let courseInfo = promoteProduct("TS", 10.99, {
//   released: true,
//   beginnerFriendly: true,
//   level: "Advanced",
// });

// console.log(courseInfo);

// interface Product {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// }

// let productName: Product["name"] = "TS";
// let productPrice: Product["price"] = 10.99;
