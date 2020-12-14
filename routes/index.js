const express = require("express");
const router = express.Router();

<<<<<<< HEAD
return console.log(`
-----------------------------
-----------------------------
node says : wax on / wax off !
-----------------------------
-----------------------------`
=======
return console.log(`\n\n
-----------------------------
-----------------------------
     wax on / wax off !
-----------------------------
-----------------------------\n\n`
>>>>>>> 45009f99de5acfe11da92847e64154e8ec4f8f45
);

router.get("/", (req, res) => {
  res.send("foo");
});

router.get("/sneakers/:cat", (req, res) => {
  res.send("bar");
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});


module.exports = router;
