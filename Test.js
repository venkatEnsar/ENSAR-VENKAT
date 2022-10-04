// objects-------
let firstName = {
  name: "venkat",
  gender: "male",
};
console.log(firstName);

// array---------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[3] = 7;
console.log(numbers[3]);

// functions-------
function greet(name, lastname) {
  console.log("hello" + "  " + name + lastname);
}
greet("venkat", "sai");

// --------calculating value
function add(num) {
  return num + num;
}
console.log(add(2));

// increment operator==========
let x = 10;
let y = "10";
console.log(x++);
console.log(x);
console.log(++x);
console.log(x);
console.log((x += 5));
console.log(x != 25);
console.log(x === y);

// TERNARY OPERATOR========
let marks = 10;
let result = marks > 30 ? "pass" : "fail";
console.log(result);

// conditional statement=========
let t = 9;

if (t > 12) {
  console.log("result is  greaterthan12");
} else t < 12 && t > 8;
console.log("result is lessthan 12,8");

// switch operator=======
let Name = "ravi";
switch (Name) {
  case "ravi":
    console.log("welcome ravi");
    break;
  case "hari":
    console.log("welcome hari");
    break;
  case "suri":
    console.log("welcome suri");
    break;
  case "nari":
    console.log("welcome nari");
    break;
  default:
    console.log(new user());
}

let FirstName = [1, 2, 3, 4, 4];
for (let key of FirstName) console.log(key);

// Loops============
for (let i = 0; i <= 5; i++) console.log("hii" + i);

let z = 4;
if (z == 3) {
  console.log("result is 4");
} else console.log("no");

function mark(eng, maths) {
  console.log(eng + maths);
}
mark(24, 45);

for (let i = 0; i <= 5; i++) mark(24, 45);

// age calculator==========

function age(year) {
  return 2022 - year;
}
console.log(age(2000));

// Arrow functions========

const agee = (year) => 2022 - year;
console.log(agee(1998));

const addition = (a, c) => {
  return a + c;
};
console.log(addition(34, 67));

const average = (e, f, g) => (e + f + g) / 3;
console.log(average(4, 6, 9));

// const chennai=average(33,44,55);
// const mumbai=average(22,66,88);
// const hyderabad=average(22,11,88);
// console.log(chennai,mumbai,hyderabad)

// ARRAY FUNCTIONS---------

const number = [1, 3, 2, 4, 6, 5, 8, 9];
console.log(number);

number[3] = 1;
number.push(10);

console.log(number[8]);

// // remove elememts
// number.pop();
// console.log(number);

// objects concept=======
const venkat = {
  firstname: "venkat",
  secondname: "sai",
  age: 25,
  work: "student",
};
console.log(this.work);

 const ven=[1,4,6,3,7,8,2,4]
for (let i = 0; i < 7; i++) {
  console.log(ven[i]);
}

