function Person(fullName, money, sleepMood, healthRate) {
  this.fullName = fullName;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;
}

Person.prototype.sleep = function (hours) {
  if (hours == 7)
    this.sleepMood = "happy";
  else if (hours > 7)
    this.sleepMood = "lazy";
  else
    this.sleepMood = "tired";
};
//3 meals -> 100 health rate, 
//2 meals -> 75 health rate, 1 meal-> 50 health rate

Person.prototype.eat = function (meals) {
  if (meals == 3) this.healthRate = 100;
  else if(meals == 2) this.healthRate = 75;
  else if (meals == 1) this.healthRate = 50;
  else this.healthRate = "unknow rate";
};

Person.prototype.buy = function (items) {
  if (items == 1) {
    this.money -= 10;
  }
};

const person1 = new Person("Ahmed galal", 100, "bad", 80);
person1.eat(2);
person1.buy(1);
person1.sleep(7);

console.log(person1);