const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzBuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFIle("./explorers.json");

const explorersInNodeMission = ExplorerService.filterByMission(explorers, "node");
console.log("explorersInNodeMission:");
console.log(explorersInNodeMission);

const amountOfExplorersInNodeMission = ExplorerService.getAmountOfExplorersByMission(explorers,"node");

console.log("amountOfExplorersInNodeMission:");
console.log(amountOfExplorersInNodeMission);

explorers.forEach((explorer,i) => {
    console.log("Explorer " + i);
    console.log(FizzBuzzService.applyValidationInExplorer(explorer));
});

console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));
