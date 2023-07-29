const jwt = require('jsonwebtoken');

//checks if the password is correct. If it is, it sends a token to the client
module.exports = (req, res) =>{
    if(req.body.password === process.env.PASSWORD){
        const token = jwt.sign({
            userId: 1
        }, process.env.SECRET);
        res.json({token});
    }else{
        res.status(401).send('Incorrect password');
    }
}