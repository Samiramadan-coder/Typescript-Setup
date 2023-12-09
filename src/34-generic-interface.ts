// interface Product<T> {
//   price: T;
// }

// const product1: Product<string> = {
//   price: "$10.99",
// };

// const product2: Product<number> = {
//   price: 10.99,
// };

// interface Product<T1, T2, T3> {
//   name: T1;
//   price: T2;
//   availability: T3;
// }

// const course: Product<string, number, boolean> = {
//   name: "TS",
//   price: 10.99,
//   availability: true,
// };

// interface Product {
//   readonly id: number;
//   name: string;
//   category: string;
// }

// const getProductInfo = (
//   id: number,
//   name: string,
//   category: string
// ): Product => ({
//   id,
//   name,
//   category,
// });

// let product: Product = getProductInfo(1, "Quick", "Tech");

// console.log(product);

// type Cat = {
//   name: string;
// };

// interface Dog {
//   name: string;
// }

// const cat: Cat = { name: "George" };
// const dog: Dog = cat;

// console.log(dog.name);

// type ProductName = {
//   name: string;
// };

// interface ProductPrice extends ProductName {
//   price: number;
// }

// const product: ProductPrice = {
//   name: "TS",
//   price: 9.99,
// };
