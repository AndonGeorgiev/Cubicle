const Accessory = require('../model/Accessory');

const getAll = () => Accessory.find({}).lean();

const getOne = (id) => Accessory.findById(id).lean();

const getOnlyNotAddedAccessories = (accessoryId) => Accessory.find({ _id: { $nin: accessoryId } }).lean();

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
    getOnlyNotAddedAccessories,
}

module.exports = accessoryService;