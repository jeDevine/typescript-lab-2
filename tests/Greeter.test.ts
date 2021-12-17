import Greeter from '../src/Greeter'

describe("testing greeter", () => {
    test("expected output: Hello James", () =>{
        let greeting: Greeter = new Greeter("Hello");
        let greeted = greeting.greet("James");
        expect(greeted).toBe("Hello James");
    });
    test("expected output: holha Kevin", () =>{
        let greeting: Greeter = new Greeter("holha");
        let greeted = greeting.greet("Kevin");
        expect(greeted).toBe("holha Kevin");
    });
});

