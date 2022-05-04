const fs = require("fs")

class Reader{


    static readJsonFIle(path){

        const rawdata = fs.readFileSync(path)
        return JSON.parse(rawdata)
    }
}

module.exports = Reader