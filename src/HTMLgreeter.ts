import Greeter from "./Greeter";

class HtmlGreeter extends Greeter {
    tagName: string = "h1";
    constructor(greeting: string, tagName: string){
        super(greeting)
        this.tagName = tagName;
    }
    greet(names:string){
        return `<${this.tagName}> ${this.greeting} ${names} </${this.tagName}>`;
    }
}

let thing: HtmlGreeter = new HtmlGreeter("como es ta","h3");
let thingy = thing.greet("Jose")
console.log(thingy);

export default HtmlGreeter;