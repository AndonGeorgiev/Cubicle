const Cube = require('./../model/cube');

const getAll = () => Cube.getAll();

const getOne = (id) => Cube.cubes.find(x => x.id === id);

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube(name, description, imageUrl, difficulty);
    Cube.add(cube);
}

const cubeServices = {
    getAll,
    create,
    getOne,
}

module.exports = cubeServices;