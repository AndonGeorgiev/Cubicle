const id = require('uniqid');

class Cube {

    static cubes = [{
        id: '8u8bcl7jkkufwnspu',
        name: '1',
        id: '8u8bcln6kkufwu74s',
        name: 'Test cube one',
        description: "Test description for test cube one. Test number one. It's ok isn't it? First test description ending here! ",
        imageUrl: 'https://quizizz.com/_media/quizzes/426cb5fc-bf28-4535-8719-84eea612c50f_900_900',
        difficulty: '6'
    }];

    constructor(name, description, imageUrl, difficulty) {
        this.id = id();
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