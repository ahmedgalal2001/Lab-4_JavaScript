class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours == 7) this.sleepMood = "happy";
    else if (hours > 7) this.sleepMood = "lazy";
    else this.sleepMood = "tired";
  }

  eat(meals) {
    if (meals == 3) this.healthRate = 100;
    else if (meals == 2) this.healthRate = 75;
    else if (meals == 1) this.healthRate = 50;
    else this.healthRate = "unknow rate";
  }

  buy(items) {
    if (items == 1) {
      this.money -= 10;
    }
  }
}

const person2 = new Person("Ahmed galal", 100, "bad", 80);
person1.eat(2);
person1.buy(1);
person1.sleep(7);

console.log(person1);
