let arr = [1, 3, 5, 7, 9];
let arr2 = ["a", "b", "c", "d", "e"];
let arr3 = [1, "a", 2, "b", 3, "c"];
let arr4 = [1, 3, 1, 4, 6, 12, 4, 6, 9];

console.log({
  arr,
  arr2,
  arr3,
  arr4
});

// console.log(arr.length);
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
// console.log("slicedArr", slicedArr);
// console.log("arr", arr);

// let splicedArr = arr.splice(2, 2);
// console.log("splicedArr", splicedArr);
// console.log("arr", arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log("---------");

// for (let num of arr) {
//   console.log(num);
// }

// console.log("---------");

// for (let index in arr) {
//   console.log(index, arr[index]);
// }

// console.log("---------");

// arr.forEach((num) => {
//   console.log("forEach", num * 2);
// });
// console.log(arr);

// let mulArr = arr.map((num) => {
//   return 2 * num;
// });
// console.log("mulArr", mulArr);
// console.log("arr", arr);

// let filteredArr = arr.filter((num) => {
//   return num <= 5;
// });
// console.log("filteredArr", filteredArr);
// console.log("arr", arr);

// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log("sum", sum);

// let joinedArr = arr2.join("-");
// console.log("joinedArr", joinedArr);

// let isAllChars = arr3.every((char) => {
//   return typeof char === "string";
// });
// console.log("isAllChars", isAllChars);

// let doesCharExist = arr3.some((item) => {
//   return typeof item === "string";
// });
// console.log("doesCharExist", doesCharExist);

// let sortedArr = arr4.toSorted((a, b) => {
//   return a - b;
// });
// console.log("sortedArr", sortedArr);
// console.log("arr4", arr4);

let person = {
  name: "John",
  age: 30,
  address: {
    city: "ABC",
    country: "XYZ"
  },
  hobbies: ["Music", "Games"]
};

let h = "hobbies";

// console.log(person.name, person.address, person[h]);

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

let [a, b, c, , d] = arr;

console.log({
  a,
  b,
  c,
  d
});

let {
  age,
  address: { city },
  hobbies: [x]
} = person;
console.log(age, city, x);
