class Moto {
  characteristic: string;

  constructor(public mark: string, public model: string) {
    this.characteristic = mark + ' ' + model;
  }
}

class State extends Moto {
  state: string;
  constructor(public mark: string, public model: string, public stateType: string) {
    super(mark, model);
    this.state = stateType;
  }
}
const honda = new Moto('Honda', 'XRE');
console.log(honda.characteristic);

const myMoto = new State('Hero', 'Pulse 200', 'Nueva');
console.log(myMoto.characteristic);
console.log(myMoto.state);

// Class and namespaces

namespace Blog {
  export interface IPost {
    title: string;
    body: string;
  };

  export class Post implements IPost {
    title: string;
    body: string;

    constructor(post: IPost) {
      this.body = post.body;
      this.title = post.title;
    }
  
    printPost() {
      console.log(this.title);
      console.log(this.body);
    }
  }
}


const post = new Blog.Post(
  {
    title: 'Harry Popoter',
    body: 'Camara de los secretos'
  }
);

post.printPost();

// Promises

console.log('\nPromises\n');

function promesa(): Promise<number> {
  return new Promise((resolve, reject) => {
      let a: number;
      setTimeout(() => {
          a = 9;
          resolve(a);
      }, 2000);
  })
}

async function llamar(): Promise<void> {
  console.log('One');
  const numero = await promesa();
  console.log('Number', numero);
  console.log('Two');
}

llamar();
