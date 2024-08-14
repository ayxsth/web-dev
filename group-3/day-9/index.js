// Includes, Find, Index Of, Every, Some
// Truthy, Falsy
// Promise - Then, Catch, Finally
// Async, Await

// let arr = [1, 2, 4, 1, 3, 6, -2, -4, -6, -5];

// console.log({ arr });

// let doesIncludes = arr.includes(3);
// console.log("doesIncludes", doesIncludes);

// let foundNumber = arr.find((num) => {
//   return num === 100;
// });
// console.log("foundNumber", foundNumber);

// let index = arr.indexOf(9);
// console.log("index", index);

// let isAllPositive = arr.every((item) => item > 0);
// console.log("isAllPositive", isAllPositive);

// let isSomePositive = arr.some((item) => item > 0);
// console.log("isSomePositive", isSomePositive);

// Truthy - 1, "abc", [], {}, true, -1
// Falsy - 0, "", false

// if (!1) {
//   console.log("Hello");
// }

let url = "https://jsonplaceholder.typicode.com/photos";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let count = data.reduce((acc, curr) => {
      if (!acc[curr.albumId]) {
        acc[curr.albumId] = 1;

        return acc;
      }

      acc[curr.albumId]++;

      return acc;
    }, {});

    console.log(count);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("finally");
  });

// console.log({ response });
