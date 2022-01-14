const { Schema, model } = require("mongoose")

const tagSchema = new Schema({
    label:{
        type: String,
        unique:true,
    }
})

const TagModel = model("tags",tagSchema)

module.exports = TagModel