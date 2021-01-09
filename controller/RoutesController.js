class RoutesController{
    static async addNumber(req,res,next) {
        let num1 =  parseInt(req.query.Number1);
        let num2 =  parseInt(req.query.Number2);
        let result;
        result = num1+num2;
        console.log(result);
        res.json({ 
        "success": true,   
        "firstNumber": num1,
        "secondNumber": num2,
        "result": result});
    }
}

module.exports = RoutesController;