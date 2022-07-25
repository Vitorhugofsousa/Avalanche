const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/home")
})

router.get("/sobre", (req, res)=>{
    res.render("pages/sobre")
})


module.exports = router