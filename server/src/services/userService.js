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

async function findUserByIdAsync(id) {
    const user = await User.findById(id)
    if (!user) {
        throw new Error("User dont exist!");
    }
    return user;
}

async function checkRole(id) {
    const user = await User.findById(id)
    if (!user) {
        throw new Error("User dont exist!");
    }
    return user.role;
}

async function addToCart(userId, bookId) {

    try {
        const user = await findUserByIdAsync(userId);
        if (!user.cart.includes(bookId)) {
            await user.cart.push(bookId)
            user.save();
        }
    } catch (error) {
        return error;
    }
}

async function removeFromCart(userId, bookId) {

    try {
        const user = await findUserByIdAsync(userId);

        if (user.cart.includes(bookId)) {
            await user.cart.splice(user.cart.indexOf(bookId), 1)
            await user.save();
        }
    } catch (error) {
        return error;
    }
}

async function getBookFromCart(userId) {
    try {
        const books = User.findById(userId).populate('cart').select('cart')
        return books;
    } catch (error) {
        return error;
    }
}

async function logout() {

}

function createSession(user) {

    const payload = {
        id: user._id,
        email: user.email,
    }

    const accessToken = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: "1h"
    })

    return {
        id: user._id,
        email: user.email,
        accessToken,
        role:user.role
    }
}

function validateToken(token) {
    return jwt.verify(token, JWT_SECRET_KEY)
}
module.exports = {
    register,
    login,
    validateToken,
    findUserByIdAsync,
    addToCart,
    removeFromCart,
    getBookFromCart,
}