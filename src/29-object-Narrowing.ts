type MagazineInfo = {
  name: string;
  author: string;
  sales: number;
  international: boolean;
  price: number;
  publicationYear: number;
};

let magazine: MagazineInfo = {
  name: "Health unleashed",
  author: "Muslim Helalee",
  sales: 1111,
  international: true,
  price: 10.99,
  publicationYear: 3123,
};

// console.log(magazine);

type MagazineName = {
  name: string;
};

let magazineName: MagazineName = magazine;

// console.log(magazineName);
// console.log(magazineName.name);
