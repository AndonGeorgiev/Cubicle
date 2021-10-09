const Accessory = require('../model/Accessory');

const getAll = () => Accessory.find({}).lean();

function creat(name, description, imageUrl) {
    return Accessory.create({
        name,
        description,
        imageUrl,
    });
}


const accessoryService = {
    creat,
    getAll,
}

module.exports = accessoryService;