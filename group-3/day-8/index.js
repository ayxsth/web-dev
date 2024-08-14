let arr = [1, 3, 5, 7, 9];
let arr2 = ["a", "b", "c", "d", "e"];
let arr3 = [1, "a", 2, "b", 3, "c"];
let arr4 = [2, 5, 1, 4, 7, 4, 12, 4, 0];

console.log({
  arr,
  arr2,
  arr3,
  arr4
});

// console.log(arr[0], arr[2], arr[arr.length - 1]);

// arr.push(11);
// console.log("push", arr);

// arr.pop();
// console.log("pop", arr);

// arr.unshift(0);
// console.log("unshift", arr);

// arr.shift();
// console.log("shift", arr);

// let slicedArr = arr.slice(2, 4);
// console.log("slice", slicedArr);
// console.log("original", arr);

// let splicedArr = arr.splice(2, 2);
// console.log("splice", splicedArr);
// console.log("original", arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log("----------");

// for (let item of arr) {
//   console.log(item);
// }

// console.log("----------");

// for (let index in arr) {
//   console.log(index, arr[index]);
// }

// console.log("----------");

// arr.forEach((item, index) => {
//   console.log(index, item * 2);
// });

// console.log("----------");

// let mappedArr = arr.map((item) => {
//   return item * 2;
// });

// console.log("mappedArr", mappedArr);

// let filteredArr = arr3.filter((item) => {
//   return typeof item === "string";
// });

// console.log("filteredArr", filteredArr);

// let sortedArr = arr4.toSorted((a, b) => {
//   return a - b;
// });
// console.log("sortedArr", sortedArr);
// console.log("original", arr4);

// // let sum = 0;

// // for (let item of arr) {
// //   sum += item;
// // }

// // console.log(sum);

// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

let person = {
  name: "John",
  age: 30,
  isMarried: false,
  address: {
    city: "New York",
    country: "USA"
  },
  friends: ["Jane", "Jack", "James"]
};

// let x = "address";

// console.log(person.name, person.friends[0], person[x]);

let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a, b, c);

let [x, y, z, _, n] = arr;

console.log(x, y, z, n);

let {
  name: fullName,
  age,
  address: { country },
  friends: [f1]
} = person;
console.log(fullName, age, country, f1);
