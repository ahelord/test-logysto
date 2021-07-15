require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateJwt(email){
    return jwt.sign({ sub: email, id: email }, process.env.JWT_SECRET, { expiresIn: '15m' });
}

function decodeJwt(token){
    return jwt.decode(token);
}
module.exports = {
    generateJwt,
    decodeJwt

}
