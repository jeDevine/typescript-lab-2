import HtmlGreeter from "../src/HTMLgreeter";

describe("testing jsGreeter", () =>{
    test("expected output: console.log(Hello James)", () =>{
        let thing: HtmlGreeter = new HtmlGreeter("como es ta","h3");
        let thingy = thing.greet("Jose")
        expect(thingy).toBe("<h3> como es ta Jose </h3>");
    });
    test("expected output: console.log(Hello James)", () =>{
        let newGreeting: HtmlGreeter = new HtmlGreeter("ran outta ideas", "title");
        let newGreeted = newGreeting.greet("Jacob");
        expect(newGreeted).toBe("<title> ran outta ideas Jacob </title>");
    });
});