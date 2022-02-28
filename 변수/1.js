// const person = {
//   // 선언과 동시에 할당
//   name: "steadily",
//   age: "27",
// };

// person.name = "worked";
// person.age = "26";

// console.log(person);
console.log(sum()); // ReferenceError: Cannot access 'sum' before initialization
const sum = function () {
  return 1 + 2;
};
