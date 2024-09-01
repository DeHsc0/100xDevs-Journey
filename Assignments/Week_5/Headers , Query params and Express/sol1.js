const express = require("express");
const app = express();

// http://localhost:3000/${operations}?a=${num1}&b=${num2}

app.get("/sum" , (req , res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({
        sum : a + b
    })
})

app.get("/substract" , (req , res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({
        sum : a - b
    })
})

app.get("/divide" , (req , res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({
        sum : a / b
    })
})

app.get("/multiply" , (req , res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    res.json({
        sum : a * b
    })
})

app.listen(3000);