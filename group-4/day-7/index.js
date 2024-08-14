// for (let i = 1; i <= 10; i++) {
//   console.log("3 x", i, "=", 3 * i);
// }

// console.log("===============");

// let j = 1;

// while (j <= 10) {
//   console.log("4 x", j, "=", 4 * j);

//   j++;
// }

// console.log("===============");

// let k = 11;

// do {
//   console.log("6 x", k, "=", 6 * k);

//   k++;
// } while (k <= 10);

// *
// **
// ***
// ****
// *****

// Row
// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   // Col
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }

//   console.log(str);
// }

// function add(n1, n2) {
//   return n1 + n2;
// }

// const hello = function () {
//   console.log("Hello");
// };

// const sub = (n1, n2) => {
//   return n1 - n2;
// };

// console.log(add(1, 2));
// hello();
// console.log(sub(2, 1));

// (() => {
//   console.log("Running");
// })();

// const x = 3;

// const num = x === 3 ? 3 : 4;

// console.log({ num });

var a = 1;
let b = 2;
const c = 3;

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;

  let d = 40;
  const e = 50;
  var f = 60;

  console.log({
    a,
    b,
    c
  });
}

console.log({ f });
console.log(e);
console.log(d);
