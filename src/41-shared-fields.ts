// type Product = {
//   name: string;
//   price: number;
//   sales: number;
//   availability: string;
//   category: string;
// };

// type Course = {
//   name: string;
//   price: number;
//   sales: number;
//   released: boolean;
//   rating: number;
// };

// type OnlineCourse = Product | Course;

// const course: OnlineCourse = {
//   name: "JS",
//   price: 10.99,
//   sales: 2000,
//   released: true,
//   rating: 4.6,
//   availability: "Available",
//   category: "Web Dev",
// };

// type DigitalProduct = {
//   name: string;
//   price: number;
//   sales: number;
// } & (
//   | { availability: string; category: string }
//   | { released: boolean; rating: number }
// );

// type OnlineCourse = DigitalProduct;

// const course: OnlineCourse = {
//   name: "JS",
//   price: 10.99,
//   sales: 2000,
//   released: true,
//   rating: 4.6,

//   availability: "Available",
//   category: "Web Dev",
// };

// console.log(course);
