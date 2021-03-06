const Cube = require('../model/Cube');
const Accessory = require('../model/Accessory');

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

const attach = async(cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
}

const deleteOne = (id) => Cube.findByIdAndDelete(id);

const update = (id, cube) => Cube.findOneAndUpdate(id, cube, { runValidators: true });


const cubeServices = {
    getAll,
    getOne,
    create,
    attach,
    deleteOne,
    update,
}

module.exports = cubeServices;