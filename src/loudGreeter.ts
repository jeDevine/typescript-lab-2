import Greeter from "./Greeter";

class LoudGreeter extends Greeter {
    private extra: string = "!!!";
    addVolume():void {
        this.extra = this.extra + "!"
    }
    greet(names: string):string {
        return super.greet(names) + this.extra;        
    }
}

let potato: LoudGreeter = new LoudGreeter("Hello");
potato.addVolume();
let tomato = potato.greet("James")
console.log(tomato);

export default LoudGreeter;