const router = require("express").Router();

//User Route
//Get All Users
//Get User By ID
//POST Create User
//PUT Update User
//Delete Delete User

router.get("/", (req, res) => {
  res.send("Users");
});

router.post("/", (req, res) => {
  res.send("Users");
});

router.put("/", (req, res) => {
  res.send("Users");
});

router.delete("/", (req, res) => {
  res.send("Users");
});
module.exports = router;
