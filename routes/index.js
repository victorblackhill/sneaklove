const express = require("express");
const router = new express.Router();

const SneakerModel = require("./../models/Sneaker")

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
    res.redirect("/product-manage")
  }catch(err){
    next(err)
  }

}

const renderAdd = (req,res,next)=>{

  res.render("products_add.hbs")

}

// Helper 

const renderRequest = (req,res,next)=>{
  console.log(req.body)
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

router.get("/product-edit/:id",renderRequest)

router.get("/product-delete/:id",deleteProduct)


module.exports = router;
