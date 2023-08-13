class Person {
    constructor(private name: string, private height: number) {}

    toString(): string {
        return `Name: ${this.name}  Heigh: ${this.height}`;
    }
}

const person1 = new Person("Logan", 90);
console.log(person1.toString());