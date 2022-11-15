const username: string = 'jfranco';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {
  constructor(public age: number, public lastname: string) { }
}

const nico = new Person(22, 'franco');
nico.age;
