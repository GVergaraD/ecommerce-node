const router = require("express").Router();

router.get("/usertest", (req,res) => {
    res.send("user test is succesfull");
});

router.post("/userposttest", (req,res) => {
    const username = req.body.username
    console.log(username)
    res.send("your username is: " + username)
});

module.exports = router