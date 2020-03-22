type Fruits = Array<string>;

interface Person {
  name: string,
  age: number
};

type PersonArray = Array<Person>;

const list: string[] = ['hola', 'toto'];
const fruits: Fruits = ['banana', 'apple'];

const person: PersonArray = [
  {
    name: 'ana',
    age: 9
  },
  {
    name: 'toto',
    age: 8
  }
];
