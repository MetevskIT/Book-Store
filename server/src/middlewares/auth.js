const { validateToken } = require('../services/userService')

function auth(req, res, next) {
    const token = req.headers["x-authorization"];
    if (token) {
        try {
            const payload = validateToken(token);

            req.user = {
                _id: payload.id,
                email: payload.email,
                token
            };

        } catch (error) {
            return res.status(401).json({ message: 'Access token is expired! Please login!' })
        }
    }
    next();
}

module.exports = auth;