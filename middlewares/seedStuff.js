
require("dotenv").config()
require("./../config/mongodb")
const mongoose = require("mongoose")
//plug to the DB require(".")

const seedStuff = async (seeds,myModel)=>{



    try{
        const deleted = await myModel.deleteMany()
        const status = await myModel.find()
        console.log("Status after deleted, contained elements ",status.length)
        const seeded = await myModel.create(seeds)
        console.log("created elements",seeded.length)
        console.log("details >>>>>",seeded)

        
        mongoose.connection.close(()=>{console.log("connection ended successefully")})

    }catch(err){
        console.error(err)
    }

}


module.exports = seedStuff