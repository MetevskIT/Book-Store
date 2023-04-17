const { findUserByIdAsync } = require('../services/userService')

const isAdmin = async (req, res, next) => {
    if (!req.user) {
        res.status(401).json({ message: "Please log in!" })
    }
    const user = await findUserByIdAsync(req.user._id)

    if (user.role != "Admin") {
        res.status(401).json({ message: "You dont have permissions!" })
    }

    next();
}

const isLogged = async(req,res,next) =>{

    if (!req.user) {
        res.status(401).json({message:"Please log in!"});
    }
    next();
}

module.exports = {
    isAdmin,
    isLogged
}