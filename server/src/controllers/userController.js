const userService = require('../services/userService')

async function register(req, res) {
    const { email, password } = req.body;

    try {
        const user = await userService.register(email, password)

        return res.status(201).json(user);

    } catch (error) {
        return res.status(401).json({ "message": error.message })
    }
}

async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await userService.login(email, password)
        return res.status(200).json(user);

    } catch (error) {
        return res.status(401).json({ "message": error.message })
    }
}

async function logout(req, res, next) {
    //return res.status(202).json(req.body)
}

module.exports = {
    register,
    login,
    logout,
};