
const ExplorerService = require('../services/ExplorerService');
const FizzBuzzService = require('../services/FizzbuzzService');
const Reader = require('../utils/Reader');
const path = require('node:path');

class ExplorerController{

    static getExplorersByMission(mission){

        const explorers = Reader.readJsonFIle(path.resolve("./explorers.json"));
        const explorersInNodeMission = ExplorerService.filterByMission(explorers, mission);

        return explorersInNodeMission;
    }

    static getExplorersUsernamesByMission(mission){

        const explorers = Reader.readJsonFIle(path.resolve("./explorers.json"));
        const userNamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return userNamesByMission;
    }

    static getExplorersAmountByMission(mission){

        const explorers = Reader.readJsonFIle(path.resolve("./explorers.json"));
        const amountOfExplorersInNodeMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);

        return amountOfExplorersInNodeMission;
    }




}

module.exports = ExplorerController;