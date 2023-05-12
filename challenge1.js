/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName() {
  console.log(`Dalia Alrefai`);
}

printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthyear) {
  const currentYear = 2023;
  let age = currentYear - birthyear;
  console.log(`the age is ${age}`);
}
printAge(1977);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  let greet;
  if (language == "en") greet = "Hello";
  else if (language == "es") greet = "Hola";
  else if (language == "fr") greet = "Bonjour";
  else if (language == "tr") greet = "Marhaba";
  else greet = "unknown language!";
  console.log(`${greet} ${name}`);
}

printHello("Dalia", "fr");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

//
function printMax(no1, no2) {
  if (no1 > no2) return no1;
  else if (no2 > no1) return no2;
  else return `they are equal!`;
}

//another solution for returning Max number :
function printMax2(n1, n2) {
  if (n1 !== n2) return Math.max(n1, n2);
  else return `they are equal!`;
}

console.log(printMax(1, 10));
console.log(printMax2(2, 10));
