const {query} = require('express-validator');

class RoutesValidator {
    static check() {
        return [query('Number1','Number1 is required').isNumeric(),
                query('Number2','Number2 is required').isNumeric()] 
    }

}

module.exports = RoutesValidator;