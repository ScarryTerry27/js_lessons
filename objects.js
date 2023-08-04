// let user = new Object({
//   name: "Dima",
//   second_name: "Diman",
// });

// const superUser = {
//   name: "Ilyas",
//   second_name: "Khasakhanov",
// };

// user.old = 12;
// superUser["old"] = new Object({ old1: 14, old2: 18, old3: 23 });

// user.sayHi = function sayHi() {
//   console.log(`Привет, ${this.name}`);
// };

// function User() {
//   this.name = "Ivan";
//   this.second_name = "Ivanov";
//   this.age = 43;
//   this.sayHi = user.sayHi;
// }

// let new_obj = new User();

// user.sayHi();
// new_obj.sayHi();

function calculator(symbol, a, b) {
  if (symbol === "+") {
    res = a + b;
  } else if (symbol === "-") {
    res = a - b;
  } else if (symbol === "*") {
    res = a * b;
  } else if (symbol === "/") {
    res = a / b;
  } else if (symbol === "%") {
    res = a % b;
  } else if (symbol === "**") {
    res = a ** b;
  } else {
    alert("Что то пошло не так");
  }
  return res;
}

function multiCalc(symbols, ...args) {
  if (args.length <= 1 || args.length <= length.symbols) {
    return "Ошибка";
  }
  let res = null;
  let smb = 0;
  for (key in args) {
    if (key == 0) {
      res = args[key];
    } else {
      res = calculator(symbols[smb], res, args[0]);
      smb += 1;
    }
  }
  return res;
}
console.log(multiCalc(["*", "+", "*", "/"], 15, 3, 6, 8, 4));
