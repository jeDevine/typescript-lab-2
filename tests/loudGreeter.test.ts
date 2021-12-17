import LoudGreeter from "../src/loudGreeter";

describe("testing jsGreeter", () =>{
    test("expected output: console.log(Hello James)", () =>{
        let newGreeting: LoudGreeter = new LoudGreeter("Hello");
        let newGreeted = newGreeting.greet("James");
        expect(newGreeted).toBe("Hello James!!!");
    });
    test("expected output: console.log(Hello James)", () =>{
        let newGreeting: LoudGreeter = new LoudGreeter("Top of the mornin");
        let newGreeted = newGreeting.greet("Jacob");
        expect(newGreeted).toBe("Top of the mornin Jacob!!!");
    });
});