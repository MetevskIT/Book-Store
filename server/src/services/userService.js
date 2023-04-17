const User = require('../data/models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "MYMYSECRETSECRET";

async function register(email, password) {

    const existing = await User.findOne({ email: email })

    if (existing) {
        throw new Error('This email is taken!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        hashedPassword
    })

    await user.save();

    return createSession(user)
}

async function login(email, password) {

    const user = await User.findOne({ email: email })

    if (!user) {
        throw new Error("Invalid email or password!");
    }

    const compare = await bcrypt.compare(password, user.hashedPassword);

    if (!compare) {
        throw new Error("Invalid email or password!");
    }

    return createSession(user)
}

async function findUserByIdAsync(id){
    const user = await User.findById(id)
    if (!user) {
        throw new Error("User dont exist!");
    }
}

async function addToCart(){

}

async function removeFromCart(){
    
}

async function getBookFromCart(){
    
}

async function addToFavorite(){

}

async function removeFromFavorite(){
    
}

async function getBookFromFavorite(){
    
}

async function logout() {

}

function createSession(user) {

    const payload = {
        id: user._id,
        email: user.email,
    }

    const accessToken = jwt.sign(payload, JWT_SECRET_KEY, {
        //expiresIn: "40h"
    })

    return {
        id: user._id,
        email: user.email,
        accessToken
    }
}

function validateToken(token) {

    return jwt.verify(token, JWT_SECRET_KEY)


}
module.exports = {
    register,
    login,
    validateToken,
    findUserByIdAsync
}