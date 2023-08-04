// function sum(...args) {
//   let res = 0;
//   for (let key in args) {
//     res += args[key];
//   }
//   return res;
// }

// res = sum(1, 162, 758, 5758);
// console.log(res);

// numbers = [1, 162, 758, 5758];

// let start = 0;
// let new_list = numbers.reduce((elem, start) => elem + start);
// console.log(new_list);

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

function sayGB(name) {
  console.log(`Пока, ${name}!`);
}

function functionWithCallback(yes, no, name) {
  let isAuthorized = confirm();
  if (isAuthorized) {
    yes(name);
  } else {
    no(name);
  }
}

functionWithCallback(sayHi, sayGB, "Иван");
