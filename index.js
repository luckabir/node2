const express = require("express");
const app = express();
const PORT = 7777;


const userRoute = require('./routes/User');
const commentsRoute = require('./routes/Comments');

app.use("/user", userRoute);
app.use("/comments", commentsRoute);

app.listen(PORT, () => {
    console.log("Server running");   
    });
