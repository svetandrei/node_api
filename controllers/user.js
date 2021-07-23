const User = require('../models/index')
const errorHandler = require('../errorHandler')

module.exports.findAll = function(req, res) {
    User.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            errorHandler(res,err)
    });
}
module.exports.create = function(req, res) {
    const user = {
        name: req.body.name,
        age: req.body.age
    }

    User.create(user)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            errorHandler(res,err)
    });
}
module.exports.update = function(req, res) {
    User.update(req.body,
            {where: {id: req.params.id}}
        ).then(data => {
            if (data[0])
                res.json({message: 'User update!'})
            else
                res.json({message: 'User was not found or req.body is empty!'})
            })
        .catch(err => {
            errorHandler(res,err)
        });
}