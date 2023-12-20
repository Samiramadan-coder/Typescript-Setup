// And
// console.log("" && 5);
// console.log(0 && 5);
// console.log(false && 5);
// console.log(null && 5);
// console.log(undefined && 5);
// console.log(NaN && 5);

// console.log("hi" && "hey");
// console.log("hi" && 0);
// console.log(false && 0);

// OR
// console.log("" || 5);
// console.log(0 || 5);
// console.log(false || 5);
// console.log(null || 5);
// console.log(undefined || 5);
// console.log(NaN || 5);

// console.log("hi" || "hey");
// console.log("hi" || 0);
// -> if the both values are false it will return the second value
// console.log(false || 0);

// ?? Nullish
// console.log("" ?? 5);
// console.log(0 ?? 5);
// console.log(false ?? 5);
// console.log(null ?? 5);
// console.log(undefined ?? 5);
// console.log(NaN ?? 5);

// console.log("hi" ?? "hey");
// console.log("hi" ?? 0);
// console.log(false ?? 0);

// let favMovie: unknown = "The good the bad and the ugly";
// let someMovie: any = favMovie;
// let movieTicketPrice = someMovie;

// const favSong: unknown = "Un Dia";
// const songName: string = typeof favSong === "string" ? favSong : "";
// console.log(songName);

// const productPrice: /*any*/ number = 10.99;
// const courseName: string = productPrice; // Type error

// type Product = {
//   /**
//    * When using index signature the type of the following
//    * props should have the samy type
//    */
//   [price: string]: number;
//   name: string; // Type error
// };

// const course: Product = {
//   price: 10.99;
//   name: "TS Bootcamp"
// }

// type Product = {
//   [name: string]: number | undefined;
// };

// const product: Product = {
//   TS: 10.99,
//   JS: 9.99,
//   Remix: undefined,
// };

// type Product = {
//   [price: string]: number;
//   noOfStudents: number;
// };

// const product: Product = {
//   FlexBox: 10.99,
//   noOfStudents: 4200,
// };

// console.log(product);

// type Product = {
//   name: string;
//   prices: Array<number>;
// };

// type ProductPrices = Product["prices"];

// const productPrices: ProductPrices = [10.99, 9.99];
