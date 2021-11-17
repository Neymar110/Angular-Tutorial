import { greet } from "./greet";

describe("greet", () => {
    it("should return a string of 'Welocome Back!'.", () =>{
        const result = greet("Back");
        expect(result).toContain("Back");
    }
    )
});
