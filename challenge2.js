/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
let name = "Hamza";

function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Dalia");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  //let result = n % 2;
  let result = n % 2;
  return Boolean(result);
}
console.log(isOdd(9));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  let result = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2) {
      result++;
    }
  } //for
  return result;
  //console.log(`there are ${result} odd numbers in ${n}`);
}
console.log(`this is oddsSmallerThan ${oddsSmallerThan(15)}`);

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  let result = 0;
  if (isOdd(n)) return Math.pow(n, 2);
  else return n * 2;
} // squareOrDouble

console.log(squareOrDouble(9));
