import JavaScriptGreeter from "../src/jsGreeter";


describe("testing jsGreeter", () =>{
    test("expected output: console.log(Hello James)", () =>{
        let newGreeting: JavaScriptGreeter = new JavaScriptGreeter("Hello");
        let newGreeted = newGreeting.greet("James");
        expect(newGreeted).toBe("console.log(Hello James)");
    });
    test("expected output: console.log(Hello James)", () =>{
        let newGreeting: JavaScriptGreeter = new JavaScriptGreeter("sup");
        let newGreeted = newGreeting.greet("pimp");
        expect(newGreeted).toBe("console.log(sup pimp)");
    });
})