// Controller
const ExplorerController = require("./controllers/ExplorerController");

// Express
const express = require('express');
const ExplorerService = require("./services/ExplorerService");
const app = express();

// Config
const port = 3001;
app.use(express.json());

// HTTP Methods

app.get('/', (request, response) =>{

    response.json({message:"FizzBuzz Api Welcome"});
});



app.get('/v1/explorers/:mission', (request, response) =>{

    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    if(explorersInMission.length > 0){

        response.status(200).json({result:"success", explorers: explorersInMission});

    }else{
        response.status(200).json({result:"error", message:"Sorry there aren't explorers!"});
    }
});


app.get('/v1/explorers/amount/:mission', (request, response)=>{

    const mission = request.params.mission;
    const amountOfExplorers = ExplorerController.getExplorersAmountByMission(mission);

    response.status(200).json({result:"success", mission: mission, amount: amountOfExplorers});


});

app.get('/v1/explorers/usernames/:mission', (request, response) =>{

    const mission = request.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);

    if(usernames.length > 0){

        response.status(200).json({result:"success", usernames: usernames});

    }else{

        response.status(200).json({result:"error", message:"Sorry there aren't usernames!"});
    }

    

});


// Server
app.listen(port,()=>{

    console.log(`Server API Ready! at port ${port}`);
})