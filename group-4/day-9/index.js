// Includes, Find, Index Of
// Truthy, Falsy
// Promise - Then, Catch, Finally
// Async, Await

// let arr = [1, 2, 3, 4, 5];

// let doesIncludes = arr.includes(100);
// console.log(doesIncludes);

// (num) => {
//   console.log();

//   return num > 3
// }
// (num) => num > 3
// let foundNumber = arr.find((num) => num > 3);
// console.log(foundNumber);

// let index = arr.indexOf(6);
// console.log(index);

// Truthy values
// 1, "abc", [], {}, true, -1
// Falsy values
// 0, "", false, undefined, null

// if ("abc") {
//   console.log("Hello");
// }

// if (undefined) {
//   console.log("World");
// }

// let middleNames = ["A", undefined, undefined, "D", "E"];

// middleNames.forEach((middleName) => {
//   if (!middleName) {
//     console.log("-");
//   }
// });

// middleNames[0] && console.log("Hello");

console.log("Hi");
console.log("Hello");

let url = "https://jsonplaceholder.typicode.com/photos";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // let obj = {};

    // data.forEach((item) => {
    //   if (obj[item.albumId]) {
    //     obj[item.albumId]++;
    //   } else {
    //     obj[item.albumId] = 1;
    //   }
    // });

    // console.log(obj);

    let obj = data.reduce((acc, curr) => {
      if (!acc[curr.albumId]) {
        acc[curr.albumId] = 1;

        return acc;
      }

      acc[curr.albumId]++;
      return acc;
    }, {});

    console.log(obj);
  })
  .catch((error) => console.log("error occured", error))
  .finally(() => console.log("Finally"));

let arr2 = [
  { id: 1, name: "ABC" },
  { id: 1, name: "BCD" },
  { id: 2, name: "ksjg" },
  { id: 3, name: "sdfho" }
];

// {
//   1: 50,
//   2: 50,
//   3: 50,
//   ...
// }
