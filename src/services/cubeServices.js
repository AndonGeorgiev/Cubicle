const Cube = require('./../model/cube');

const getAll = () => Cube.getAll();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);
    Cube.add(cube);
}

const cubeServices = {
    getAll,
    create,
}

module.exports = cubeServices;