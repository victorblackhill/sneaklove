const express = require("express");
const router = new express.Router();
const TagModel = require("./../models/Tag")
const SneakerModel = require("./../models/Sneaker")
const fileUploader = require("./../config/cloudinary")

console.log(`\n\n
-----------------------------
-----------------------------
     wax on / wax off !
-----------------------------
-----------------------------\n\n`
);


// Callbacks --- --- --- --- --- --- --- --- --- --- --- ---


// Render products depending on the category
const renderProducts = async (req,res,next)=>{
  
  try{
    const param = req.params.cat
    const sneakers = param === "collection" ? await SneakerModel.find() : await SneakerModel.find({category:param})
    res.render("products.hbs",{sneakers})
  }catch(err){
    next(err)
  }

}

const renderManage = async (req,res,next)=>{
  
  try{
    const param = req.params.cat
    const sneakers = param === "collection" || !param ? await SneakerModel.find() : await SneakerModel.find({category:param})
    res.render("products_manage.hbs",{sneakers})
  }catch(err){
    next(err)
  }

}

const renderIndex = (req,res,next) => {
  res.render("index.hbs")
}

const redirectHome = (req,res,next)=>{
  res.redirect("/")
}

const renderOneProduct = async (req,res,next) => {
  
  try{
    const param = req.params.id
    const sneaker = await SneakerModel.findOne({_id:param})
    
    console.log(sneaker)
    res.render("one_product.hbs",{sneaker})

  }catch(err){
    next(err)
  }

}

const renderSignup = (req,res,next)=>{
  res.render("signup.hbs")
}

const renderSignin = (req,res,next)=>{
  res.render("signin.hbs")
}

const deleteProduct = async (req,res,next)=>{
    
  try{
    console.log(req.params.id)
    const deleted = await SneakerModel.findByIdAndDelete(req.params.id)
    console.log("deleted:>>>>>>>>>", deleted)
    req.flash("warning","Removed the following sneaker > > > > " + deleted.name)
    res.redirect("/prod-manage")
  }catch(err){
    next(err)
  }

}

const renderAdd = async (req,res,next) => {
  try{
      const tags = await TagModel.find()
      console.log(">>>>>>>>>",tags)
      res.render("products_add.hbs",{tags})
  }catch(err){
      next(err)
  }
}

const createSneaker = async (req,res,next)=>{

  try{
    if(req.file){req.body.picture = req.file.path}
    const createdSneaker = await SneakerModel.create(req.body)
    req.flash("warning","Added the following sneaker > > > > " + createdSneaker.name)
    res.redirect("/prod-manage")
  }catch(err){
    next(err)
  }

}

// Helper 

const renderRequest = (req,res,next)=>{
  //console.log(req.body, req.file.path)
  res.send(req.body)
}


// List of routes
router.get("/home", redirectHome)

router.get("/", renderIndex);

router.get("/sneakers/:cat", renderProducts);

router.get("/one-product/:id",renderOneProduct);

router.get("/prod-manage",renderManage);

router.get("/signup", renderSignup);

router.get("/signin", renderSignin);

router.get("/prod-add",renderAdd)

router.post("/prod-add",fileUploader.single("image"),createSneaker,renderRequest)

router.get("/product-edit/:id",renderRequest)

router.get("/product-delete/:id",deleteProduct)


module.exports = router;
