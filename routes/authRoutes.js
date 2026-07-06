import express from "express";

import passport from "passport";

import HttpError from "../middleware/HttpError.js";

const router = express.Router();


router.get("/login",(req,res)=>{
    res.render("login");
});


export default router;