var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hey Everyone",
    user: "Ali",
    added: new Date(),
  },
  {
    text: "Hey",
    user: "Draco",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = router;
