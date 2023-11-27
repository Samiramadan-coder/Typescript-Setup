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

function boolInverted(arg: boolean): boolean {
  return !arg;
}
