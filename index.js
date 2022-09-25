const express = require('express');
const app = express();
const cors = require('cors');
const usersRoute = require('./routes/users/v1/users.route');
const port = process.env.PORT || 5000;



//middleware
app.use(cors());
app.use(express.json());


// main routes
app.use("/user", usersRoute);
app.use("/user/all", usersRoute);
app.use("/user/save", usersRoute);







// index routes
app.get("/", (req, res, nest) => {
    res.send("server running?")
});

app.all("*", (req, res, next) => {
    res.send("Internal server error, no route found!")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});

process.on("unhandledRejection", () => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});