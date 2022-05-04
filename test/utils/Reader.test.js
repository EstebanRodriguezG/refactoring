const Reader = require('./../../lib/utils/Reader')

describe("Test for Reader",()=>{

    test("Requerimiento 1: Leer un archivo JSON dado un path", ()=>{

        const explorers = Reader.readJsonFIle("./datos.json")

        expect(explorers.length).toBe(3)
    })
})