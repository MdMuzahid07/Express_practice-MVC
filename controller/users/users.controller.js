let users = require('../../public/users.json');


const getUsers = (req, res, next) => {

    const { limit, page } = req.query;

    const data = users.slice(0, limit);

    res.status(200).send({
        success: true,
        message: "Success",
        data: data
    })
    res.status(500).send({
        success: false,
        error: "Internal server error,data not found!"
    })
};

const getRandomUser = (req, res, next) => {

    const randomId = parseInt(Math.random() * 10);


    const result = users[randomId];

    res.status(200).send({
        success: true,
        message: "success",
        data: result
    })
    res.status(500).send({
        success: false,
        error: "internal server error!"
    })
}


const addAUser = (req, res, next) => {
    const newUser = req.body;
    const userCollection = users.push(newUser);


    res.status(200).send({
        success: true,
        message: "Success",
        data: userCollection
    })
    res.status(500).send({
        success: false,
        error: "Internal server error,data not found!"
    })
};

const updateAUser = (req, res, next) => {
    const data = req.body;
    const { gender, name, contact, address, photoUrl } = data;
    const { id } = req.params;
    const allUsers = users;



    let update = users.find(user => Number(user.id) === Number(id));

    const newData = {
        id: id,
        gender: gender,
        name: name,
        contact: contact,
        address: address,
        photoUrl: photoUrl
    }

    const marge = Object.assign(update, newData);

    res.status(200).send({
        success: true,
        message: "Success",
        data: marge
    })
    res.status(500).send({
        success: false,
        error: "Internal server error,data not found!"
    })
};

const deleteAUser = (req, res, next) => {
    const { id } = req.params;
    const filter = users.filter(user => Number(user.id) !== Number(id));

    users = filter

    res.status(200).send({
        success: true,
        message: "Success",
        data: users
    })
    res.status(500).send({
        success: true,
        error: "Internal server error,data not found!"
    })
};

module.exports = {
    getUsers,
    addAUser,
    updateAUser,
    deleteAUser,
    getRandomUser
};