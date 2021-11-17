import { getCurrencies } from "./get-currencies";

describe("getCurrencies", () => {
    it("should contain USD AUD EUR", () =>{
        const result = getCurrencies();
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");
    }
    )
});