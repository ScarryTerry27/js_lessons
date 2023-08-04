let user = new Object({
  name: "Dima",
  second_name: "Diman",
});

const superUser = {
  name: "Ilyas",
  second_name: "Khasakhanov",
};

user.old = 12;
superUser["old"] = new Object({ old1: 14, old2: 18, old3: 23 });

user.sayHi = function sayHi() {
  console.log(`Привет, ${this.name}`);
};

function User() {
  this.name = "Ivan";
  this.second_name = "Ivanov";
  this.age = 43;
  this.sayHi = user.sayHi;
}

let new_obj = new User();

user.sayHi();
new_obj.sayHi();
