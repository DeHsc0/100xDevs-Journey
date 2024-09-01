const express = require("express");
const app = express();

let reqCount = 0;
const middleware = (req , res , next) => {
    reqCount++
    next()
}

app.get("/" , middleware , (req , res) => {
    res.json({
        Total_Num_Of_Reqs : reqCount
    })
})

app.listen(3000)