class FizzBuzzService {

    static applyValidationInExplorer(explorer){

        if(explorer.score %3 === 0 && explorer.score %5 === 0){

            explorer.trick = "FIZZBUZZ";

        }else{

            explorer.trick = explorer.score %3 === 0 ? "FIZZ" : explorer.score %5 === 0 ? "BUZZ" : explorer.score;
            
        }

        return explorer;
    }

    static applyValidationInNumber(number){

        if(number %3 === 0 && number %5 === 0){

            return "FIZZBUZZ";

        }else{

            return number %3 === 0 ? "FIZZ" : number %5 === 0 ? "BUZZ" : number;
            
        }
    }



}

module.exports = FizzBuzzService;