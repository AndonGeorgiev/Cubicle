const Cube = require('../model/Cube');

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty,

    })
    return cube.save();
}

const cubeServices = {
    getAll,
    create,
    getOne,
}

module.exports = cubeServices;