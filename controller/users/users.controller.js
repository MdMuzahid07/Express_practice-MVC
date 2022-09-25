const users = require('../../public/users.json');


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
        data: newUser
    })
    res.status(500).send({
        success: false,
        error: "Internal server error,data not found!"
    })
};

const updateAUser = (req, res, next) => {
    const newData = req.body;
    const { id } = req.params;
    const filter = { _id: id }

    const result = allUsers.map(user => user.id === Number(filter));

    res.status(200).send({
        success: true,
        message: "Success",
        data: result
    })
    res.status(500).send({
        success: false,
        error: "Internal server error,data not found!"
    })
};

const deleteAUser = (req, res, next) => {
    const id = req.params;
    const userCollection = users;
    // const result = userCollection.find(user => user.id === Number(id));
    console.log(result)


    res.status(200).send({
        success: true,
        message: "Success",
        data: id
    })
    res.status(500).send({
        success: false,
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