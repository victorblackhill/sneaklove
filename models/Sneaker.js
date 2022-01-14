const { Schema, model } = require("mongoose")

const sneakerSchema = new Schema({
   name:String,
   ref:{
    type:String,
    unique:true
        },
    size:Number,
    description:String,
    price:Number,
    category:{
        type:String,
        enum:["men","women","kids"]
    },
    picture:
   { type:String,
    default:"https://res.cloudinary.com/blackhilldev/image/upload/c_thumb,w_200,g_face/v1642088994/shoes/Capture_d_e%CC%81cran_2022-01-13_a%CC%80_16.49.12_wwbg11.png"
    },
    sneakertag : [{
        type:Schema.Types.ObjectId,
        ref:"tags",
    }]
})

const SneakerModel = model("sneakers",sneakerSchema)

module.exports = SneakerModel