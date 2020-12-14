module.exports = (req, res, next) => {
  req.session.currentUser = {
<<<<<<< HEAD
    _id: "5ec3aaa1dda5ba14c2c72fe8",
    username: "demo-admin",
    avatar: "https://cdn.onlinewebfonts.com/img_258083.png",
    role: "admin",
    email: "admin@shop-sp4.com",
=======
    _id: "5ec3aaa1dda5ba14c2c72fe8", // change the user id here to fit yor needs
    username: "demo-admin",
    avatar: "https://cdn.onlinewebfonts.com/img_258083.png",
    role: "admin",
    email: "admin@sneaklove.com",
>>>>>>> 45009f99de5acfe11da92847e64154e8ec4f8f45
  };
  next();
};
