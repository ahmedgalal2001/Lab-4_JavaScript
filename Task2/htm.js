const personConstructor = {
  money:0,
  sleepMood:"",
  healthRate:0,
  fullName:"",
  sleep: function (hours) {
    if (hours == 7) this.sleepMood = "happy";
    else if (hours > 7) this.sleepMood = "lazy";
    else this.sleepMood = "tired";
  },

  eat: function (meals) {
    if (meals == 3) this.healthRate = 100;
    else if (meals == 2) this.healthRate = 75;
    else if (meals == 1) this.healthRate = 50;
    else this.healthRate = "unknow rate";
  },

  buy: function (items) {
    if (items == 1) {
      this.money -= 10;
    }
  }
};

function createPerson(fullName, money, sleepMood, healthRate) {
  const person = Object.create(personConstructor);
  person.fullName = fullName;
  person.money = money;
  person.sleepMood = sleepMood;
  person.healthRate = healthRate;
  return person;
}

const person1 = createPerson("Ahmed galal", 100, "bad", 80);
person1.eat(2);
person1.buy(1);
person1.sleep(7);

console.log(person1);