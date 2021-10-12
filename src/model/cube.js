const mongoose = require('mongoose');

let cubeSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
    },

    description: {
        type: 'String',
        required: true,
        maxLength: 100,
    },

    imageUrl: {
        type: 'String',
        required: true,
        validate: /^https?:\/\/[a-z, 0-9]+[.,\/][a-z]+[.,\/]/gmi
    },

    difficulty: {
        type: 'Number',
        required: true,
        min: [1, "Min value should is equal to 1!"],
        max: [5, "Max value should is equal to 5!"],
    },

    accessories: [{
        type: "ObjectId",
        ref: "accessories",
    }]

});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;