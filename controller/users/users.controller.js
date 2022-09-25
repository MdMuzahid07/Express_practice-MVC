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

    const randomId = parseInt(Math.random() * 9);


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
    const data = "user added"


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

const updateAUser = (req, res, next) => {
    const data = "user updated"


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

const deleteAUser = (req, res, next) => {
    const data = "user deleted"


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

module.exports = {
    getUsers,
    addAUser,
    updateAUser,
    deleteAUser,
    getRandomUser
};