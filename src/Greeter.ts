class Greeter {
    greeting: string;
    constructor(greeting: string){
        this.greeting = greeting;
    }
    greet(names: string):string{
        return `${this.greeting} ${names}`;
    }
}
let greeting: Greeter = new Greeter("Hello");  //create new greeter
let greeted = greeting.greet("James"); //add name to greeter
console.log(greeted);
console.log(greeting.greet("Tommy"))


export default Greeter;

