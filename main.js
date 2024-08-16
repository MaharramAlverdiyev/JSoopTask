class Person {
    constructor(name, surname, age, mezunAge) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.mezunAge = mezunAge;

    }
    dogumili() {
        const dogumili = new Date().getFullYear();
        return dogumili - this.age;
    }
    calculateMezunYear() {
        const currentYear2 = 6;
        return currentYear2 + person2.dogumili()
    }
}

const person1 = new Person("Eli", "Eliyev", 21);
const person2 = new Person("Maharram", "Alverdiyev", 21, 18);
const person3 = new Person("Mikayil", "Jafarov", 28);
console.log(person2);
console.log(person1);
console.log(person3);
console.log(person2.dogumili());
console.log(`${person2.name}'s birth year is ${person2.dogumili()}`);
console.log(`${person2.name} mektebi ${person2.calculateMezunYear()}da bitirib`);




// let now = new Date();
// alert( now ); 


