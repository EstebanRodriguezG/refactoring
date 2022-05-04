const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test for ExplorerService",()=>{

    test("Requerimiento 1: Calcular el total de explorers en una mision", ()=>{

        const explorers = [{name: "Exp 1", mission: "node"},{name:"Exp 2", mission:"node"},{name:"Exp 3", mission:"java"},{name:"Exp 4", mission:"node"}];

        const AmountOfExplorersInNodeMission = ExplorerService.getAmountOfExplorersByMission(explorers,"node");

        expect(AmountOfExplorersInNodeMission).toBe(3);
    });

    test("Requerimiento 2: Obtener la lista de explorers en una mission", ()=>{

        const explorers = [{name: "Exp 1", mission: "node"},{name:"Exp 2", mission:"java"},{name:"Exp 3", mission:"java"},{name:"Exp 4", mission:"node"}];

        const explorersInNodeMission = ExplorerService.filterByMission(explorers, "node");

        expect(explorersInNodeMission.length).toBe(2);
    });

    
    test("Requerimiento 3: Obtener los username de los explorers", ()=>{

        const explorers = [{githubUsername: "erodriguezg27", mission: "node"}];

        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers,"node");

        expect(usernames[0]).toBe("erodriguezg27");

    });

    

    

});