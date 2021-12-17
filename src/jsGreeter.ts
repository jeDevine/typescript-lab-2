import Greeter from "./Greeter";

class JavaScriptGreeter extends Greeter {
    greet(names: string): string {
        return `console.log(${this.greeting} ${names})`;
    }
}

let newGreeting: JavaScriptGreeter = new JavaScriptGreeter("Hello");
let newGreeted = newGreeting.greet("James");
console.log(newGreeted);

export default JavaScriptGreeter;