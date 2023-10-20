const express = require('express');

const {PORT} = require("./config/serverConfig");

const setAndStartServer  = async() => {

    // create the express object
    const app = express();
    app.listen(process.env.PORT, () => {
        console.log(`Server started at ${process.env.PORT}`);
    })



}

setAndStartServer();