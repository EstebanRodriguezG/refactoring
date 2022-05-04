class ExplorerService{

    static filterByMission(explorers, mission){

        const explorersByMission =  explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;

    }

    static getAmountOfExplorersByMission(explorers, mission){

        const explorersByMission =  explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission.length;

    }

    static getExplorersUsernamesByMission(explorers, mission){

        return  this.filterByMission(explorers, mission).map((explorer) =>(explorer.githubUsername));
        
    }


}

module.exports = ExplorerService;