const express = require("express");
const app = express();

const middleware = (req , res , next) => {
    console.log(req.method);
    console.log(req.url);
    console.log( new Date());
    next()
}

app.get("/" , middleware , (req , res) => {
    res.send("Hello World")
})

app.listen(3000)