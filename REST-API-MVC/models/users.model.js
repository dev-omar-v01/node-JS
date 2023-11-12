const {v4: uuidv4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        name: "omar",
        email: "omar@gmail.com",
    },
    {
        id: uuidv4(),
        name: "tanvir",
        email: "tanvir@gmail.com",
    },
    {
        id: uuidv4(),
        name: "faruk",
        email: "faruk@gmail.com",
    }

];

module.exports = users;
