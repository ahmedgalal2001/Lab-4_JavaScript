function createPerson(fullName, money, sleepMood, healthRate) {
  return {
    fullName,
    money,
    sleepMood,
    healthRate,

    sleep(hours) {
      if (hours == 7) this.sleepMood = "happy";
      else if (hours > 7) this.sleepMood = "lazy";
      else this.sleepMood = "tired";
    },

    eat(meals) {
      if (meals == 3) this.healthRate = 100;
      else if (meals == 2) this.healthRate = 75;
      else if (meals == 1) this.healthRate = 50;
      else this.healthRate = "unknow rate";
    },

    buy(items) {
      if (items == 1) {
        this.money -= 10;
      }
    },
  };
}
const person1 = createPerson("Ahmed galal", 100, "bad", 80);
person1.eat(2);
person1.buy(1);
person1.sleep(7);

console.log(person1);
