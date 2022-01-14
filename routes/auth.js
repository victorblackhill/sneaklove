const express = require("express");
const router = new express.Router();
const UserModel = require("./../models/User")
const bcrypt = require("bcrypt")


// Route handlers

const findUser = async (req,res,next) => {
    
    try{
        req.found = await UserModel.findOne({email:req.body.email})
        console.log("found >>>>>>:",req.found)
        next()

    }catch(err){
        next(err)
    }

}

const createUser = async (req,res,next)=>{

    try{
        
        if(req.found){

            req.flash("error","This email exists already")
            res.redirect("/signup")

        }else{

            //crypt password
            req.body.password = bcrypt.hashSync(req.body.password, 10)
            createdUser = await UserModel.create(req.body)
            console.log(createdUser)

            req.flash("success","Your user was created")
            res.redirect("/signin")
        }

    }catch(err){
        next(err)
    }
}

const logIn = async (req,res,next)=>{

    try{

        console.log(req.body)

        console.log(">>>>",bcrypt.hashSync(req.body.password, 10))
        console.log(">>>>",req.found.password)

        if(!req.found){
            //user not found
            req.flash("error","Please verify your email address or create a user")
            res.redirect("/signin")


        }else if(!bcrypt.compareSync(req.body.password, req.found.password)){
            //wrong password
            req.flash("error","Please verify your password")
            res.redirect("/signin")

        }else{
            
            //create session
            const userObject = req.found.toObject(); // needed to convert mongoose object to classic js object
            delete userObject.password; // remove password before saving user in session
            req.session.currentUser = userObject;

            //redirect to the shop
            req.flash("success","Welcome back, buy your shoes")
            res.redirect("/sneakers/collection")

        }

        
    }catch(err){
        next(err)
    }
}

const logOut = async (req,res,next)=>{

    
    req.session.destroy(
        function (err) {
            res.redirect("/signin")
        })

}

// Helper 

const renderRequest = (req,res,next)=>{
    console.log(req.body)
    res.send(req.body)
}


// Post routes for the auth

router.post("/signup",findUser,createUser)

router.post("/signin",findUser,logIn)

router.get("/logout", logOut);

module.exports = router;


