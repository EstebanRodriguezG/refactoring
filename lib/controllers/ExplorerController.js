
const ExplorerService = require('../services/ExplorerService');
const FizzBuzzService = require('../services/FizzbuzzService');
const Reader = require('../utils/Reader');

class ExplorerController{

    static getExplorersByMission(mission){

        const explorers = Reader.readJsonFIle("../../explorers.json");
        const explorersInNodeMission = ExplorerService.filterByMission(explorers, mission);

        return explorersInNodeMission;
    }

    static getExplorersUsernamesByMission(mission){

        const userNamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return userNamesByMission;
    }

    static getExplorersAmountByMission(mission){

        const amountOfExplorersInNodeMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);

        return amountOfExplorersInNodeMission;
    }




}

module.exports = ExplorerController;