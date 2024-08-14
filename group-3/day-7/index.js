// let num1 = 10;
// let num2 = 20;
// let operator = "-";

// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   default:
//     console.log("Invalid operator");
// }

// // For
// for (let i = 1; i <= 20; i++) {
//   console.log("4 x", i, "=", 4 * i);
// }

// // While
// let i = 1;

// while (i <= 10) {
//   console.log("6 x", i, "=", 6 * i);

//   i++;
// }

// // Do While
// let j = 11;

// do {
//   console.log("8 x", j, "=", 8 * j);

//   j++;
// } while (j <= 10);

// *
// **
// ***
// ****
// *****

// // Row
// for (let i = 1; i <= 5; i++) {
//   let star = "";

//   // Col
//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }

//   console.log(star);
// }

function generatePattern() {
  // Row
  for (let i = 1; i <= 5; i++) {
    let star = "";

    // Col
    for (let j = 1; j <= i; j++) {
      star += "*";
    }

    console.log(star);
  }
}

// generatePattern(); // Call or invoke the function

function generatePattern2(len) {
  // Row
  for (let i = 1; i <= len; i++) {
    let star = "";

    // Col
    for (let j = 1; j <= i; j++) {
      star += "*";
    }

    console.log(star);
  }
}

// generatePattern2(10);
// generatePattern2(20);

/**
 * Sums two numbers
 *
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
const add = (n1, n2) => {
  return n1 + n2;
};

console.log("add", add(4, 5));

// IIFE - Immediately Invoked Function Expression
((n1, n2) => {
  console.log("sub", n1 - n2);
})(5, 2);

function mul(n1, n2, fn) {
  const product = n1 * n2;

  fn(product);
}

// Anonymous function pass
mul(4, 10, (product) => {
  console.log("product", product);
});

function log(product) {
  console.log("product", product);
}

// Named function pass
mul(5, 10, log);
