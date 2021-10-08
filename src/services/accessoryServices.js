const Accessory = require('../model/Accessory');

function creat(name, description, imageUrl) {
    return Accessory.create({
        name,
        description,
        imageUrl,
    });
}


const accessoryService = {
    creat,
}

module.exports = accessoryService;