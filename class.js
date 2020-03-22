var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Moto {
    constructor(mark, model) {
        this.mark = mark;
        this.model = model;
        this.characteristic = mark + ' ' + model;
    }
}
class State extends Moto {
    constructor(mark, model, stateType) {
        super(mark, model);
        this.mark = mark;
        this.model = model;
        this.stateType = stateType;
        this.state = stateType;
    }
}
const honda = new Moto('Honda', 'XRE');
console.log(honda.characteristic);
const myMoto = new State('Hero', 'Pulse 200', 'Nueva');
console.log(myMoto.characteristic);
console.log(myMoto.state);
// Class and namespaces
var Blog;
(function (Blog) {
    ;
    class Post {
        constructor(post) {
            this.body = post.body;
            this.title = post.title;
        }
        printPost() {
            console.log(this.title);
            console.log(this.body);
        }
    }
    Blog.Post = Post;
})(Blog || (Blog = {}));
const post = new Blog.Post({
    title: 'Harry Popoter',
    body: 'Camara de los secretos'
});
post.printPost();
// Promises
console.log('\nPromises\n');
function promesa() {
    return new Promise((resolve, reject) => {
        let a;
        setTimeout(() => {
            a = 9;
            resolve(a);
        }, 2000);
    });
}
function llamar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('One');
        const numero = yield promesa();
        console.log('Number', numero);
        console.log('Two');
    });
}
llamar();
//# sourceMappingURL=class.js.map