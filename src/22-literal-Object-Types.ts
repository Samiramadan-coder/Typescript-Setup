// type Student = { fullName: string };

// function studentDB({ fullName }: Student): string {
//   return fullName;
// }

// const student: Student = { fullName: "Mark Smith" };

// console.log(studentDB({ fullName: "Mark Smith" }));
// console.log(studentDB({ fullName: "Jane williams" }));

// function productId(): number {
//   return 112233;
// }

// let id: number = productId(); // type error

// let id: string | number = productId(); // 112233

// let id: number | string = productId(); // correct

// type BoolValues = true | false;

// type Score = number;

// let avgScore: number = 11.5;

// let score: Score = avgScore; // type error

// function courseName(): string {
//   return "TS";
// }

// let typeScript: "TS" = courseName(); // type error

// type BookType = "A" | "B" | "C";

// let favBook: BookType = "B";

// let bool: true /* Literal type */ = false;

// function addition(n: number): number {
//   return n + n;
// }

// const result: (n: number) => string = addition; // Type error

// console.log(result(11));

// function myStr(arg: number | boolean | string): string {
//   return arg.toString();
// }

// function boolInverted(arg: boolean): boolean {
//   return !arg;
// }

// function doSomething(
//   num: number,
//   operation: "add" | "subtract" | "do nothing"
// ): number {
//   if (operation === "add") return num + 1;
//   if (operation === "subtract") return num - 1;
//   return num;
// }

// function someFunc() {}
// const myNum: number = someFunc(); // Type error

// function callAnotherFunc(func: (price: number, course: string) => string) {
//   return func(10.99, "TS");
// }

// let caller = callAnotherFunc((price, course) => `${price} - ${course}`);

// console.log(caller);

// type SomeFunc = () => string;

// const result: SomeFunc = () => "TS Bootcamp";

// console.log(result());

// type Employee = {
//   name: string;
//   age: number;
//   job: string;
// };

// const emplyee: Employee = {
//   name: "Sami",
//   age: 33,
//   job: "Web Developer",
// };

// console.log(emplyee);

// type OnlineCourse = {
//   name: string;
//   platform: string;
//   features: string[];
//   "meta-data": {
//     published: boolean;
//   };
// };

// let myCourse: OnlineCourse = {
//   name: "TS Bootcamp",
//   platform: "Udemy",
//   features: ["A", "B", "C", "D"],
//   "meta-data": {
//     published: true,
//   },
// };

// console.log(myCourse["meta-data"]["published"]);
// console.log(myCourse["meta-data"].published);

// type Product = {
//   name: string;
//   publishedStatus?: boolean;
// };

// const product1: Product = { name: "TS Bootcamp" };
// const product2: Product = { name: "TS Bootcamp", publishedStatus: true };

// type Course = {
//   name: string;
//   price: number;
//   released?: boolean;
// };

// const onlineCourse: Course = { name: "TS Bootcamp", price: 10.99 };
// const product: Course = { ...onlineCourse /* spreed opt */, released: true };
// console.log(product);

// type Product = {
//   // holidaySales: () => string;
//   holidaySales(): string;
// };

// const product: Product = {
//   holidaySales: () => "Sale is On",
// };

// function getName(arg: { name: string }): string {
//   return arg.name;
// }

// function getName({
//   name,
// }: /* object destructuring */ {
//   name: string;
// }): string {
//   return name;
// }

// console.log(getName({ name: "Sami" }));

// function isOnline({ online }: { online: boolean }): boolean {
//   return online;
// }

// console.log(isOnline({ online: false }));
// console.log(isOnline({ online: true }));

// let vague: number | undefined = null; // TE

// let vague1: boolean | undefined = true ? true : undefined;
// let vague2: boolean = vague1; // TE

// let vague: string | undefined = undefined;

// let vague1: boolean | undefined = true ? true : undefined;
// let vague2: boolean;

// if (vague1 === vague2) {
//   vague2 = false;
// } else {
//   vague2 = true;
// }

// function nullNarrow(arg: string | undefined): number | undefined {
//   if (typeof arg === "undefined" || isNaN(parseInt(arg))) {
//     return undefined;
//   }

//   return parseInt(arg);
// }
