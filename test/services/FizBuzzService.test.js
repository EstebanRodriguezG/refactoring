const FizzBuzzService = require("../../lib/services/FizzbuzzService")

describe("Test for FizzBuzzService", ()=>{

    test("Requerimiento 1: Probar la validacion FizzBuzz", ()=>{

        const explorer = {
                            username: "erodriguez",
                            mission: "node",
                            score: 15
                        }

        expect(FizzBuzzService.applyValidationInExplorer(explorer).trick).toBe("15");
    });
})