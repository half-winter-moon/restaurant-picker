const validator = require('./validate.js');
const saveCuisine = (req, res, next) => {
    const validationRule = {
        "name":"required|string",
        "description":"string"
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status){
            res.status(412)
                .send({
                    success:false,
                    message:'Incorrect entry',
                    data:err
                });
        }
        else{
            next();
        }
    })
}

const saveUser = (req, res, next) => {
    const validationRule = {
        "name":"required|string",
        "reviewsPosted" : "array",
        "password":"required|string",
        "email":"required|string"
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status){
            res.status(412)
                .send({
                    success:false,
                    message:'Incorrect entry',
                    data:err
                });
        }
        else{
            next();
        }
    })
}

module.exports = {
    saveCuisine,
    saveUser
}