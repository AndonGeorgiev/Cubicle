class Cube {

    static cubes = [];

    constructor(name, description, imageUrl, difficulty) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    };

    static getAll() {
        return Cube.cubes;
    }

    static add(cube) {
        Cube.cubes.push(cube);
    }
}

module.exports = Cube;