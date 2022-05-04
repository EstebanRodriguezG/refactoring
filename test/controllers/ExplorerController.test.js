const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", ()=>{

    test("Prueba 1: getExplorers by Mission", ()=>{

        const mission = "node";
        const explorersInMission = ExplorerController.getExplorersByMission(mission);

        expect(explorersInMission.length).toBe(10);
    });

    test("Prueba 2: getAmount of explorers by Mission", ()=>{

        const mission = "node";
        const amountOfExplorers = ExplorerController.getExplorersAmountByMission(mission);

        expect(amountOfExplorers).toBe(10);
    });

    test("Prueba 3: getUsernames of explorers by Mission", ()=>{

        const mission = "java";
        const usernames = ExplorerController.getExplorersUsernamesByMission(mission);

        expect(usernames.length).toBe(5);
    });

    test("Prueba 4: applyValidationInNumber FizzBuzz", ()=>{

        const score = 15;
        const fizzbuzz = ExplorerController.applyValidationInNumber(score);

        expect(fizzbuzz).toBe("FIZZBUZZ");
    });
});