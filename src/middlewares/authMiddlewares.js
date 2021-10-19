const { SECRET, TOKEN_KOOKIE_NAME } = require('../constants');
const jwt = require('jsonwebtoken');


exports.auth = function(req, res, next) {
    let token = req.cookies[TOKEN_KOOKIE_NAME];

    if (!token) {
        return next();
    }

    jwt.verify(token, SECRET, function(err, decodedToken) {
        if (err) {
            return res.status(401);
        }

        req.user = decodedToken
        next();
    });
}