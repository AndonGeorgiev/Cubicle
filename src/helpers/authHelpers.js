const jwt = require('josnwebtoken');

exports.jwtSing = function(playload, secret) {
    let promise = new Promise((resolve, reject) => {
        jwt.sing(playload, secret, function(err, token) {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        })
    });

    return promise;
}