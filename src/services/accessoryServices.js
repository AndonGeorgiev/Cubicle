const Accessory = require('../model/Accessory');

const getAll = () => Accessory.find({}).lean();

const getOne = (id) => Accessory.findById(id).lean();

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
    getOne,
}

module.exports = accessoryService;