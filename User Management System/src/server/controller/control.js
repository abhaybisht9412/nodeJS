const Userdb = require('../model/model');

//create and save new user
exports.create = (req , res) => {
//validate request
if(!req.body){
    res.status(400).send({message : "content must not be empty!"});
    return;
}
// new user
    const user = new Userdb({
        name : req.body.name ,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status
    })
    //saving into db
    user.save(user)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send();
        message : err.message || "some error occured while create op"
    })
}
//retrieve and return user
exports.find = (req,res) => {
Userdb.find()
.then (user => {
    res.send(user)
})
    .catch(err => {
        res.status(500).send({message : err.message || "error occured while retrieving user info"})
    })
}

//update a user by id
exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).send({message : "Data to be updated cannot be empty"})
    }
    //getting id of user to be updated
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify : false})
    .then(data => {
        if(!data){
            res.status(404).send({message : `cannot find user with id ${id} ~!`})
        }else{

        }
    })
    .catch( err => {
        res.status(500).send({message : "Error in updating user info"})
    })
}

//delete a user by id
exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then( data => {
        if(!data){
        res.status(404).send({message : `cannot delete with ${id}`})
        }else{
            res.send({
                message : 'user was deleted successfully!'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message : `could not delete user with id ${id}`
        })
    })
}