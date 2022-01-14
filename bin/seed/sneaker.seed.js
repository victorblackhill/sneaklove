const { Schema } = require("mongoose")
const seedStuff = require("./../../middlewares/seedStuff")
const SneakerModel = require("./../../models/Sneaker")

const sneakerSeed = [
    {
    name: "firstShoe",
    ref:"A1" ,
    size: 41 ,
    price : 50 ,
    category : "men",
    picture : "https://res.cloudinary.com/blackhilldev/image/upload/c_thumb,w_200,g_face/v1642089465/shoes/chaussure_htlrfr.png" ,
        },
    {
        name: "womenShoe",
        ref:"A2" ,
        size: 37 ,
        price : 80 ,
        category : "women",
            },
    {
        name: "thirdShoe",
        ref:"A3" ,
        size: 30 ,
        price : 40 ,
        category : "kids",
        picture : "https://res.cloudinary.com/blackhilldev/image/upload/c_thumb,w_200,g_face/v1642089465/shoes/chaussure_htlrfr.png",
        sneakertag: ["61e045ead7490b107f1b35b6","61e045ead7490b107f1b35b7"]       
    }

]   

/*
{ _id: 61e045ead7490b107f1b35b6, label: 'fashion', __v: 0 },
{ _id: 61e045ead7490b107f1b35b7, label: 'old-school', __v: 0 },
{ _id: 61e045ead7490b107f1b35b8, label: 'cheap', __v: 0 },
{ _id: 61e045ead7490b107f1b35b9, label: 'classy', __v: 0 }

- > sur la correction d'artistify ouy sur ce lab
 a) récupérer la liste des id avec un find
 b) faire un random et insérer au hasard

 Devrait fonctionner avec le texte

*/

seedStuff(sneakerSeed,SneakerModel)