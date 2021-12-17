import Greeter from './Greeter'
import JavaScriptGreeter from './jsGreeter'
import LoudGreeter from './loudGreeter'
import HtmlGreeter from './HTMLgreeter';


let newGreeting: JavaScriptGreeter = new JavaScriptGreeter("Hello");
let newGreeted = newGreeting.greet("James");


let potato: LoudGreeter = new LoudGreeter("Hello");
potato.addVolume();
let tomato = potato.greet("James")

let thing: HtmlGreeter = new HtmlGreeter("como es ta","h3");
let thingy = thing.greet("Jose")